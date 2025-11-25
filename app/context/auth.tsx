"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
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
  loading: boolean;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
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
  const login = (user: User, token: string) => {
    setUser(user);
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    router.push("/user");
  };
  const logout = () => {
    console.log("logout");
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
  };
  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
export default function useAuth() {
  const Auth = useContext(AuthContext);
  return Auth;
}
