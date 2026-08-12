import Image from "next/image";
import { getImagePath } from "../../../lib/utils";

const Banner = () => {
  return (
    <main id="home">
      <div className="px-6 lg:px-8 bg-gradient-to-b from-lightblue/40 via-white to-white">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-24 pb-20 banner-image">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 bg-lightblue text-navyblue font-bold text-xs sm:text-sm px-5 py-2 rounded-full mb-6 border border-blue/20 shadow-sm uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-blue animate-pulse"></span>
              Retail, Distribution & Supply Partner
            </span>
            <h1 className="text-4xl font-extrabold text-navyblue sm:text-5xl lg:text-7xl tracking-tight leading-tight">
              PT ARTA PERDANA <br />
              <span className="text-apn-gradient">NUSANTARA</span>
            </h1>
            <p className="mt-6 text-xl sm:text-2xl font-bold text-navyblue max-w-3xl mx-auto leading-relaxed">
              &quot;Menyediakan Kebutuhan, Membangun Kepercayaan&quot;
            </p>
            <p className="mt-3 text-base sm:text-lg text-darkgray max-w-2xl mx-auto font-medium">
              Mitra penyedia barang dan solusi distribusi terpercaya bagi toko retail, UMKM, perusahaan, hingga instansi di seluruh Indonesia.
            </p>
          </div>

          <div className="text-center mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#services"
              className="text-base text-white font-bold bg-blue hover:bg-navyblue py-4 px-9 rounded-2xl shadow-xl shadow-blue/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Jelajahi Layanan Kami
            </a>
            <a
              href="#contact"
              className="text-base text-navyblue font-bold bg-white hover:bg-lightblue py-4 px-9 rounded-2xl border-2 border-blue/30 shadow-md transition-all duration-300"
            >
              Hubungi Kami
            </a>
          </div>

          <div className="mt-14 flex justify-center relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-blue/20 max-w-5xl group">
              <img
                src={getImagePath("/assets/pptx/image8.png")}
                alt="Gudang Distribusi APN"
                className="w-full h-auto object-cover max-h-[500px] transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* FLOATING TRUST BADGES */}
              <div className="hidden sm:flex absolute top-6 left-6 glass-card p-4 rounded-2xl items-center gap-3 shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-blue text-white flex items-center justify-center font-black text-lg">
                  ✓
                </div>
                <div>
                  <span className="block text-xs font-bold text-darkgray uppercase">Stok & Supply</span>
                  <span className="text-sm font-extrabold text-navyblue">Pasokan Terjamin 100%</span>
                </div>
              </div>

              <div className="hidden sm:flex absolute bottom-6 right-6 glass-card p-4 rounded-2xl items-center gap-3 shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-navyblue text-white flex items-center justify-center font-black text-lg">
                  🚚
                </div>
                <div>
                  <span className="block text-xs font-bold text-darkgray uppercase">Jaringan Distribusi</span>
                  <span className="text-sm font-extrabold text-navyblue">Pengiriman Cepat & Tepat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
