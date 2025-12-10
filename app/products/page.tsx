import getProducts from "../api/product";
import FilterAndProducts from "../components/feature/filterandProduct";

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
