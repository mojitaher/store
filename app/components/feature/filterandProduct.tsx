"use client";

import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import FilterSidebar from "./filterSidebar";

type Product = {
  id: string;
  name: string;
  price: number;
  sizes: string;
};

type Props = {
  products: Product[];
  min: number;
  max: number;
};

export default function FilterAndProducts({ products, min, max }: Props) {
  const [filter, setFilter] = useState<{
    size: string | null;
    minPrice: number;
    maxPrice: number;
  }>({
    size: null,
    minPrice: min,
    maxPrice: max,
  });

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSize = filter.size ? p.sizes.includes(filter.size) : true;
      const matchMin = p.price >= filter.minPrice;
      const matchMax = p.price <= filter.maxPrice;
      return matchSize && matchMin && matchMax;
    });
  }, [products, filter.minPrice, filter.maxPrice, filter.size]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start">
      <div className="hidden lg:block w-[300px] sticky top-20">
        <FilterSidebar
          min={min}
          max={max}
          onFilterChange={(newFilter) => setFilter(newFilter)}
        />
      </div>

      <div className="flex-1 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
