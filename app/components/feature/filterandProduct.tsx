// 1. تایپ Product را از فایل api ایمپورت کنید
import { Product } from "../../api/product"; 

// 2. اینترفیس داخلی Product را پاک کنید (اگر وجود دارد)

interface Props {
  // 3. اینجا از همان تایپ ایمپورت شده استفاده کنید
  products: Product[]; 
  min: number;
  max: number;
}

export default function FilterAndProducts({ products, min, max }: Props) {
   // ... بقیه کد
}