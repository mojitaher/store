"use client";

// import { Product } from "@/app/api/product";
import { useState } from "react";
type FilterDatatype = {
  size: string | null;
  maxPrice: number;
  minPrice: number;
};

const SIZES = ["S", "M", "L", "XL", "XLL"];

type FilterProps = {
  min: number;
  max: number;
  onFilterChange: (data: FilterDatatype) => void;
};

export default function FilterSidebar({
  min,
  max,
  onFilterChange,
}: FilterProps) {
  // --- States ---
  const [maxPrice, setMaxPrice] = useState<number>(max);
  const minPrice = min;
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  // --- Helpers ---
  const formatPrice = (price: number) => price;

  // handler
  const handleSubmit = () => {
    const data: FilterDatatype = { size: selectedSize, maxPrice, minPrice };
    onFilterChange(data);
  };
  return (
    <aside className="sidebar">
      <div className="header">فیلترها</div>
      
      <div className="section">
        <div className="section-title">محدوده قیمت</div>

        <div className="price-inputs">
          <div className="price-row">
            <span className="text-gray">از</span>
            <div>
              <span className="price-value">{formatPrice(minPrice)}</span>
              <span className="currency">$</span>
            </div>
          </div>
          <div className="price-row">
            <span className="text-gray">تا</span>
            <div>
              <span className="price-value">{formatPrice(maxPrice)}</span>
              <span className="currency">$</span>
            </div>
          </div>
        </div>

        <div className="slider-container">
          <input
            type="range"
            min={min}
            max={max}
            step={1}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="range-input"
          />
          <div className="range-labels">
            <span>ارزان‌ترین</span>
            <span>گران‌ترین</span>
          </div>
        </div>
      </div>

      {/* فیلتر سایز */}
      <div className="section">
        <div className="section-title">سایز</div>
        <div className="size-options">
          {SIZES.map((size) => (
            <div
              key={size}
              className={`size-box ${selectedSize === size ? "active" : ""}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </div>
          ))}
        </div>
        <div className="flex mt-10 justify-end items-end">
          <button className="bg-green-300 rounded p-2" onClick={handleSubmit}>
            اعمال تغییرات
          </button>
        </div>
      </div>

      <style jsx>{`
        /* متغیر رنگ اصلی */
        aside {
          --primary-color: #19bfd3;
          --text-color: #3f4064;
          --border-color: #e0e0e2;
        }

        .sidebar {
          width: 300px;
          background: #fff;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 15px 20px;
          flex-shrink: 0;

          /* Sticky Logic */
          position: sticky;
          top: 20px;
          z-index: 10;
        }

        .header {
          font-size: 19px;
          font-weight: 700;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid #f0f0f1;
          color: var(--text-color);
        }

        .section {
          margin-bottom: 25px;
          border-bottom: 1px solid #f0f0f1;
          padding-bottom: 15px;
        }
        .section:last-child {
          border-bottom: none;
        }

        .section-title {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-color);
          cursor: pointer;
        }

        .arrow-icon {
          transform: rotate(90deg);
          font-size: 12px;
          color: #a1a3a8;
        }

        /* Price Styles */
        .price-inputs {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 15px;
        }
        .price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
        }
        .text-gray {
          color: #81858b;
        }
        .price-value {
          font-size: 19px;
          font-weight: 700;
          color: #000;
          border-bottom: 1px solid #dfdfdf;
          padding: 0 5px;
          min-width: 80px;
          text-align: center;
          display: inline-block;
        }
        .currency {
          font-size: 12px;
          margin-right: 5px;
          color: #81858b;
        }

        /* Range Slider */
        .slider-container {
          width: 100%;
          margin-top: 10px;
        }
        .range-labels {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: #81858b;
          margin-top: 5px;
        }

        .range-input {
          width: 100%;
          -webkit-appearance: none;
          background: transparent;
          cursor: pointer;
        }
        .range-input:focus {
          outline: none;
        }

        /* Webkit Slider Thumb (Chrome, Safari, Edge) */
        .range-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: var(--primary-color);
          margin-top: -8px;
          border: 3px solid #fff;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
        }
        .range-input::-webkit-slider-runnable-track {
          width: 100%;
          height: 4px;
          cursor: pointer;
          background: var(--primary-color);
          border-radius: 2px;
        }

        /* Color Styles */
        .color-options {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .color-item {
          display: flex;
          align-items: center;
          cursor: pointer;
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 6px 12px;
          font-size: 13px;
          transition: all 0.2s;
          color: var(--text-color);
          user-select: none;
        }
        .color-item:hover {
          background-color: #f0f0f1;
        }
        .color-item.active {
          border-color: var(--primary-color);
          background-color: rgba(25, 191, 211, 0.05);
          color: var(--primary-color);
          font-weight: 500;
        }
        .color-circle {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          margin-left: 8px;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        /* Size Styles */
        .size-options {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .size-box {
          width: 42px;
          height: 42px;
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
          font-size: 14px;
          transition: 0.2s;
          color: var(--text-color);
          user-select: none;
        }
        .size-box:hover {
          border-color: #bababa;
        }
        .size-box.active {
          border-color: var(--primary-color);
          color: var(--primary-color);
          font-weight: bold;
          box-shadow: 0 0 0 1px var(--primary-color) inset;
        }
      `}</style>
    </aside>
  );
}