const layananData = [
  {
    title: "Retail Kebutuhan Umum",
    description: "Penyediaan produk kebutuhan umum berkualitas bagi konsumen dan masyarakat luas.",
    icon: "🛍️",
  },
  {
    title: "Distribusi ke Toko & Instansi",
    description: "Jaringan distribusi efisien dan tepat waktu untuk toko, mitra bisnis, dan instansi.",
    icon: "🚚",
  },
  {
    title: "Supply Toko, UMKM & Reseller",
    description: "Dukungan pasokan stok barang yang stabil dan berkelanjutan untuk UMKM serta reseller.",
    icon: "🏪",
  },
  {
    title: "Pengadaan Operasional (B2B)",
    description: "Pengadaan peralatan, ATK, dan kebutuhan operasional instansi maupun perusahaan.",
    icon: "🏢",
  },
  {
    title: "Kemitraan Distribusi",
    description: "Kerja sama distribusi strategis jangka panjang untuk perluasan jangkauan produk.",
    icon: "🤝",
  },
];

const kategoriProduk = [
  "Kebutuhan Pokok & Konsumsi",
  "Kebutuhan Rumah Tangga & Kebersihan",
  "ATK & Operasional Kantor",
  "Pasokan Toko, UMKM & Reseller",
  "Pengadaan Barang Berdasarkan Permintaan",
];

const Provide = () => {
  return (
    <div id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-navyblue text-xs sm:text-sm font-bold tracking-wider uppercase bg-lightblue px-4 py-1.5 rounded-full border border-blue/20">
            04 & 05. Bidang Usaha & Produk
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navyblue mt-4">
            Layanan & Kategori Produk Kami
          </h2>
          <p className="mt-4 text-lg text-darkgray font-medium">
            Solusi penyediaan barang dan distribusi terpadu yang adaptif sesuai dinamika pasar.
          </p>
        </div>

        {/* LAYANAN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {layananData.map((item, index) => (
            <div
              key={index}
              className="card-apn rounded-3xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-lightblue border border-blue/20 flex items-center justify-center text-2xl mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-navyblue">
                  {item.title}
                </h3>
                <p className="mt-3 text-base text-darkgray font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* KATEGORI PRODUK BOX */}
        <div className="mt-16 bg-gradient-to-br from-navyblue via-darkblue to-blue rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5">
              <span className="text-blue font-bold text-xs sm:text-sm uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/20">
                Produk & Kategori Usaha
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-3 leading-tight">
                Ragam Kategori Kebutuhan Usaha & Umum
              </h3>
              <p className="mt-4 text-white/80 text-base leading-relaxed font-medium">
                Kami menyediakan fleksibilitas pilihan produk untuk kebutuhan retail, grosir, maupun pengadaan khusus perusahaan.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {kategoriProduk.map((kat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-blue/50 rounded-2xl p-4 flex items-center gap-3 transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue text-white font-black flex items-center justify-center text-xs shrink-0 shadow-md">
                      ✓
                    </div>
                    <span className="font-bold text-base text-white">
                      {kat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
