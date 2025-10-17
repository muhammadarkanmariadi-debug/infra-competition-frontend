'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer () {
  const pathname = usePathname()
  return (
    <footer className={`${pathname.startsWith('/admin') ? "hidden" : ""}`}>
      <div className="mx-auto px-6 md:px-16 py-12 max-w-7xl">
        {/* Bagian atas */}
        <div className="gap-10 md:gap-16 grid grid-cols-1 md:grid-cols-4">
          {/* Kiri */}
          <div>
            <Image
              src="/assets/image/logo.png"
              alt="Logo Metic"
              width={150}
              height={75}
              className="mb-5"
            />
            <p className="text-[16px] text-gray-700 leading-relaxed">
              Pelopor SMK bidang Teknologi dan
Informatika di Indonesia
              <br />
              untuk siswa SMK Telkom Malang
            </p>
            <p className="mt-6 text-gray-500 text-sm">
              © 2025 Copyright BebasDeh
            </p>
          </div>

          {/* Menu Utama */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-500 text-sm uppercase">
              Menu Utama
            </h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-800 hover:text-primary transition">Our Division</Link></li>
              <li><Link href="#" className="text-gray-800 hover:text-primary transition">Track Record</Link></li>
              <li><Link href="#" className="text-gray-800 hover:text-primary transition">Lead Of METIC</Link></li>
              <li><Link href="#FAQ" className="text-gray-800 hover:text-primary transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Tautan */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-500 text-sm uppercase">
              Tautan
            </h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-800 hover:text-primary transition">Profil Sekolah</Link></li>
              <li><Link href="#" className="text-gray-800 hover:text-primary transition">YPT</Link></li>
              <li><Link href="#" className="text-gray-800 hover:text-primary transition">Organisasi</Link></li>
              <li><Link href="#" className="text-gray-800 hover:text-primary transition">MokletDev</Link></li>
            </ul>
          </div>

          {/* Media Sosial */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-500 text-sm uppercase">
              Media Sosial
            </h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-800 hover:text-primary transition">Moklet</Link></li>
              <li><Link href="#" className="text-gray-800 hover:text-primary transition">OSIS Moklet</Link></li>
              <li><Link href="#" className="text-gray-800 hover:text-primary transition">Media Moklet</Link></li>
              <li><Link href="#" className="text-gray-800 hover:text-primary transition">Informetics</Link></li>
            </ul>
          </div>
        </div>

        {/* Bagian alamat */}
        <div className="mt-10 pt-6 border-gray-200 border-t text-gray-700">
          <h3 className="mb-1 font-semibold text-[16px]">Alamat:</h3>
          <p className="text-[15px] leading-relaxed">
            Jl. Danau Ranau, Sawojajar, Kec. Kedungkandang, Kota Malang,
            <br />
            Jawa Timur 65139
          </p>
        </div>
      </div>
    </footer>
  );
}
