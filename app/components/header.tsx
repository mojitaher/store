"use client";
import { ShoppingCart, Search, User } from "lucide-react";
import Image from "next/image";
import rozh from "../../public/download (4).jpg";
import LoginForm from "./feature/loginform";
import { useState } from "react";
import RegesterForm from "./feature/regesterForm";
import useAuth from "../context/auth";
import Link from "next/link";

export default function Header() {
  const { user, isLogin } = useAuth();
  const [login, setlogin] = useState<boolean>(false);
  const [regester, setRegester] = useState<boolean>(false);
  return (
    <header className="w-full p-5 ">
      {login && <LoginForm closeBtn={() => setlogin(false)} />}
      {regester && <RegesterForm closeBtn={() => setRegester(false)} />}

      <div className="bg-gray-100 text-gray-700 text-sm py-2 px-6 flex justify-between items-center rounded-t-3xl w-2/3 mx-auto">
        <p>به فروشگاه ما خوش آمدید</p>
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <a href="#" className="hover:text-green-600">
            Instagram
          </a>
          <a href="#" className="hover:text-green-600">
            Twitter
          </a>
          <a href="#" className="hover:text-green-600">
            LinkedIn
          </a>
          {isLogin && <p className="text-green-300">{user.name}</p>}
        </div>
      </div>

      <div className="relative bg-white py-3 px-6 flex justify-between items-center rounded-3xl shadow-2xl">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          {isLogin && (
            <button className="relative">
              <ShoppingCart size={30} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </button>
          )}
          {/* search */}
          <div className="flex gap-5 items-center">
            <Search size={30} />
            <input
              type="text"
              placeholder="search"
              className="border-2 rounded-3xl py-2 px-5 text-lg"
            />
          </div>
        </div>
        {/* logo if rtl and ltr*/}
        <div className="absolute -top-1/2 right-1/2 flex flex-col items-center justify-center rounded-full bg-red-300 w-32 h-32  shadow-lg overflow-hidden">
          <Image
            src={rozh}
            alt="rozh"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        {!isLogin ? (
          <div className="flex items-center space-x-1 gap-2 rtl:space-x-reverse">
            <User size={18} />
            <button
              onClick={() => setlogin(true)}
              className="hover:text-green-600"
            >
              ورود
            </button>
            <span>|</span>
            <button
              onClick={() => setRegester(true)}
              className="hover:text-green-600"
            >
              ثبت نام
            </button>
          </div>
        ) : (
          <div>
            <Link
              href={"/user"}
              className="inline-flex flex-col justify-center items-center gap-2 hover:text-red-400"
            >
              <User size={25} />
              <p>پنل کاربر</p>
            </Link>
          </div>
        )}
      </div>

      <nav className="bg-red-400 w-3/5 mx-auto text-white py-2 px-6 flex justify-around items-center font-medium rounded-b-3xl shadow-2xl">
        <div className="w-1/2 flex justify-around text-2xl">
          <a href="#" className="hover:text-gray-200">
            رژ
          </a>
          <a href="#" className="hover:text-gray-200">
            ارایش چشم
          </a>
          <a href="#" className="hover:text-gray-200">
            کرم ها{" "}
          </a>
        </div>

        <div className="w-1/3 flex justify-around text-2xl">
          <a href="#" className="hover:text-gray-200">
            ماسک ها
          </a>
          <a href="#" className="hover:text-gray-200">
            محافظتی
          </a>
          <a href="#" className="hover:text-gray-200">
            سایر
          </a>
        </div>
      </nav>
    </header>
  );
}
