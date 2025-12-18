import Slider from "./components/feature/slider";
import Category from "./components/feature/categories";
import Footer from "./components/footer";
import Header from "./components/header";
import Card from "./components/feature/Card";
// ایمپورت عکس نمونه
import productImg from "../public/rozh-lab.jpg"; 

export default function Home() {
//   return (
//     <>
//       <Header />
//       <Slider />
//       <Category />
//       
//     </>
//   );
// }

const products = Array(6).fill({
  title: "محصول آرایشی",
  text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  img: productImg
});

return (
  <main>
    <Header />
    <Slider />
    
    {/* بخش کارت‌ها */}
    <section className="py-16 bg-gray-50">
      {/* کانتینر محدود شده برای ایجاد فضای خالی زیاد در چپ و راست */}
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {products.map((item, index) => (
            <Card 
              key={index} 
              title={`${item.title} ${index + 1}`} 
              text={item.text} 
              img={item.img} 
            />
          ))}
        </div>
        
      </div>
    </section>
    
    <Footer />
  </main>
);
}
