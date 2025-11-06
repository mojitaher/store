"use client";
import { useEffect, useRef } from "react";
import Card from "./Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Cards = [
  {
    id: 1,
    img: "/download (4).jpg",
    title: "salam",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem minima vel veniam fugit provident debitis laudantium possimus, delectus doloremque mollitia, modi est architecto dolorum inventore consectetur consequatur voluptate culpa pariatur.",
  },
  {
    id: 2,
    img: "/download (4).jpg",
    title: "salam",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem minima vel veniam fugit provident debitis laudantium possimus, delectus doloremque mollitia, modi est architecto dolorum inventore consectetur consequatur voluptate culpa pariatur.",
  },
  {
    id: 3,
    img: "/download (4).jpg",
    title: "salam",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem minima vel veniam fugit provident debitis laudantium possimus, delectus doloremque mollitia, modi est architecto dolorum inventore consectetur consequatur voluptate culpa pariatur.",
  },
];
export default function Category() {
  const cardsRef = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    Object.values(cardsRef.current).forEach((card, i) => {
      if (card) {
        gsap.from(card, {
          opacity: 0,
          x: 100,
          duration: 0.8,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });
  }, []);
  return (
    <div className="flex justify-between">
      {Cards.map((data) => (
        <div
          ref={(el) => (cardsRef.current[data.id] = el)}
          key={data.id}
          className="text-center"
        >
          <Card img={data.img} title={data.title} text={data.text} />
        </div>
      ))}
    </div>
  );
}
