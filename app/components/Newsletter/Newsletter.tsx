"use client";
import Image from "next/image";
import { getImagePath } from "../../../lib/utils";

const Newsletter = () => {
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 my-16">
      <div className="bg-gradient-to-r from-navyblue via-darkblue to-blue rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-blue/20">
        <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-blue/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7">
            <span className="text-blue font-bold text-xs sm:text-sm uppercase tracking-wider bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              Dapatkan Penawaran Harga & Katalog Produk
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold mt-4 leading-tight">
              Tertarik Bermitra atau Butuh Pengadaan Produk?
            </h3>
            <p className="mt-3 text-base text-white/80 leading-relaxed font-medium">
              Tinggalkan alamat email atau nomor kontak Anda. Tim pemasaran PT Arta Perdana Nusantara akan segera menghubungi Anda dengan penawaran terbaik.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                className="py-4 px-5 text-sm w-full text-navyblue bg-white rounded-2xl focus:outline-none font-bold shadow-inner placeholder:text-darkgray"
                placeholder="Masukkan alamat email atau No. WA"
              />
              <button
                type="submit"
                className="bg-blue hover:bg-white hover:text-navyblue text-white font-extrabold py-4 px-7 rounded-2xl transition-all duration-300 shadow-xl shadow-blue/30 shrink-0 text-sm whitespace-nowrap tracking-wide"
              >
                Kirim Konsultasi
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
