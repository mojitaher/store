"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import Auth from "../api/auth";

// ------------------ User Type ------------------
type User = {
  id?: string;
  name: string;
  password?: string;
};

// ------------------ Context Types ------------------
interface AuthContextProps {
  token: string | null;
  user: User | null;
  auth: (token: string) => Promise<User | null>;
  login: (token: string) => Promise<void>;
  logout: () => void;
  register: (userData: User) => void;
  loading: boolean;
  isLogin: boolean;
}

// ------------------ Create Context ------------------
const AuthContext = createContext<AuthContextProps | null>(null);

// ------------------ Provider ------------------
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const router = useRouter();

  // ------------------ INIT ------------------
  useEffect(() => {
    const tokenStored = localStorage.getItem("token");
    const userStored = localStorage.getItem("user");

    if (tokenStored) {
      setToken(tokenStored);
      setIsLogin(true);
    }

    // جلوگیری از JSON.parse("undefined")
    if (
      userStored &&
      userStored !== "undefined" &&
      userStored !== "null" &&
      userStored !== ""
    ) {
      try {
        setUser(JSON.parse(userStored));
        setIsLogin(true);
      } catch (err) {
        console.error("❌ خطا در JSON user:", err);
        localStorage.removeItem("user");
      }
    }

    setLoading(false);
  }, []);

  // ------------------ AUTH Function ------------------
  const auth = async (token: string): Promise<User | null> => {
    try {
      const data = await Auth(token);
      return data;
    } catch (err) {
      console.error("Auth Error:", err);
      return null;
    }
  };

  // ------------------ LOGIN ------------------
  const login = async (token: string) => {
    if (!token) return;

    const data = await auth(token);
    if (!data) return;

    setToken(token);
    setUser(data);

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(data));

    setIsLogin(true);
  };

  // ------------------ LOGOUT ------------------
  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsLogin(false);

    router.push("/");
  };

  // ------------------ REGISTER ------------------
  const register = (userData: User) => {
    setUser(userData);
    setIsLogin(true);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // ------------------ RETURN PROVIDER ------------------
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        auth,
        login,
        logout,
        loading,
        isLogin,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ------------------ HOOK ------------------
export default function useAuth() {
  return useContext(AuthContext);
}
