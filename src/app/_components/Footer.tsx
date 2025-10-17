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
              Jadilah Digital Talent yang Siap Menakhlukkan Dunia!
            </p>
            <p className="text-gray-500 text-sm mt-6">
              © 2025 SMK Telkom Malang & BebasDeh. All rights reserved.
            </p>
          </div>

          {/* SMK Telkom Malang */}
          <div>
            <h3 className="text-gray-500 text-sm font-semibold mb-4 uppercase">
              SMK Telkom Malang
            </h3>
            <ul className="space-y-3">
              <li><Link href="/struktur" className="text-gray-800 hover:text-primary transition">Struktur Organisasi</Link></li>
              <li><Link href="#" className="text-gray-800 hover:text-primary transition">Sertifikat Akreditasi</Link></li>
              <li><Link href="#" className="text-gray-800 hover:text-primary transition">Virtual Tour</Link></li>
            </ul>
          </div>

          {/* Menu Utama */}
          <div>
            <h3 className="text-gray-500 text-sm font-semibold mb-4 uppercase">
              Menu Utama
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-800 hover:text-primary transition">Beranda</Link></li>
              <li><Link href="/berita" className="text-gray-800 hover:text-primary transition">Berita</Link></li>
              <li><Link href="/tentang-kami" className="text-gray-800 hover:text-primary transition">Tentang Kami</Link></li>
              <li><Link href="/hubungi-kami" className="text-gray-800 hover:text-primary transition">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Kenali Kami */}
          <div>
            <h3 className="text-gray-500 text-sm font-semibold mb-4 uppercase">
              Kenali Kami Lebih Dekat
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="https://www.instagram.com/smktelkommalang" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-800 hover:text-primary transition text-sm"
                >
                  <Image
                    src="/assets/image/instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  @smktelkommalang
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.youtube.com/officialsmktelkommalang" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-800 hover:text-primary transition text-sm"
                >
                  <Image
                    src="/assets/image/youtube.svg"
                    alt="YouTube"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span className="leading-tight">
                    Official SMK Telkom Malang
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>







        {/* Bagian alamat */}
        <div className=" mt-4 pt-6 text-gray-700">
          <h3 className="font-semibold text-[16px] mb-1">Alamat:</h3>
          <p className="text-[15px] leading-relaxed">
            Jl. Danau Ranau, Sawojajar, Kec. Kedungkandang, Kota Malang,
            <br />
            Jawa Timur 65139
          </p>
        </div>




 {/* Partners Section */}
<div className="border-t border-gray-200 mt-10 pt-8">
  <div className="flex justify-center items-center">
    <Image 
      src="/assets/image/partner.png" 
      alt="Our Partners" 
      width={600} 
      height={80} 
      className="object-contain" 
    />
  </div>
</div>






      </div>
    </footer>




  );
}


