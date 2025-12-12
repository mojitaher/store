"use client";

import { useState } from "react";
// فرض بر این است که Card در همین پوشه یا مسیر درست ایمپورت شده باشد
import Card from "../components/feature/Card"; 
// تایپ محصول را باید از فایل api ایمپورت کنیم تا خطا ندهد
import { Product } from "../api/product"; 

interface Props {
  products: Product[];
  min: number;
  max: number;
  img?: string;
}

export default function FilterAndProducts({ products, min, max }: Props) {
  // استیت برای فیلتر قیمت
  const [selectedMaxPrice, setSelectedMaxPrice] = useState<number>(max);

  // منطق فیلتر کردن محصولات بر اساس قیمت
  const filteredData = products.filter(
    (item) => item.price >= min && item.price <= selectedMaxPrice
  );

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* ---------------- بخش سایدبار فیلترها ---------------- */}
      <aside className="w-full md:w-1/4 h-fit bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-4">
        <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">
          فیلترها
        </h3>

        {/* فیلتر رنج قیمت */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            حداکثر قیمت:
          </label>
          <input
            type="range"
            min={min}
            max={max}
            step={1000}
            value={selectedMaxPrice}
            onChange={(e) => setSelectedMaxPrice(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-400"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>{selectedMaxPrice.toLocaleString()} تومان</span>
            <span>{min.toLocaleString()} تومان</span>
          </div>
        </div>
        
        <div className="text-sm text-gray-500">
          تعداد نتایج: {filteredData.length} محصول
        </div>
      </aside>

      {/* ---------------- بخش لیست محصولات ---------------- */}
      <section className="w-full md:w-3/4">
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((product) => (
              <Card
                key={product.id}
                title={product.title} 
                text={product.description || "توضیحات محصول"}
                img={product.img} // عکس محصول
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 bg-white rounded-2xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">محصولی با این مشخصات یافت نشد.</p>
          </div>
        )}
      </section>
    </div>
    
  );
}