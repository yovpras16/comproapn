const visiMisiData = [
  {
    number: "01",
    title: "Kualitas Produk",
    description: "Menyediakan produk retail dan distribusi yang berkualitas serta sesuai kebutuhan pasar.",
    icon: "💎",
  },
  {
    number: "02",
    title: "Layanan Cepat & Profesional",
    description: "Memberikan layanan yang cepat, responsif, dan profesional untuk kepuasan pelanggan.",
    icon: "⚡",
  },
  {
    number: "03",
    title: "Harga Kompetitif",
    description: "Menawarkan harga yang kompetitif dengan tetap menjaga standar mutu produk terbaik.",
    icon: "🏷️",
  },
  {
    number: "04",
    title: "Kemitraan Berkelanjutan",
    description: "Membangun kerja sama jangka panjang yang sehat dengan pelanggan, supplier, dan mitra usaha.",
    icon: "🤝",
  },
];

const Network = () => {
  return (
    <div className="bg-babyblue/50 py-24" id="visimisi">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-navyblue text-xs sm:text-sm font-bold tracking-wider uppercase bg-lightblue px-4 py-1.5 rounded-full border border-blue/20">
            02. Visi & Misi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navyblue mt-4">
            Komitmen Masa Depan Kami
          </h2>
        </div>

        {/* CARD VISI */}
        <div className="mt-12 bg-gradient-to-r from-navyblue to-darkblue rounded-3xl p-8 sm:p-12 shadow-2xl text-white border border-blue/20 max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-blue flex items-center justify-center text-white text-2xl font-black shrink-0 shadow-lg shadow-blue/30">
              VISI
            </div>
            <div>
              <span className="text-blue font-bold text-sm tracking-wider uppercase">
                Visi Perusahaan APN
              </span>
              <p className="text-xl sm:text-2xl text-white font-bold mt-2 leading-relaxed">
                &quot;Menjadi perusahaan retail, distribusi, dan supply terpercaya yang mampu menyediakan kebutuhan produk secara efektif, efisien, kompetitif, dan berkelanjutan.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* CARDS MISI */}
        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-navyblue text-center mb-10">
            Misi Utama Perusahaan
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visiMisiData.map((item, i) => (
              <div
                key={i}
                className="card-apn rounded-3xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-navyblue bg-lightblue px-3 py-1 rounded-full border border-blue/20">
                      Misi {item.number}
                    </span>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h4 className="text-lg font-extrabold text-navyblue mt-2">
                    {item.title}
                  </h4>
                  <p className="text-sm font-medium text-darkgray mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
