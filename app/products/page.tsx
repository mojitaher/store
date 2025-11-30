import ProductCard from "../components/feature/ProductCard";
import FilterSidebar from "../components/feature/filterSidebar"; // مسیر فایل فیلتر را چک کنید

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

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const rawData: any[] = await res.json();

  const products: Product[] = rawData.map((item) => ({
    id: item.id,
    title: item.title,
    price: item.price * 10000, 
    description: item.description,
    images: [item.image],
    category: {
      id: 1,
      name: item.category,
      image: item.image,
    },
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Black"],
  }));

  return products;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-gray-50 p-8" dir="rtl">
      <div className="container mx-auto">
        <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
          محصولات فروشگاه
        </h1>

       
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
        
          <div className="hidden lg:block w-[300px] flex-shrink-0 sticky">
            <FilterSidebar />
          </div>

         
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}