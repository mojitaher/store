"use client";
import Slider from "./components/feature/slider";
import Footer from "./components/footer";
import Header from "./components/header";

import getProducts from "./api/product";
import { useEffect, useState } from "react";
import Card from "./components/feature/Card";
import ProductCard from "./components/feature/ProductCard";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  description: string;
  images: [];
};

export default function Home() {
  const [cat, setCat] = useState<Product[]>([]);
  useEffect(() => {
    getProducts().then((data) => {
      setCat(data.products);
    });
  }, []);
  return (
    <main>
      <Header />
      <Slider />

      <section className="py-16 bg-pink-50">
        <div className="flex justify-end">
          <h2 className="text-3xl bg-red-300 inline rounded-l-2xl p-10 m-10">
            برترین ها
          </h2>
        </div>
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center ">
            {cat.slice(0, 6).map((item) => (
              <div key={item.id}>{<ProductCard product={item} />}</div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/products"
              className="rounded-2xl bg-red-200 px-10 py-4 text-lg font-semibold hover:bg-red-500 transition"
            >
              محصولات
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
