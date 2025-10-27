import { getUserDetails, getUserToken } from "@/services/auth.services";
import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query";
import { createContext, useState, useEffect, ReactNode } from "react";

interface User {
  login: {
    email: string | null;
    password: string | null;
  };
}

interface AuthContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  loginMutation: UseMutationResult<
    { token: string },
    Error,
    { email: string; password: string },
    unknown
  >;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string | null>(null);

  const token = (userToken) ?? "";
  const [user, setUser] = useState<User>({
    login: {
      email: null,
      password: null,
    },
  });

  const loginMutation = useMutation({
    mutationFn: getUserToken,
    onSuccess: (data) => {
      setUserToken(data.accessToken)
      localStorage.setItem("user_access", data.accessToken);
    },
    onError: (error) => {
      setUserToken(null)
      console.error("Login error:", error);
    },
  });

  const {
    data: userProfileData,
    isLoading: loadingUserProfile,
    error: userProfileDataError,
  } = useQuery({
    queryKey: ["userDetails", token],
    queryFn: () => getUserDetails(token),
    enabled: !!token,
  });

  useEffect(() => {
    console.log(userProfileData)
  }, [userProfileData]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginMutation
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
