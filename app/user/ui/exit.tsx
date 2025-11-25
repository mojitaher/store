"use client";
import useAuth from "@/app/context/auth";
import { useEffect } from "react";

export default function Exit() {
  const { logout } = useAuth();
  useEffect(() => {
    logout();
  }, [logout]);
  return null;
}
