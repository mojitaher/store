"use client";

import LoginApi from "@/app/api/login";
import useAuth from "@/app/context/auth";
import { useState } from "react";

export default function LoginForm({ closeBtn }: { closeBtn: () => void }) {
  const { login, isLogin } = useAuth();
  const [username, setName] = useState("");
  const [password, setPass] = useState("");
  async function handleLogin() {
    await LoginApi({ username, password }).then((data) => {
      const token = data.access_token;

      login(token);
    });
  }
  return (
    <>
      {!isLogin && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={closeBtn}
        >
          <div
            className="bg-white p-6 rounded-2xl w-80 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-center mb-5">ورود</h2>

            <input
              type="text"
              placeholder="نام کاربری"
              className="w-full p-3 border rounded-xl mb-4"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="password"
              placeholder="رمز عبور"
              className="w-full p-3 border rounded-xl mb-4"
              onChange={(e) => setPass(e.target.value)}
            />

            <button
              className="w-full py-3 bg-violet-600 text-white rounded-xl"
              onClick={handleLogin}
            >
              ورود
            </button>

            <button
              onClick={closeBtn}
              className="w-full py-3 mt-3 bg-gray-200 rounded-xl"
            >
              بستن
            </button>
          </div>
        </div>
      )}
    </>
  );
}
