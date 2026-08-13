import Image from "next/image";
import { getImagePath } from "../../../lib/utils";

interface cardDataType {
  imgSrc: string;
  heading: string;
  percent: string;
  subheading: string;
}

interface statDataType {
  percent: string;
  heading: string;
  subheading: string;
}

const statData: statDataType[] = [
  {
    percent: "100%",
    heading: "Komitmen Layanan",
    subheading: "Layanan retail & distribusi berkualitas sesuai kebutuhan pasar.",
  },
  {
    percent: "5+",
    heading: "Kategori Produk Utama",
    subheading: "Kebutuhan pokok, rumah tangga, ATK, operasional & pengadaan.",
  },
  {
    percent: "Multi-Mitra",
    heading: "Jangkauan Jaringan",
    subheading: "Melayani Toko, UMKM, Reseller, Perusahaan, hingga Instansi.",
  },
  {
    percent: "24/7",
    heading: "Dukungan Responsif",
    subheading: "Siap memberikan solusi cepat dan kompetitif untuk mitra usaha.",
  },
];

const Buyers = () => {
  return (
    <div id="about" className="mx-auto max-w-7xl py-24 px-6">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* TEKS TENTANG KAMI */}
        <div className="lg:col-span-7">
          <span className="text-navyblue text-xs sm:text-sm font-bold tracking-wider uppercase bg-lightblue px-4 py-1.5 rounded-full border border-blue/20">
            01. Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navyblue mt-4 leading-tight">
            PT ARTA PERDANA NUSANTARA
          </h2>
          <p className="mt-6 text-lg text-darkgray leading-relaxed font-medium">
            <strong className="text-navyblue font-bold">PT Arta Perdana Nusantara</strong> adalah perusahaan yang bergerak di bidang retail, distribusi, dan penyediaan kebutuhan usaha maupun kebutuhan umum. Kami hadir sebagai mitra penyedia barang dan solusi distribusi bagi masyarakat, pelaku usaha, toko retail, UMKM, perusahaan, hingga instansi.
          </p>
          <p className="mt-4 text-base text-darkgray leading-relaxed">
            Dengan semangat pertumbuhan yang modern dan adaptif, perusahaan terus mengembangkan jaringan pemasok, memperluas kategori produk, serta membangun sistem kerja yang efektif agar mampu memberikan layanan retail dan distribusi yang relevan dengan kebutuhan pasar Indonesia.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-5 rounded-full bg-blue text-white flex items-center justify-center text-xs font-black shrink-0">✓</span>
              <span className="text-sm font-bold text-navyblue">Pemasok Resmi & Terverifikasi</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-5 rounded-full bg-blue text-white flex items-center justify-center text-xs font-black shrink-0">✓</span>
              <span className="text-sm font-bold text-navyblue">Jaringan Distribusi Terintegrasi</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-5 rounded-full bg-blue text-white flex items-center justify-center text-xs font-black shrink-0">✓</span>
              <span className="text-sm font-bold text-navyblue">Solusi Retail & Grosir Fleksibel</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-5 rounded-full bg-blue text-white flex items-center justify-center text-xs font-black shrink-0">✓</span>
              <span className="text-sm font-bold text-navyblue">Pengadaan Operasional B2B</span>
            </div>
          </div>
        </div>

        {/* GAMBAR PROFIL */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-blue/20 bg-white p-3">
            <img
              src={getImagePath("/assets/pptx/image4.png")}
              alt="Tentang PT Arta Perdana Nusantara"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* HIGHLIGHT STATISTIK */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-12 border-t border-lightgrey/60">
        {statData.map((item, i) => (
          <div className="card-apn p-7 rounded-2xl border border-blue/15 hover:border-blue/40" key={i}>
            <span className="text-3xl lg:text-4xl text-apn-gradient font-black">
              {item.percent}
            </span>
            <h3 className="text-xl text-navyblue font-bold mt-3">
              {item.heading}
            </h3>
            <p className="text-sm font-medium text-darkgray mt-2 leading-relaxed">
              {item.subheading}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buyers;
