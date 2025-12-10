//designe

import axios from "axios";
import { Button } from "flowbite-react";
import Link from "next/link";

export default async function Details({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const productId = await params;
  console.log(productId.id);
  const res = await axios.get(
    `https://fakestoreapi.com/products/${productId.id}`
  );
  const product = res.data;
  console.log(product);

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* تصویر محصول */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl w-full"
          />
        </div>

        {/* اطلاعات محصول */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <p className="text-xl font-semibold mb-4">
            قیمت: {product.price * 10000} تومان
          </p>

          <Button className="bg-black text-white px-6 py-3 rounded-xl">
            <Link href={"/user/#Cart"}>افزودن به سبد خرید</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
