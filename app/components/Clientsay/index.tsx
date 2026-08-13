const legalitasData = [
  {
    label: "Nama Perusahaan",
    value: "PT Arta Perdana Nusantara",
  },
  {
    label: "Bentuk Usaha",
    value: "Perseroan Terbatas (PT)",
  },
  {
    label: "Bidang Usaha Utama",
    value: "Retail, Distribusi & Supplier Barang",
  },
  {
    label: "Status Legalitas",
    value: "Terdaftar Resmi (NIB & NPWP Terverifikasi)",
  },
];

const Clientsay = () => {
  return (
    <div id="legal" className="py-24 bg-babyblue/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* KOLOM LEGALITAS */}
          <div className="lg:col-span-7">
            <span className="text-navyblue text-xs sm:text-sm font-bold tracking-wider uppercase bg-lightblue px-4 py-1.5 rounded-full border border-blue/20">
              07. Legalitas Perusahaan
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navyblue mt-4">
              Identitas & Status Hukum Perusahaan
            </h2>
            <p className="mt-4 text-base text-darkgray font-medium leading-relaxed">
              PT Arta Perdana Nusantara beroperasi sebagai badan hukum perseroan terbatas yang sah dan mematuhi seluruh regulasi perdagangan serta distribusi di Indonesia.
            </p>

            <div className="mt-8 space-y-4">
              {legalitasData.map((item, idx) => (
                <div
                  key={idx}
                  className="card-apn p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <span className="text-xs font-bold text-darkgray uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="text-base font-extrabold text-navyblue">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* KOLOM KEMITRAAN */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-navyblue via-darkblue to-blue rounded-3xl p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-blue/20 rounded-full blur-3xl pointer-events-none"></div>
              <span className="text-blue font-bold text-xs uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/20">
                Mitra & Kerja Sama Usaha
              </span>
              <h3 className="text-2xl font-extrabold mt-3 leading-tight">
                Terbuka Untuk Kemitraan Jangka Panjang
              </h3>
              <p className="mt-4 text-white/80 text-sm leading-relaxed font-medium">
                Kami siap menjadi penyedia stok barang dan mitra distribusi tepercaya untuk:
              </p>

              <ul className="mt-6 space-y-3.5">
                <li className="flex items-center gap-3 text-sm font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue shadow-sm shadow-blue/50"></span>
                  Toko Retail & Minimarket
                </li>
                <li className="flex items-center gap-3 text-sm font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue shadow-sm shadow-blue/50"></span>
                  Pelaku Usaha & UMKM
                </li>
                <li className="flex items-center gap-3 text-sm font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue shadow-sm shadow-blue/50"></span>
                  Reseller & Agen Distribusi
                </li>
                <li className="flex items-center gap-3 text-sm font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue shadow-sm shadow-blue/50"></span>
                  Perusahaan Swasta & Instansi Pemerintah
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-white/20">
                <a
                  href="#contact"
                  className="block text-center bg-blue hover:bg-white hover:text-navyblue text-white font-extrabold py-4 px-6 rounded-2xl transition-all duration-300 shadow-xl shadow-blue/20 text-sm tracking-wide"
                >
                  Ajukan Kerja Sama Usaha
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Clientsay;
