import Image from "next/image";


export default function VisiMisi() {
  return (
    <section className="relative bg-[#D65C5C] mt-10 overflow-hidden text-white">
      {/* Wave atas */}
      <div className="-top-6 left-0 absolute w-full">
        <svg viewBox="0 0 1440 60" className="w-full h-[60px]">
          <path
            d="M0 20 Q720 50 1440 20 L1440 0 Q720 10 0 0 Z"
            fill="#d1d1d1"
          />
        </svg>
      </div>

      <div className="z-10 relative items-center gap-8 grid md:grid-cols-2 mx-auto px-6 py-16 max-w-7xl">
        {/* Teks */}
        <div>
          <h2 className="mb-4 font-bold text-2xl md:text-3xl">Visi</h2>
          <p className="mb-8">
            Mencetak lulusan berAKHLAK, ahli, dan berkebhinekaan global.
          </p>

          <h2 className="mb-4 font-bold text-2xl md:text-3xl">Misi</h2>
          <ol className="space-y-2 pl-5 list-decimal">
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
          <span className="bottom-20 left-40 absolute bg-white/30 backdrop-blur px-4 py-2 rounded-lg font-medium text-white text-xl">
            Visi & Misi
          </span>
        </div>
      </div>
    </section>
  );
}