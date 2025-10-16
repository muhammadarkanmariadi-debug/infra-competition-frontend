import Image from "next/image";

export default function DivisionSection() {
  return (
    <div className="bg-white w-full mt-16 pb-10" id="divisi">
      {/* Judul */}
      <div className="text-center max-sm:px-3">
        <h4 className="text-[15px] font-[500] text-gray-400">why us?</h4>
        <h2 className="text-[#333333] mt-2 font-[700] text-[32px] sm:text-[40px]">
          Mengapa Harus Moklet ?
        </h2>
        <p className="text-[15px] mt-3 font-[400] text-black leading-[21px]">
          Ini alasan mengapa anda harus memilih sekolah kami?
        </p>
      </div>

      {/* Grid Card */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 lg:px-24 text-center">
        {/* Item 1 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-5">
            <Image
              src="/assets/image/whyus/1.png" 
              alt="Fasilitas Lengkap"
              width={40}
              height={40}
            />
          </div>
          <h3 className="text-lg font-bold text-[#333333]">
            Fasilitas Lengkap
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Penunjang belajar dengan kualitas premium.
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-5">
            <Image
              src="/assets/image/whyus/2.png" 
              alt="Lingkungan Nyaman"
              width={40}
              height={40}
            />
          </div>
          <h3 className="text-lg font-bold text-[#333333]">
            Lingkungan Nyaman
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Berada di lingkungan yang asri, aman, dan kondusif.
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-5">
            <Image
              src="/assets/image/whyus/3.png" 
              alt="Pengajar Kompeten"
              width={40}
              height={40}
            />
          </div>
          <h3 className="text-lg font-bold text-[#333333]">
            Pengajar Kompeten
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Guru yang up-to-date dengan perkembangan industri.
          </p>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-5">
            <Image
              src="/assets/image/whyus/4.png" 
              alt="Kerjasama Luas"
              width={40}
              height={40}
            />
          </div>
          <h3 className="text-lg font-bold text-[#333333]">
            Kerjasama Luas
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Memperbesar kesempatan bekerja sebelum lulus.
          </p>
        </div>
      </div>
    </div>
  );
}
