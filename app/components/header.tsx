"use client";

import {
  ShoppingCart,
  Search,
  User,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import rozh from "../../public/rozh-lab.jpg";
import LoginForm from "./feature/loginform";
import RegesterForm from "./feature/regesterForm";
import { useState } from "react";
import useAuth from "../context/auth";
import Link from "next/link";
import { Button } from "flowbite-react";
import CartModal from "./feature/CartModal";
import { useCart } from "../context/cart";

type CartItem = {
  id: number;
  title: string;
  price: number;
  img: string;
  quantity: number;
};

// const dummyCart: CartItem[] = [
//   {
//     id: 1,
//     title: "کرم آبرسان",
//     price: 230000,
//     img: "/rozh-lab.jpg",
//     quantity: 1,
//   },
//   {
//     id: 2,
//     title: "سرم صورت",
//     price: 320000,
//     img: "/rozh-lab.jpg",
//     quantity: 2,
//   },
// ];

export default function Header() {
  const { user, isLogin, logout } = useAuth();
  const { cart } = useCart();
  const [login, setlogin] = useState(false);
  const [regester, setRegester] = useState(false);
  // const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  return (
    <header className="w-full p-5 flex flex-col items-center relative">
      {/* Login & Register */}
      {login && <LoginForm closeBtn={() => setlogin(false)} />}
      {regester && <RegesterForm closeBtn={() => setRegester(false)} />}

      {/* Top Bar */}
      <div className="bg-gray-100 text-gray-700 text-sm py-2 px-6 flex justify-between items-center rounded-t-3xl w-2/3 mx-auto">
        <p>به فروشگاه ما خوش آمدید</p>
        <div className="flex items-center space-x-4 gap-3 rtl:space-x-reverse">
          <a href="#" className="hover:text-green-600 transition-colors">
            <Instagram size={18} />
          </a>
          <a href="#" className="hover:text-green-600 transition-colors">
            <Twitter size={18} />
          </a>
          <a href="#" className="hover:text-green-600 transition-colors">
            <Linkedin size={18} />
          </a>
          {isLogin && <p className="text-green-300">{user?.name}</p>}
        </div>
      </div>

      {/* Main Bar */}
      <div className="relative bg-white py-3 px-6 flex justify-between items-center rounded-3xl shadow-2xl w-3/4 mt-[-5px] z-10">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          {/* Cart Modal */}
          {isLogin && (
            <div
              className="relative"
              onClick={() => setShowCart((prev) => !prev)}
            >
              <button className="relative">
                <ShoppingCart size={30} />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              </button>
              {showCart && <CartModal onClose={() => setShowCart(false)} />}

              {/* {showCart && (
                <div className="absolute left-0 mt-4 w-72 bg-white shadow-xl p-4 rounded-xl border border-gray-200 z-50 animate-fadeIn">
                  <h3 className="font-bold mb-3 text-lg">سبد خرید</h3>
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {dummyCart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 border-b pb-2"
                      >
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={50}
                          height={50}
                          className="rounded-lg object-cover"
                        />
                        <div className="flex flex-col">
                          <p>{item.title}</p>
                          <span className="text-sm text-gray-500">
                            {item.price.toLocaleString()} تومان
                          </span>
                        </div>
                        <span className="ml-auto text-gray-600">
                          × {item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-red-500 text-white py-2 rounded-lg mt-3">
                    مشاهده سبد خرید
                  </button>
                </div> */}
              {/* )} */}
            </div>
          )}

          {/* Search */}
          <div className="flex gap-5 items-center">
            <Search size={30} />
            <input
              type="text"
              placeholder="جستجو..."
              className="border-2 rounded-3xl py-2 px-5 text-lg outline-none focus:border-red-300"
            />
          </div>
        </div>

        {/* Logo */}
        <div className="absolute -top-1/2 right-1/2 translate-x-1/2 flex flex-col items-center justify-center rounded-full bg-red-300 w-32 h-32 shadow-lg overflow-hidden border-4 border-white">
          <Image
            src={rozh}
            alt="rozh"
            width={100}
            height={100}
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        {/* Login / User Panel */}
        {!isLogin ? (
          <div className="flex items-center space-x-1 gap-2 rtl:space-x-reverse">
            <User size={18} />
            <button
              onClick={() => setlogin(true)}
              className="hover:text-green-600 transition-colors"
            >
              ورود
            </button>
            <span>|</span>
            <button
              onClick={() => setRegester(true)}
              className="hover:text-green-600 transition-colors"
            >
              ثبت نام
            </button>
          </div>
        ) : (
          <div className="inline-flex justify-center items-center gap-10">
            <p className="text-green-300">{user.name}</p>
            <Link
              href={"/user"}
              className="inline-flex flex-col justify-center items-center gap-2 hover:text-red-400"
            >
              <User size={25} />
              <p>پنل کاربر</p>
            </Link>
            <Button
              className="text-red-500 cursor-pointer bg-red-200"
              onClick={() => logout()}
            >
              خروج
            </Button>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="bg-red-400 w-3/5 mx-auto text-white py-2 px-6 flex justify-around items-center font-medium rounded-b-3xl shadow-2xl">
        <div className="flex-1 flex justify-evenly text-xl lg:text-2xl border-l border-red-300/50">
          <Link href="/products" className="hover:text-gray-200">
            سایر
          </Link>
          <Link href="/products" className="hover:text-gray-200">
            محصولات
          </Link>
          <Link href="/products" className="hover:text-gray-200">
            کرم ها
          </Link>
        </div>
        <div className="flex-1 flex justify-evenly text-xl lg:text-2xl">
          <Link href="/products" className="hover:text-gray-200">
            ماسک ها
          </Link>
          <Link href="/products" className="hover:text-gray-200">
            محافظتی
          </Link>
          <Link href="/products" className="hover:text-gray-200">
            رژ
          </Link>
        </div>
      </nav>
    </header>
  );
}
