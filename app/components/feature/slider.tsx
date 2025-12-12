"use client";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SwiperBtn from "../feature/swiperNavBtn"; 
import banner1 from "../../../public/online-shopping6.jpg";
import banner2 from "../../../public/9-golden-tips-for-online-store-photography-(3).webp";
import banner3 from "../../../public/عکس-خرید-اینترنتی-با-موبایل-و-پس-زمینه-صورتی.webp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const image = [
  { id: 1, src: banner1 },
  { id: 2, src: banner2 },
  { id: 3, src: banner3 },
];

export default function Slider() {
  return (
    
    <div className="w-3/5 mx-auto mt-4 mb-10 rounded-2xl overflow-hidden shadow-xl relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard]}
        spaceBetween={0}
        slidesPerView={1}
        keyboard={{ enabled: true }}
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
              />
            </div>
          </SwiperSlide>
        ))}
       
        <SwiperBtn />
      </Swiper>
    </div>
  );
}
