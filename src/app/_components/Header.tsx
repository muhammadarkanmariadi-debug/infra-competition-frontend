import Image from "next/image";

export default function Header() {
  return (
    <div className="relative mt-20 overflow-hidden">
      {/* Teks judul */}
      <div className="text-center px-4">
        <h1 className="font-bold text-[32px] sm:text-[40px] md:text-[50px] 2xl:text-[60px] text-primary leading-tight">
          The Real Informatics School!
        </h1>
        <h3 className="mt-2 font-bold text-[20px] sm:text-[24px] md:text-[30px] 2xl:text-[40px] text-primary">
          Pelopor SMK Bidang Teknologi dan Informatika di Indonesia
        </h3>
        <p className="mt-5 text-black text-sm sm:text-base md:text-lg 2xl:text-xl leading-relaxed">
          <b className="text-primary">Moklet Portal</b> adalah pusat informasi
          digital <b>SMK Telkom Malang</b> yang menyajikan berita, agenda,
          pengumuman, dan prestasi sekolah secara cepat dan mudah diakses oleh
          siswa, guru, orang tua, maupun masyarakat.
        </p>
      </div>

      {/* Segitiga dekorasi atas */}
      <Image
        src="/assets/image/Group14556.png"
        alt="triangle top left"
        width={80}
        height={80}
        className="hidden md:block absolute top-16 left-10 md:top-20 md:left-24"
      />
      <Image
        src="/assets/image/Group1395.png"
        alt="triangle top right"
        width={80}
        height={80}
        className="hidden md:block absolute top-16 right-10 md:top-20 md:right-24"
      />

      <div className="drop-shadow-[0_6px_97.5px_rgba(225,95,96,0.73)] text-center relative mt-10">
        {/* Garis + segitiga kiri */}
        <Image
          src="/assets/image/Vector40.png"
          alt="arrow left"
          width={120}
          height={60}
          className="hidden md:block absolute bottom-20 md:bottom-28 left-[8%] md:left-[20%]"
        />
        <Image
          src="/assets/image/Polygon20.png"
          alt="triangle photo left"
          width={140}
          height={140}
          className="hidden md:block absolute bottom-5 md:bottom-14 left-[5%] md:left-[12%]"
        />

        {/* Garis + segitiga kanan */}
        <Image
          src="/assets/image/Vector39.png"
          alt="arrow right"
          width={120}
          height={60}
          className="hidden md:block absolute bottom-20 md:bottom-28 right-[8%] md:right-[22%]"
        />
        <Image
          src="/assets/image/Polygon201.png"
          alt="triangle photo right"
          width={140}
          height={140}
          className="hidden md:block absolute bottom-5 md:bottom-8 right-[5%] md:right-[14%]"
        />

        {/* Maskot Bombi */}
        <Image
          src="/assets/image/bombi.png"
          alt="Bombi"
          width={220}
          height={220}
          className="relative mx-auto mt-8 md:mt-[38px] hover:scale-105 transition-transform duration-300 drop-shadow-xl z-10"
        />

        {/* Tombol */}
        <a
          href="/registration"
          className="flex justify-center items-center bg-primary hover:bg-opacity-80 hover:shadow-lg mx-auto py-3 md:py-4 rounded-full w-[220px] sm:w-[260px] md:w-[350px] font-bold text-white text-lg sm:text-xl md:text-3xl hover:scale-105 transition-all duration-300 relative z-10 mt-6"
        >
          Ikuti Kami!
        </a>
      </div>
    </div>
  );
}
