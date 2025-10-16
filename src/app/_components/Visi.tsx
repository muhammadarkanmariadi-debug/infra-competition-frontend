import Image from "next/image";

export default function VideoProfil() {
  return (
    <section className="bg-white w-full py-16" id="video-profil">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Kiri: teks */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Video Profil
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Video profil sekolah yang akan memperkenalkan kepada kalian hal-hal
            yang berkaitan dengan lingkungan sekolah, fasilitas umum sekolah,
            fasilitas pembelajaran, ruang belajar, kegiatan siswa dan masih
            banyak lagi.
            <br />
            <br />
            Biar kalian tidak penasaran apa saja yang ada di dalam{" "}
            <b>SMK Telkom Malang</b>, yuk segera tonton video profilnya!
          </p>
        </div>

        <div className="relative flex justify-center">
          {/* Frame komputer */}
          <Image
            src="/assets/image/mac.png" 
            alt="Computer frame"
            width={500}
            height={400}
            className="relative z-10"
          />

          {/* Layar komputer */}
          <div className="absolute top-[9%] left-[11%] w-[78%] h-[63%] z-0 rounded-sm overflow-hidden">
           <iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/9xofia597HI?rel=0&modestbranding=1"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

          </div>
        </div>
      </div>
    </section>
  );
}
