// import getProducts from "../api/product";
// import FilterSidebar from "../components/feature/filterSidebar";
// import ProductCard from "../components/feature/ProductCard";

import getProducts from "../api/product";
import FilterAndProducts from "../components/feature/filterandProduct";

// export default async function ProductsPage() {
//   const { products, min, max } = await getProducts();

//   return (
//     <main className="min-h-screen bg-gray-50 p-8" dir="rtl">
//       <div className="container mx-auto">
//         <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
//           محصولات فروشگاه
//         </h1>

//         <div className="flex flex-col lg:flex-row gap-6 items-start">
//           <div className="hidden lg:block w-[300px] sticky">
//             <FilterSidebar products={products} min={min} max={max} />
//           </div>

//           <div className="flex-1 w-full">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
//               {products.map((product) => (
//                 <ProductCard key={product.id} product={product} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

export default async function ProductsPage() {
  const { products, min, max } = await getProducts();

  return (
    <main className="min-h-screen bg-gray-50 p-8" dir="rtl">
      <div className="container mx-auto">
        <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
          محصولات فروشگاه
        </h1>

        <FilterAndProducts products={products} min={min} max={max} />
      </div>
    </main>
  );
}
