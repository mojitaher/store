import axios from "axios";

function filterProducts(data: any[]) {
  const products: Product[] = data.map((item) => ({
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
  }));

  return products;
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
}
interface ProductRes {
  products: Product[];
  min: number;
  max: number;
}

export default async function getProducts(): Promise<ProductRes> {
  const res = await axios(`https://fakestoreapi.com/products`);
  const price = res.data.map((p: any) => p.price * 10000);
  const min = Math.min(...price);
  const max = Math.max(...price);
  return {
    products: filterProducts(res.data),
    min,
    max,
  };
}
