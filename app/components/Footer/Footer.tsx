"use client";
import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "../../../lib/utils";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  link: string[];
}

const products: ProductType[] = [
  {
    id: 1,
    link: ["Home", "Popular", "About", "Contact"],
  },
  {
    id: 2,
    link: ["Help", "Resources", "Application", "Team"],
  },
];

const footerLinks = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Visi & Misi", href: "#visimisi" },
  { name: "Layanan & Produk", href: "#services" },
  { name: "Keunggulan", href: "#advantages" },
  { name: "Legalitas & Kontak", href: "#contact" },
];

const footer = () => {
  return (
    <div id="contact" className="bg-darkblue text-white pt-24 pb-12 border-t border-blue/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          
          {/* KOLOM 1: LOGO & SLOGAN */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={getImagePath("/assets/logo/apn-official-logo.png")}
                alt="PT Arta Perdana Nusantara"
                className="h-12 w-auto object-contain bg-white p-1.5 rounded-xl shadow-md"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6 font-medium">
              Retail, Distribution & Supply Partner terpercaya. Menyediakan Kebutuhan, Membangun Kepercayaan.
            </p>
            <div className="inline-block bg-white/10 text-blue text-xs font-bold px-4 py-2 rounded-full border border-white/15">
              Supplier | Retail | Pengadaan
            </div>
          </div>

          {/* KOLOM 2: NAVIGASI CEPAT */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-extrabold mb-5 text-white">Navigasi Halaman</h4>
            <ul className="space-y-3">
              {footerLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-blue text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 3: KONTAK & ALAMAT HQ */}
          <div className="lg:col-span-5">
            <h4 className="text-lg font-extrabold mb-5 text-white">Hubungi & Lokasi Kami</h4>
            <div className="space-y-4 text-sm text-white/80 font-medium">
              <div className="flex items-start gap-3">
                <span className="text-blue text-lg shrink-0">📍</span>
                <div>
                  <strong className="block text-white font-bold">Jakarta (HQ):</strong>
                  Jl. Tebet Raya No.62 Rt.02/04 East Tebet, South Jakarta, DKI Jakarta 12820
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue text-lg shrink-0">✉️</span>
                <div>
                  <strong className="block text-white font-bold">Email Resmi:</strong>
                  contact@artanus.com / contact@artanus.id
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue text-lg shrink-0">📞</span>
                <div>
                  <strong className="block text-white font-bold">Telepon / WhatsApp:</strong>
                  (021) 000 000 00 / 08xx-xxxx-xxxx
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* HAK CIPTA */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-white/60">
          <p>
            © {new Date().getFullYear()} PT Arta Perdana Nusantara. All Rights Reserved.
          </p>
          <p className="text-center sm:text-right text-blue font-bold">
            www.artanus.id | www.artanus.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default footer;
