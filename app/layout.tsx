import CSSProvider from "./components/CSSProvider";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/index";
import "./globals.css";

export const metadata = {
  title: "PT Arta Perdana Nusantara - Retail, Distribution & Supply Partner",
  description: "Menyediakan Kebutuhan, Membangun Kepercayaan. Retail produk kebutuhan umum, distribusi ke toko & instansi, supply UMKM & reseller, serta pengadaan operasional.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CSSProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
