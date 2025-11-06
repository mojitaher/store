// app/layout.tsx
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <Header />
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        <div>hqlldsakdla</div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
