"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import Auth from "../api/auth";
type User = {
  id: string;
  name: string;
  password: string;
};
interface AuthContextProps {
  token: string | null;
  user: User | null;
  login: (user: User, token: string) => void;
  logout: () => void;
  register: (username: string) => void;
  loading: boolean;
  isLogin: boolean;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const tokenStored = localStorage.getItem("token");
    const userStored = localStorage.getItem("user");
    if (tokenStored && userStored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setToken(tokenStored);
      setUser(JSON.parse(userStored));
    }
    setLoading(false);
  }, []);
  ///fix this
  const login = (user: User, token?: string) => {
    if (token)
      Auth(token).then((data) => {
        setUser(data.name);
      });

    setUser(user);
    if (token) {
      setToken(token);
      localStorage.setItem("token", token);
    }
    // localStorage.setItem("user", JSON.stringify(user));
    setIsLogin(true);
    // router.push("/user");
  };
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
    setIsLogin(false);
  };
  //fix this

  const register = (username: string) => {
    const newUser: User = { username };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    setIsLogin(true);
  };
  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, loading, isLogin, register }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default function useAuth() {
  const Auth = useContext(AuthContext);
  return Auth;
}
