import Image from "next/image";

export default function VisiMisi() {
  return (
    <section className="relative bg-[#D65C5C] text-white overflow-hidden">
      {/* Wave atas */}
      <div className="absolute -top-6 left-0 w-full">
        <svg viewBox="0 0 1440 60" className="w-full h-[60px]">
          <path
            d="M0 20 Q720 50 1440 20 L1440 0 Q720 10 0 0 Z"
            fill="#d1d1d1"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        {/* Teks */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Visi</h2>
          <p className="mb-8">
            Mencetak lulusan berAKHLAK, ahli, dan berkebhinekaan global.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">Misi</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Mengasuh MOKLETER menjadi pribadi yang religius dan tangguh</li>
            <li>
              Mengasah MOKLETER menjadi pribadi pembelajar sepanjang hayat di
              bidang teknologi Informasi dan Komunikasi
            </li>
            <li>
              Membekali MOKLETER dengan kompetensi berstandar internasional
            </li>
          </ol>
        </div>

        {/* Dekorasi kanan */}
        <div className="relative flex justify-center md:justify-end">
          {/* Logo besar */}
          <Image
            src="/assets/image/tsp.png"
            alt="Logo TS"
            width={250}
            height={250}
            className="opacity-80"
          />
          {/* Badge */}
          <span className="absolute bottom-4 left-4 bg-white/30 text-white font-medium px-4 py-2 rounded-lg backdrop-blur">
            Visi & Misi
          </span>
        </div>
      </div>
    </section>
  );
}
