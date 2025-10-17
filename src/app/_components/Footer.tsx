"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <>
      <footer className={`${pathname.startsWith('/admin') ? "hidden" : ""}`}>
        <div className="pt-31 max-sm:pt-15 py-10 px-32 max-sm:px-7">
          <div className="flex justify-between min-xl:items-center">
            <div className="flex flex-col max-sm:w-[50%] gap-7">
              <Image
                src="/assets/image/logo.png"
                alt="Logo Metic"
                width={125}
                height={62.5}
                className=""
              />
              <h1 className="text-black font-[500] text-[18px]">
                Platform informasi sub-organ METIC <br /> untuk siswa SMK Telkom
                Malang
              </h1>
              <h4 className="text-black font-[400] text-[18px]">
                &copy; 2025 MokletDev.
              </h4>
            </div>
            <div className="flex max-sm:flex-col items-center gap-13 max-sm:gap-7">
              <div className="text-left">
                <h1 className="font-[400] text-black text-[18px] max-sm:mb-1 mb-7">
                  Menu Utama
                </h1>
                <div className="flex flex-col gap-3">
                  <p className="text-black font-[500] text-[18px]">
                    Our Division
                  </p>
                  <p className="text-black font-[500] text-[18px]">
                    Track Record
                  </p>
                  <p className="text-black font-[500] text-[18px]">
                    Lead Of METIC
                  </p>
                  <Link
                    href={"#FAQ"}
                    className="text-black font-[500] text-[18px]">
                    FAQ
                  </Link>
                </div>
              </div>
              <div className="text-left">
                <h1 className="font-[400] text-black text-[18px] max-sm:mb-1 mb-7">
                  Tautan
                </h1>
                <div className="flex flex-col gap-3">
                  <p className="text-black font-[500] text-[18px]">
                    Profil Sekolah
                  </p>
                  <p className="text-black font-[500] text-[18px]">YPT</p>
                  <p className="text-black font-[500] text-[18px]">
                    Organisasi
                  </p>
                  <p className="text-black font-[500] text-[18px]">MokletDev</p>
                </div>
              </div>
              <div className="text-left">
                <h1 className="font-[400] text-black text-[18px] max-sm:mb-1 mb-7">
                  Sosial Media
                </h1>
                <div className="flex flex-col gap-3">
                  <p className="text-black font-[500] text-[18px]">Moklet</p>
                  <p className="text-black font-[500] text-[18px]">
                    @Osis Moklet
                  </p>
                  <p className="text-black font-[500] text-[18px]">
                    @Media Moklet
                  </p>
                  <p className="text-black font-[500] text-[18px]">
                    @Informetics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian alamat */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-gray-700">
          <h3 className="font-semibold text-[16px] mb-1">Alamat:</h3>
          <p className="text-[15px] leading-relaxed">
            Jl. Danau Ranau, Sawojajar, Kec. Kedungkandang, Kota Malang,
            <br />
            Jawa Timur 65139
          </p>
        </div>
    </footer>
    </>
  );
}


