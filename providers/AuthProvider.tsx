import { getUserToken } from "@/services/auth.services";
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
  const [user, setUser] = useState<User>({
    login: {
      email: null,
      password: null,
    },
  });

  const loginMutation = useMutation({
    mutationFn: getUserToken,
    onSuccess: (data) => {
      console.log("Logged in:", data);
      localStorage.setItem("token", data.token);
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
  });

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
