import Image from "next/image";

export default function WhyUs() {
  return (
    <div className="bg-white mt-16 pb-10 w-full" id="divisi">
      {/* Judul */}
      <div className="max-sm:px-3 text-center">
        <h4 className="font-[500] text-[15px] text-gray-400">why us?</h4>
        <h2 className="mt-2 font-[700] text-[#333333] text-[32px] sm:text-[40px]">
          Mengapa Harus Moklet ?
        </h2>
        <p className="mt-3 font-[400] text-[15px] text-black leading-[21px]">
          Ini alasan mengapa anda harus memilih sekolah kami?
        </p>
      </div>

      {/* Grid Card */}
      <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 px-6 lg:px-24 text-center">
        {/* Item 1 */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center bg-primary mb-5 rounded-full w-24 h-24">
            <Image
              src="/assets/image/whyus/1.png" 
              alt="Fasilitas Lengkap"
              width={40}
              height={40}
            />
          </div>
          <h3 className="font-bold text-[#333333] text-lg">
            Fasilitas Lengkap
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            Penunjang belajar dengan kualitas premium.
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center bg-primary mb-5 rounded-full w-24 h-24">
            <Image
              src="/assets/image/whyus/2.png" 
              alt="Lingkungan Nyaman"
              width={40}
              height={40}
            />
          </div>
          <h3 className="font-bold text-[#333333] text-lg">
            Lingkungan Nyaman
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            Berada di lingkungan yang asri, aman, dan kondusif.
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center bg-primary mb-5 rounded-full w-24 h-24">
            <Image
              src="/assets/image/whyus/3.png" 
              alt="Pengajar Kompeten"
              width={40}
              height={40}
            />
          </div>
          <h3 className="font-bold text-[#333333] text-lg">
            Pengajar Kompeten
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            Guru yang up-to-date dengan perkembangan industri.
          </p>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center bg-primary mb-5 rounded-full w-24 h-24">
            <Image
              src="/assets/image/whyus/4.png" 
              alt="Kerjasama Luas"
              width={40}
              height={40}
            />
          </div>
          <h3 className="font-bold text-[#333333] text-lg">
            Kerjasama Luas
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            Memperbesar kesempatan bekerja sebelum lulus.
          </p>
        </div>
      </div>
    </div>
  );
}
