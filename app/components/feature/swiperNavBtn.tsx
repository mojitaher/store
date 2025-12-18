import { useSwiper } from "swiper/react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function SwiperBtn() {
  const swiper = useSwiper();

  return (
    <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 z-10 pointer-events-none">
      {/* دکمه راست (قبلی در زبان فارسی/LTR یا بعدی بسته به دایرکشن) */}
      {/* چون معمولا در اسلایدر فارسی دکمه راست باید اسلاید را جلو ببرد: */}
      <button
        onClick={() => swiper.slideNext()}
        className="pointer-events-auto bg-white/50 hover:bg-white text-gray-800 p-2 rounded-full transition-all shadow-md backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>

      {/* دکمه چپ */}
      <button
        onClick={() => swiper.slidePrev()}
        className="pointer-events-auto bg-white/50 hover:bg-white text-gray-800 p-2 rounded-full transition-all shadow-md backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}