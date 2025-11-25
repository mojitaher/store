"use client";
import { useState } from "react";
import regesterApi from "../../api/regester";
export default function RegesterForm({ closeBtn }: { closeBtn: () => void }) {
  //   const { username, password, setUsername, setPassword, login } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  async function handleRegesterBtn() {
    await regesterApi({ email, pass, username }).then(() => {
      // use context
      console.log(email, pass, username);
    });
  }
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={closeBtn}
    >
      <div
        className="bg-white p-6 rounded-2xl w-80 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-center mb-5">ثبت نام</h2>

        <input
          type="text"
          placeholder="نام کاربری"
          className="w-full p-3 border rounded-xl mb-4"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="ادرس ایمیل"
          className="w-full p-3 border rounded-xl mb-4"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="رمز عبور"
          className="w-full p-3 border rounded-xl mb-4"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />

        <button
          className="w-full py-3 bg-violet-600 text-white rounded-xl"
          onClick={handleRegesterBtn}
        >
          ثبت نام
        </button>

        <button
          onClick={closeBtn}
          className="w-full py-3 mt-3 bg-gray-200 rounded-xl"
        >
          بستن
        </button>
      </div>
    </div>
  );
}
