import Card from "./Card";
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
  // const container = useRef<HTMLDivElement>(null);
  // gsap.registerPlugin(ScrollTrigger);
  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: container.current,
  //       start: "top top",
  //       end: "180%",
  //       scrub: 1.8,
  //       pin: true,
  //     },
  //   });
  //   tl.from(".cat", {
  //     x: 150,
  //     opacity: 0,
  //     duration: 1,
  //     ease: "power3.out",
  //     scrollTrigger: {
  //       trigger: ".cat",
  //       start: "top top",
  //       toggleActions: "play none none reverse",
  //     },
  //   });
  // });
  return (
    <div className="flex justify-between">
      {Cards.map((data) => (
        <div
          key={data.id}
          className="text-center cat"
          // ref={container}
        >
          <Card img={data.img} title={data.title} text={data.text} />
        </div>
      ))}
    </div>
  );
}
