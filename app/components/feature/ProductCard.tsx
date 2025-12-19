"use client";

import { Badge, Button } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/cart";

export interface ProductCart {
  product: {
    id: number;
    title: string;
    text: string;
    qty: number;
    price: number;
    img?: string;
  };
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
  sizes: string[];
  colors: string[];
}
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  return (
    <div className="relative group w-[300px] h-1/2 max-w-sm ">
      {/* Image Section */}
      <div className="relative h-72 w-full overflow-hidden rounded-3xl bg-gray-100">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          priority
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Category */}
        <span className="absolute top-4 right-4 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold text-gray-900 shadow">
          {product.category.name}
        </span>

        {/* Hover CTA */}
        <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link href={`/products/${product.id}`}>
            <Button className="rounded-full bg-white text-gray-900 hover:bg-gray-100">
              مشاهده جزئیات
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {product.title}
        </h3>

        {/* Sizes */}
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <Badge
              key={size}
              color="gray"
              className="rounded-full px-3 py-0.5 text-xs"
            >
              {size}
            </Badge>
          ))}
        </div>

        {/* Price + Buy */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold tracking-tight text-gray-900">
            ${product.price}
          </span>

          <Button
            size="sm"
            className="rounded-full bg-blue-600 px-5 hover:bg-blue-700"
            onClick={() => addToCart(product)}
          >
            خرید
          </Button>
        </div>
      </div>
    </div>
  );
}
