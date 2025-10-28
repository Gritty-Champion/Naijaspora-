import { path } from "@/routes";
import { getUserDetails, getUserToken, refreshToken } from "@/services/auth.services";
import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { createContext, useState, useEffect, ReactNode, useCallback, useRef } from "react";

interface User {
  login: {
    email: string | null;
    password: string | null;
  };
  profile: {
    email: string;
    first_name: string;
    last_name: string;
  };
}

interface TokenResponse {
  accessToken: string;
}

interface AuthContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  loginMutation: UseMutationResult<
    TokenResponse,
    Error,
    { email: string; password: string },
    unknown
  >;
  logout: () => void;
  userToken: string | null;
  isAuthenticating: boolean;
  isAuthenticated: boolean;
  authError: string | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const MAX_REFRESH_ATTEMPTS = 3;
const TOKEN_KEY = "user_access";

// Utility function to clear token from storage
const clearStoredToken = (): void => {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.error("Error clearing token:", error);
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [userToken, setUserToken] = useState<string | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const [user, setUser] = useState<User>({
    login: { email: null, password: null },
    profile: { email: "", first_name: "", last_name: "" },
  });

  // Track refresh attempts to prevent infinite loops
  const refreshAttemptsRef = useRef(0);
  const isRefreshingRef = useRef(false);

  // Cleanup function
  const clearAuthState = useCallback(() => {
    setUserToken(null);
    clearStoredToken();
    setUser({
      login: { email: null, password: null },
      profile: { email: "", first_name: "", last_name: "" },
    });
    refreshAttemptsRef.current = 0;
    setAuthError(null);
  }, []);

  // Logout function
  const logout = useCallback(() => {
    clearAuthState();
    router.push(path.login);
  }, [router, clearAuthState]);

  // Initialize authentication on mount
  useEffect(() => {
    const initAuth = async () => {
      setIsAuthenticating(true);
      setAuthError(null);

      try {
        // Check for stored token first
        const storedToken = localStorage.getItem("user_access");

        if (storedToken) {
          console.log("Found valid stored token");
          setUserToken(storedToken);
          setIsAuthenticating(false);
          return;
        }

        // Attempt to refresh token
        console.log("No stored token, attempting refresh...");
        const refreshResponse = await refreshToken();
        const token = refreshResponse.accessToken;

        if (token) {
          console.log("Token refresh successful");
          setUserToken(token);
          localStorage.setItem("user_access", token);
          refreshAttemptsRef.current = 0;
        } else {
          console.warn("Token refresh returned invalid data");
          clearAuthState();
        }
      } catch (error) {
        console.error("Error during auth initialization:", error);
        setAuthError("Failed to initialize authentication");
        clearAuthState();
      } finally {
        setIsAuthenticating(false);
      }
    };

    initAuth();
  }, []); // Only run once on mount

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: getUserToken,
    onSuccess: (data) => {
      const token = data.accessToken;

      if (token) {
        console.log("Login successful");
        setUserToken(token);
        localStorage.setItem("user_access", token);
        setAuthError(null);
        refreshAttemptsRef.current = 0;
      } else {
        console.error("Invalid token received from login");
        setAuthError("Invalid authentication response");
        clearAuthState();
      }
    },
    onError: (error) => {
      console.error("Login error:", error);
      const errorMessage = error instanceof Error ? error.message : "Login failed";
      setAuthError(errorMessage);
      clearAuthState();
    },
  });

  // Fetch user profile when token is available
  const {
    data: userProfileData,
    error: profileError,
    isError: isProfileError,
  } = useQuery({
    queryKey: ["userDetails", userToken],
    queryFn: () => {
      if (!userToken) {
        throw new Error("No token available");
      }
      return getUserDetails(userToken);
    },
    enabled: !!userToken && !isAuthenticating,
    retry: 1,
    retryDelay: 1000,
  });

  // Handle token refresh on 401 errors
  useEffect(() => {
    if (!isProfileError || !profileError || !userToken) {
      return;
    }

    const status = (profileError as any)?.status;

    // Only handle 401 errors
    if (status !== 401) {
      console.error("Profile fetch error:", profileError);
      return;
    }

    // Prevent multiple simultaneous refresh attempts
    if (isRefreshingRef.current) {
      console.log("Refresh already in progress, skipping...");
      return;
    }

    // Check if we've exceeded max attempts
    if (refreshAttemptsRef.current >= MAX_REFRESH_ATTEMPTS) {
      console.error("Max refresh attempts exceeded, logging out");
      setAuthError("Session expired. Please log in again.");
      logout();
      return;
    }

    const handleTokenRefresh = async () => {
      isRefreshingRef.current = true;
      refreshAttemptsRef.current += 1;

      console.log(
        `Attempting token refresh (${refreshAttemptsRef.current}/${MAX_REFRESH_ATTEMPTS})`,
      );

      try {
        const refreshResponse = await refreshToken();
        const newToken = refreshResponse.accessToken;

        if (newToken) {
          console.log("Token refresh successful");
          setUserToken(newToken);
          localStorage.setItem("user_access", newToken);
          setAuthError(null);
          refreshAttemptsRef.current = 0;
        } else {
          console.error("Token refresh returned invalid data");

          if (refreshAttemptsRef.current >= MAX_REFRESH_ATTEMPTS) {
            setAuthError("Unable to refresh session. Please log in again.");
            logout();
          }
        }
      } catch (error) {
        console.error("Token refresh failed:", error);

        if (refreshAttemptsRef.current >= MAX_REFRESH_ATTEMPTS) {
          setAuthError("Session refresh failed. Please log in again.");
          logout();
        }
      } finally {
        isRefreshingRef.current = false;
      }
    };

    handleTokenRefresh();
  }, [isProfileError, profileError, userToken, logout]);

  // Update user profile when data is available
  useEffect(() => {
    if (userProfileData?.email) {
      console.log("User profile loaded");
      setUser((prev) => ({
        ...prev,
        profile: {
          email: userProfileData.email,
          first_name: userProfileData.first_name,
          last_name: userProfileData.last_name,
        },
      }));
      setAuthError(null);
    }
  }, [userProfileData]);

  const isAuthenticated = !!userToken && !!userProfileData?.email;

  console.log(isAuthenticated)
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginMutation,
        logout,
        userToken,
        isAuthenticating,
        isAuthenticated,
        authError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
