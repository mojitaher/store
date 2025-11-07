"use client";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SwiperBtn from "./swiperNavBtn";
import banner1 from "../../../public/download (5).jpg";
import banner2 from "../../../public/download (6).jpg";
import banner3 from "../../../public/download (7).jpg";
const image = [
  {
    id: 1,
    src: banner1,
  },
  {
    id: 2,
    src: banner2,
  },
  {
    id: 3,
    src: banner3,
  },
];
export default function Slider() {
  return (
    <div className="max-w-4xl mx-auto mt-10 mb-10 rounded-2xl overflow-hidden shadow-xl ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard]}
        spaceBetween={30}
        slidesPerView={1}
        keyboard={{
          enabled: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="relative w-full h-[400px]"
      >
        {image.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="relative w-full h-[400px]">
              <Image
                src={img.src}
                alt={`Slide ${img.id}`}
                fill
                className="object-cover"
                // priority={id === 0}
              />
            </div>
          </SwiperSlide>
        ))}
        <SwiperBtn />
      </Swiper>
    </div>
  );
}
