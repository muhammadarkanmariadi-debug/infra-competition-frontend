import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white mt-5">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        {/* Bagian atas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
          {/* Kiri */}
          <div>
            <Image
              src="/assets/image/logo.png"
              alt="Logo Metic"
              width={150}
              height={75}
              className="mb-5"
            />
            <p className="text-gray-700 text-[16px] leading-relaxed">
              Platform informasi organisasi & sub-organ METIC
              <br />
              untuk siswa SMK Telkom Malang
            </p>
            <p className="text-gray-500 text-sm mt-6">
              © 2025 Copyright MokletDev
            </p>
      
          </div>

          {/* Menu Utama */}
          <div>
            <h3 className="text-gray-500 text-sm font-semibold mb-4 uppercase">
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
            <h3 className="text-gray-500 text-sm font-semibold mb-4 uppercase">
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
            <h3 className="text-gray-500 text-sm font-semibold mb-4 uppercase">
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
        
      </div>
    </footer>
  );
}

