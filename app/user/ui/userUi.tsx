"use client";
import { FC, useEffect, useState } from "react";
import Dashboard from "./dashbord";
import Orders from "./orders";
import Settings from "./setting";
import Exit from "./exit";
import Auth from "@/app/api/auth";
import useAuth from "@/app/context/auth";
import { redirect } from "next/navigation";
// import Image from "next/image";

const SidebarItems = ["داشبورد", "سفارش ها", "تنظیمات", "خروج"];

export default function UserUI() {
  const { loading, token, user } = useAuth();
  // const [user, setUser] = useState("");
  useEffect(() => {
    if (!token && !loading && !user) {
      redirect("/");
    }
  }, [loading, token]);
  // useEffect(() => {
  //   if (token)
  //     Auth(token).then((data) => {
  //       setUser(data.name);
  //     });
  // }, [token]);
  const ComponantMap: Record<number, FC> = {
    0: Dashboard,
    1: Orders,
    2: Settings,
    3: Exit,
  };
  const [active, setActive] = useState<number>(0);
  const ActiveComponent = ComponantMap[active];
  function handleClickSideBar(index: number) {
    setActive(index);
  }
  return (
    <div className="flex gap-6">
      {/* Sidebar */}
      {loading && <p>loading...</p>}

      <aside className="w-72 min-h-screen bg-violet-300 p-6 flex flex-col gap-4 shadow-xl rounded-2xl">
        <div className="flex justify-between mb-5 items-center gap-3">
          <div className="w-24 h-24 rounded-full bg-amber-400">
            {/* <Image src={"profile"} alt="profile" fill /> */}
          </div>
          <div>
            <h1 className="text-black font-extrabold text-lg">{user?.name}</h1>
            <span className="inline-flex gap-1 text-md">
              <p>موجودی:</p>
              <p className="text-green-300">{"user:pay"}$</p>
            </span>
          </div>
        </div>
        {SidebarItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClickSideBar(index)}
            className={` shadow p-4 rounded-2xl text-center font-semibold hover:shadow-lg transition ${
              active === index ? "bg-red-500 text-white" : "bg-white"
            }`}
          >
            {item}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-8">
        <ActiveComponent />
      </main>
    </div>
  );
}
