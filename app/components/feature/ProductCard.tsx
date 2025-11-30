"use client";

import { Card, Badge, Button } from "flowbite-react";

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
  return (
    <div className="flex justify-center">
      <Card
        className="max-w-sm w-full"
        imgAlt={product.title}
        imgSrc={product.images[0]} 
      >
        <div className="flex flex-col gap-4">
          
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
            {product.title}
          </h5>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-500">سایز:</span>
            {product.sizes.map((size) => (
              <Badge key={size} color="info" className="px-2 py-1">
                {size}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <Button color="blue" size="sm">
              خرید کنید
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}