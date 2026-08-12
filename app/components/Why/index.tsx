import { getImagePath } from "../../../lib/utils";

const nilaiPerusahaan = [
  {
    title: "Integritas",
    desc: "Menjunjung tinggi kejujuran, tanggung jawab, dan profesionalisme.",
    icon: "🛡️",
  },
  {
    title: "Pelayanan",
    desc: "Menempatkan kepuasan pelanggan sebagai prioritas utama.",
    icon: "⭐",
  },
  {
    title: "Kualitas",
    desc: "Menyediakan produk dan layanan yang sesuai kebutuhan pasar.",
    icon: "💎",
  },
  {
    title: "Kolaborasi",
    desc: "Membangun hubungan kerja sama yang kuat dengan pelanggan dan supplier.",
    icon: "🤝",
  },
  {
    title: "Adaptif",
    desc: "Terus berkembang mengikuti dinamika pasar dan kebutuhan pelanggan.",
    icon: "🚀",
  },
];

const keunggulanKami = [
  "Produk relevan dengan kebutuhan pasar Indonesia",
  "Harga yang sangat kompetitif dan rasional",
  "Fleksibel untuk layanan retail, grosir, dan pengadaan",
  "Layanan cepat, profesional, dan responsif",
  "Jaringan distribusi terpercaya dan terorganisir",
  "Komitmen kemitraan usaha jangka panjang yang sehat",
];

const Why = () => {
  return (
    <div id="advantages" className="py-24 bg-gradient-to-b from-white via-babyblue/30 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* SECTION 1: NILAI PERUSAHAAN */}
        <div>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-navyblue text-xs sm:text-sm font-bold tracking-wider uppercase bg-lightblue px-4 py-1.5 rounded-full border border-blue/20">
              03. Nilai Perusahaan
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navyblue mt-4">
              Prinsip & Budaya Kerja APN
            </h2>
            <p className="mt-4 text-lg text-darkgray font-medium">
              Fondasi nilai yang melandasi setiap layanan dan hubungan kemitraan kami.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">
            {nilaiPerusahaan.map((item, idx) => (
              <div
                key={idx}
                className="card-apn rounded-2xl p-6 text-center flex flex-col items-center justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-lightblue border border-blue/20 flex items-center justify-center text-2xl mb-4 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-navyblue">
                    {item.title}
                  </h3>
                  <p className="text-xs text-darkgray font-medium mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: KEUNGGULAN KAMI */}
        <div className="mt-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-navyblue text-xs sm:text-sm font-bold tracking-wider uppercase bg-lightblue px-4 py-1.5 rounded-full border border-blue/20">
              06. Keunggulan Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navyblue mt-4 leading-tight">
              Mengapa Memilih PT Arta Perdana Nusantara?
            </h2>
            <p className="mt-4 text-base text-darkgray font-medium leading-relaxed">
              Kami memberikan nilai tambah bagi mitra usaha melalui efisiensi rantai pasok, kepastian mutu produk, dan harga yang kompetitif.
            </p>

            <div className="mt-8 space-y-4">
              {keunggulanKami.map((text, i) => (
                <div key={i} className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-blue/15 shadow-sm hover:border-blue/40 transition-all">
                  <div className="w-6 h-6 rounded-full bg-blue text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5 shadow-md shadow-blue/30">
                    ✓
                  </div>
                  <span className="text-navyblue font-bold text-base">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-blue/20 bg-white p-3">
              <img
                src={getImagePath("/assets/pptx/image5.png")}
                alt="Keunggulan PT Arta Perdana Nusantara"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Why;
