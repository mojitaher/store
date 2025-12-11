"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import Auth from "../api/auth";
type User = {
  id?: string;
  name: string;
  password?: string;
};
interface AuthContextProps {
  token: string | null;
  user: User | null;
  auth: (token: string) => void;
  login: (token: string) => void;
  logout: () => void;
  register: (username: string) => void;
  loading: boolean;
  isLogin: boolean;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  // const [userName, setUserName] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const tokenStored = localStorage.getItem("token");
    const userStored = localStorage.getItem("user");
    // const userRegester = localStorage.getItem("userRegester");
    if (tokenStored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setToken(tokenStored);
      setIsLogin(true);
    }
    if (userStored) {
      setUser(JSON.parse(userStored));
      setIsLogin(true);
    }
    setLoading(false);
  }, []);

  const auth = async (token?: string) => {
    if (!token) return;
    const data = await Auth(token);

    return data;
  };
  const login = async (token?: string) => {
    if (!token) return;
    const data = await auth(token);
    setUser(data);
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(data));

    setIsLogin(true);
  };
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
    setIsLogin(false);
  };

  const register = (userData: User) => {
    setUser(userData);
    setIsLogin(true);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  return (
    <AuthContext.Provider
      value={{ user, token, auth, login, logout, loading, isLogin, register }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default function useAuth() {
  const Auth = useContext(AuthContext);
  return Auth;
}
