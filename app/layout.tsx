// app/layout.tsx
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer"; // ایمپورت کردن کامپوننت فوتر

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <Header />
        {children}
        <Footer /> {/* اضافه کردن کامپوننت فوتر */}
      </body>
    </html>
  );
}
