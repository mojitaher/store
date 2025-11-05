// components/Footer.tsx
"use client";

import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for Leaflet's default icon issue with Webpack/Next.js
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
delete L.Icon.Default.prototype._get_iconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const Footer: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  const longDescription = `
        رومنس تایم نمایندگی رسمی ساعت رومانسون در ایران است که کالای با کیفیت و دارای ضمانتنامه را از نمایندگی برند اصلی تهیه کرده و در دسترس مشتریان خود در سراسر کشور قرار داده است. مجموعه ما با ۲۰ سال تجربه، در فروش ساعت‌های اصل و اورجینال رومانسون شناخته شده در میان فروشگاه‌های ساعت مچی در بازار ایران. شما می‌توانید با درخواست مشاوره از مجموعه ما خرید ساعت‌های سادهای را در زمینه ساعت اورجینال تجربه کنید. 
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
    `;

  useEffect(() => {
    // Map Initialization (runs only once on mount)
    if (mapRef.current && !mapInstance.current) {
      mapInstance.current = L.map(mapRef.current, {
        zoomControl: false,
      }).setView([35.777, 51.4248], 15); // Tehran, Mirdamad coordinates

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance.current);

      // Just add the marker, no popup needed
      L.marker([35.777, 51.4248]).addTo(mapInstance.current);
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    // Add event listener for the top arrow icon
    const topArrow = document.getElementById("footerTopArrow");
    if (topArrow) {
      topArrow.addEventListener("click", scrollToTop);
    }

    // Add event listener for "صفحه اصلی" links
    const scrollHomeLinks = document.querySelectorAll(".scroll-home");
    scrollHomeLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToTop();
      });
    });

    // Cleanup on unmount
    return () => {
      if (topArrow) {
        topArrow.removeEventListener("click", scrollToTop);
      }
      scrollHomeLinks.forEach((link) => {
        link.removeEventListener("click", (e) => {
          e.preventDefault();
          scrollToTop();
        });
      });
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <footer className="bg-red-50 text-gray-800 py-5 border-t-4 border-red-400 relative">
      {/* Top Arrow Icon for Scroll to Top */}
      <div
        id="footerTopArrow"
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-400 rounded-full w-10 h-10 flex items-center justify-center text-white text-2xl cursor-pointer shadow-md hover:bg-red-500 transition-colors duration-300" // حذف transform rotate-180
        aria-label="Scroll to top"
      >
        &#9650; {/* کاراکتر Unicode برای فلش بالا */}
      </div>

      <div className="container mx-auto px-4 pt-8">
        {/* Top Section: Social Media and Brand */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-5 border-b border-gray-300">
          <div className="flex items-center space-x-4 space-x-reverse mb-2 md:mb-0">
            {/* <h3 className="text-lg font-bold">شبکه های اجتماعی ما</h3> */}
            <a href="#" className="text-red-400 text-2xl hover:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-instagram"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              {/* حذف فیلتر */}
            </a>
            <a href="#" className="text-red-400 text-2xl hover:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-send"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              {/* حذف فیلتر */}
            </a>
            <a href="#" className="text-red-400 text-2xl hover:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-message-circle"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              {/* حذف فیلتر */}
            </a>
          </div>

          
        {/* Navigation Section */}
        <nav className="">
          <ul className="flex justify-center flex-wrap gap-x-8 gap-y-2 list-none p-0 m-0">
            <li>
              <a
                href="#"
                className="text-gray-800 hover:text-red-400 font-bold scroll-home"
              >
                صفحه اصلی
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-800 hover:text-red-400 font-bold"
              >
                فروشگاه
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-800 hover:text-red-400 font-bold"
              >
                درباره ما
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                className="text-gray-800 hover:text-red-400 font-bold"
              >
                تماس با ما
              </a>
            </li> */}
            {/* <li>
              <a
                href="#"
                className="text-gray-800 hover:text-red-400 font-bold"
              >
                وبلاگ
              </a>
            </li> */}
          </ul>
        </nav>

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-red-400">رومنس تایم</h2>
            {/* <p className="text-sm">نمایندگی رسمی رومانسون در ایران</p> */}
          </div>
        </div>

        {/* Description and Map Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-8 my-5">
          {/* Map Section (Left) */}
          <div className="w-full md:w-1/2 h-[300px] overflow-hidden rounded-lg shadow-lg">
            <div id="mapid" ref={mapRef} className="h-full w-full"></div>
          </div>

          {/* Description (Right) */}
          <div className="w-full md:w-1/2 text-right leading-relaxed text-gray-700 text-sm flex flex-col justify-between">
            <p className="grow mb-4">{longDescription}</p>

            {/* Contact Info (Moved below description, back to original sizes) */}
            <div className=" flex-col sm:flex-row justify-end  gap-y-4 sm:gap-x-8 mt-4">
              <div className="flex items-center space-x-2 mt-3">
                {" "}
                {/* حذف space-x-reverse */}
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-red-400 text-white p-1">
                  {" "}
                  {/* کلاس‌های border دایره‌ای و رنگ */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.71-3.71 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  {/* تغییر سایز و object-contain */}
                </span>
                <span>
                  {" "}
                  <span className="font-bold">تلفن: </span> ۰۲۱-۱۲۳۴۵۶۷۸
                </span>
              </div>
              <div className="flex items-center space-x-2 mt-3">
                {" "}
                {/* حذف space-x-reverse */}
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-red-400 text-white p-1">
                  {" "}
                  {/* کلاس‌های border دایره‌ای و رنگ */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-map-pin"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <span>
                  {" "}
                  <span className="font-bold">آدرس: </span>تهران، میرداماد،
                  میدان حسن، پاساژ سرو، طبقه دوم، پلاک ۹۶
                </span>
              </div>
              <div className="flex items-center space-x-2 mt-3">
                {" "}
                {/* حذف space-x-reverse */}
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-red-400 text-white p-1">
                  {" "}
                  {/* کلاس‌های border دایره‌ای و رنگ */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-map-pin"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <span>
                  {" "}
                  <span className="font-bold">آدرس: </span>تهران، میرداماد،
                  میدان حسن، پاساژ سرو، طبقه دوم، پلاک ۹۶
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer (Copyright) */}
      <div className="bg-red-400 text-white py-2 mt-5 text-center">
        <p>۲۰۲۳ رومنس تایم. تمامی حقوق محفوظ است</p>
      </div>
    </footer>
  );
};

export default Footer;
