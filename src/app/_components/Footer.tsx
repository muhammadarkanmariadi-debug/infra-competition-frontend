'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer () {
  const pathname = usePathname()
  return (
    <footer className='bg-white mt-5'>
      <div className='mx-auto px-6 md:px-16 py-12 max-w-7xl'>
        {/* Bagian atas */}
        <div className='gap-10 md:gap-16 grid grid-cols-1 md:grid-cols-4'>
          {/* Kiri */}
          <div>
            <Image
              src='/assets/image/logo.png'
              alt='Logo Metic'
              width={150}
              height={75}
              className='mb-5'
            />
            <p className="text-[16px] text-gray-700 leading-relaxed">
              Pelopor SMK Bidang Teknologi dan Informatika di Indonesia.
            </p>
            <p className='mt-6 text-gray-500 text-sm'>
              © 2025 SMK Telkom Malang & BebasDeh. All rights reserved.
            </p>
          </div>


           

          {/* SMK Telkom Malang */}
          <div>
            <h3 className='mb-4 font-semibold text-gray-500 text-sm uppercase'>
              SMK Telkom Malang
            </h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/struktur'
                  className='text-gray-800 hover:text-primary transition'
                >
                  Struktur Organisasi
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-gray-800 hover:text-primary transition'
                >
                  Sertifikat Akreditasi
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-gray-800 hover:text-primary transition'
                >
                  Virtual Tour
                </Link>
              </li>
            </ul>
          </div>


          {/* Menu Utama */}
          <div>
            <h3 className='mb-4 font-semibold text-gray-500 text-sm uppercase'>
              Menu Utama
            </h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/'
                  className='text-gray-800 hover:text-primary transition'
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href='/berita'
                  className='text-gray-800 hover:text-primary transition'
                >
                  Berita
                </Link>
              </li>
              <li>
                <Link
                  href='/tentang-kami'
                  className='text-gray-800 hover:text-primary transition'
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href='/hubungi-kami'
                  className='text-gray-800 hover:text-primary transition'
                >
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

         

          {/* Kenali Kami */}
          <div>
            <h3 className='mb-4 font-semibold text-gray-500 text-sm uppercase'>
              Kenali Kami Lebih Dekat
            </h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='https://www.instagram.com/smktelkommalang'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-gray-800 hover:text-primary text-sm transition'
                >
                  <Image
                    src='/assets/image/instagram.svg'
                    alt='Instagram'
                    width={20}
                    height={20}
                    className='mr-2'
                  />
                  @smktelkommalang
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.youtube.com/officialsmktelkommalang'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-gray-800 hover:text-primary text-sm transition'
                >
                  <Image
                    src='/assets/image/youtube.svg'
                    alt='YouTube'
                    width={20}
                    height={20}
                    className='mr-2'
                  />
                  <span className='leading-tight'>
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
         <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5098.506090439917!2d112.65644107500694!3d-7.976861992048307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6285c5c1b44e3%3A0xf6c889ac7452dc3a!2sSMK%20Telkom%20Malang!5e1!3m2!1sid!2sid!4v1761701406710!5m2!1sid!2sid" 
    className="absolute top-0 left-0 w-full h-full border-0"
    loading="lazy"
  />
</div>
        </div>
       

        {/* Partners Section */}
        <div className='mt-10 pt-8 border-gray-200 border-t'>
          <div className='flex justify-center items-center'>
            <Image
              src='/assets/image/partner.png'
              alt='Our Partners'
              width={600}
              height={80}
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
