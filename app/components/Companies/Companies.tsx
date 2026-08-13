const partnerCategories = [
  "🏪 Toko Retail & Minimarket",
  "📦 UMKM & Reseller",
  "🏢 Perusahaan & Kantor",
  "🏛️ Instansi & Lembaga",
  "🚚 Jaringan Supplier Nasional",
];

const Companies = () => {
  return (
    <div className="py-10 bg-babyblue/30 border-y border-blue/15">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-xs font-extrabold uppercase tracking-widest text-navyblue/70 mb-6">
          Melayani Kemitraan Multi-Sektor Terpercaya di Seluruh Indonesia
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {partnerCategories.map((item, i) => (
            <div
              key={i}
              className="bg-white hover:bg-lightblue text-navyblue font-bold text-xs sm:text-sm px-6 py-3 rounded-full border border-blue/20 shadow-sm hover:shadow-md hover:border-blue/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-default"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
