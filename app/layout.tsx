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
        {children}
        <div>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
        </div>
        <Footer />
      </body>
    </html>
  );
}
