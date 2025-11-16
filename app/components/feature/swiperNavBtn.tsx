import { useSwiper } from "swiper/react";
export default function SwiperBtn() {
  const swiper = useSwiper();
  return (
    <div
      className="absolute top-1/2 w-full flex justify-between px-4 z-20
"
    >
      <button
        className="p-3 rounded-3xl  bg-blue-400 "
        onClick={() => swiper.slidePrev()}
      >
        prev
      </button>
      <button
        className="p-3 rounded-3xl bg-blue-400 "
        onClick={() => swiper.slideNext()}
      >
        next
      </button>
    </div>
  );
}
