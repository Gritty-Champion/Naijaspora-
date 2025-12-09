import { path } from "@/routes";
import {
  getUserDetails,
  getUserToken,
  refreshToken,
  registerUser,
  requestPasswordReset,
  resetPassword,
  changePassword
} from "@/services/auth.services";
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
  accessToken?: string;
  error?: boolean;
  message?: string;
  status?: number;
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
  registerMutation: UseMutationResult<
    any,
    Error,
    { first_name: string; last_name: string; email: string; password: string },
    unknown
  >;
  requestPasswordResetMutation: UseMutationResult<
    any,
    Error,
    string,
    unknown
  >;
  resetPasswordMutation: UseMutationResult<
    any,
    Error,
    { token: string; newPassword: string },
    unknown
  >;
  changePasswordMutation: UseMutationResult<
    any,
    Error,
    { currentPassword: string; newPassword: string; token: string },
    unknown
  >;
  logout: () => void;
  userToken: string | null;
  isAuthenticating: boolean;
  isAuthenticated: boolean;
  authError: string | null;
  setAuthError: React.Dispatch<React.SetStateAction<string | null>>;
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

        if (refreshResponse?.accessToken) {
          console.log("Token refresh successful");
          setUserToken(refreshResponse.accessToken);
          localStorage.setItem("user_access", refreshResponse.accessToken);
          refreshAttemptsRef.current = 0;
        } else {
          console.warn("No refresh token available");
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
      // Check if response contains an error
      if (data.error) {
        console.error("Login failed:", data.message);
        setAuthError(data.message);
        // Don't clear the form inputs on login error, only clear token
        setUserToken(null);
        clearStoredToken();
        return;
      }

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
        setUserToken(null);
        clearStoredToken();
      }
    },
    onError: (error) => {
      console.error("Login error:", error);
      const errorMessage = error instanceof Error ? error.message : "Login failed";
      setAuthError(errorMessage);
      setUserToken(null);
      clearStoredToken();
    },
  });

  // Register mutation
  const registerMutation = useMutation({
  mutationFn: registerUser,
  onSuccess: (data, variables) => {
    // Check if response contains an error
    if (data.error) {
      console.error("Registration failed:", data.message);
      setAuthError(data.message);
      return;
    }

    console.log("Registration success:", data);
    // Clear any previous errors
    setAuthError(null);
    // redirect to check email page with the email from registration form
    router.push({
      pathname: path.checkEmail,
      query: { email: variables.email },
    });
  },
  onError: (error) => {
    console.error("Registration error:", error);
    const errorMessage = error instanceof Error ? error.message : "Registration failed";
    setAuthError(errorMessage);
  },
});

  // Request password reset mutation
  const requestPasswordResetMutation = useMutation({
    mutationFn: requestPasswordReset,
    onSuccess: (data) => {
      console.log("Password reset email sent:", data);
      setAuthError(null);
    },
    onError: (error) => {
      console.error("Password reset request error:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to request password reset";
      setAuthError(errorMessage);
    },
  });

  // Reset password mutation
  const resetPasswordMutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: (data) => {
      if (data.error) {
        console.error("Password reset failed:", data.message);
        setAuthError(data.message);
        return;
      }

      console.log("Password reset successful:", data);
      setAuthError(null);
    },
    onError: (error) => {
      console.error("Password reset error:", error);
      const errorMessage = error instanceof Error ? error.message : "Password reset failed";
      setAuthError(errorMessage);
    },
  });

  // Change password mutation
  const changePasswordMutation = useMutation({
    mutationFn: changePassword,
    onSuccess: (data) => {
      if (data.error) {
        console.error("Password change failed:", data.message);
        setAuthError(data.message);
        return;
      }

      console.log("Password changed successfully:", data);
      // Update token since backend returns new accessToken
      if (data.accessToken) {
        setUserToken(data.accessToken);
        localStorage.setItem("user_access", data.accessToken);
      }
      setAuthError(null);
    },
    onError: (error) => {
      console.error("Password change error:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to change password";
      setAuthError(errorMessage);
    },
  });



  // Fetch user profile when token is available
  const {
    data: userProfileData,
    error: profileError,
    isError: isProfileError,
    isFetching: isProfileFetching,
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

        if (refreshResponse?.accessToken) {
          console.log("Token refresh successful");
          setUserToken(refreshResponse.accessToken);
          localStorage.setItem("user_access", refreshResponse.accessToken);
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

  // Consider user as "authenticating" if initial auth is running OR if we have a token but profile is still loading
  // This prevents race conditions when refreshing protected pages
  const isStillAuthenticating = isAuthenticating || (!!userToken && isProfileFetching);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginMutation,
        registerMutation,
        requestPasswordResetMutation,
        resetPasswordMutation,
        changePasswordMutation,
        logout,
        userToken,
        isAuthenticating: isStillAuthenticating,
        isAuthenticated,
        authError,
        setAuthError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
