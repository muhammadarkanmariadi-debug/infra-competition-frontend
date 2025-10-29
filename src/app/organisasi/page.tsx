'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { api } from '../_components/lib/api'

const organisations = [
  {
    id: 1,
    name: 'OSIS',
    description: 'MPK Moklet merupakan singkatan dari Majelis...',
    logo: '/assets/image/osis.png',
    link: '/organisasi/mpk'
  },
  {
    id: 2,
    name: 'MPK',
    description: 'OSIS SMK Telkom Malang merupakan sebuah...',
    logo: '/assets/image/mpk.png',
    link: '/organisasi/osis'
  }
]

const subOrganisations = [
  {
    id: 1,
    name: 'METIC',
    description:
      'METIC adalah komunitas pelajar SMK Telkom Malang yang terbuka, inovatif, dan santai, mengembangkan teknologi, kewirausahaan, serta kreativitas melalui kolaborasi, workshop, dan kompetisi berdampak sosial dan bisnis.',
    logo: '/assets/image/suborgan/metic.png',
    link: '/organisasi/metic',
    logoScale: 0.5
  },
  {
    id: 2,
    name: 'MEMO',
    description: 'Perpustakaan SMK Telkom Malang, yang dikenal...',
    logo: '/assets/image/suborgan/memo.png',
    link: '/organisasi/pustel',
    logoScale: 0.8
  },
  {
    id: 3,
    name: 'MAC',
    description: 'Paskatema (Paskibra SMK Telkom Malang) adala...',
    logo: '/assets/image/suborgan/mac.png',
    link: '/organisasi/paskatema',
    logoScale: 1
  },
  {
    id: 4,
    name: 'COMET',
    description: 'COMET (Community of Moklet English Talent) is a...',
    logo: '/assets/image/suborgan/comet.png',
    link: '/organisasi/comet',
    logoScale: 1
  },
  {
    id: 5,
    name: 'PUSTEL',
    description: 'MEMO adalah singkatan dari...',
    logo: '/assets/image/suborgan/pustel.png',
    link: '/organisasi/memo',
    logoScale: 1
  },
  {
    id: 6,
    name: 'PMR',
    description: 'MEMO adalah singkatan dari...',
    logo: '/assets/image/suborgan/pmr.png',
    link: '/organisasi/osis',
    logoScale: 1
  },
  {
    id: 7,
    name: 'PALWAGA',
    description: 'MEMO adalah singkatan dari...',
    logo: '/assets/image/suborgan/palwaga.png',
    link: '/organisasi/osis',
    logoScale: 0.6
  },
  {
    id: 8,
    name: 'BDI',
    description: 'MEMO adalah singkatan dari...',
    logo: '/assets/image/suborgan/bdi.png',
    link: '/organisasi/osis',
    logoScale: 1
  },
  {
    id: 9,
    name: 'PASKATEMA',
    description: 'MEMO adalah singkatan dari...',
    logo: '/assets/image/suborgan/paskatema.png',
    link: '/organisasi/osis',
    logoScale: 0.9
  }
]

interface OrganisasiPageProps {
  name: string
  short_description: string
  id: number
  logo: string
  visi : string
  misi : string
  is_organization : boolean
}

export default function OrganisasiPage () {
  const [organizationData, setOrganizationData] = useState<OrganisasiPageProps[]>([])
  
  useEffect(() => {
    const fetch = async () => {
      api.get('/organization').then(response => {
        console.log(response.data.data)
        setOrganizationData(response.data.data)
      })

    
    }

      fetch()
  }, [])
  return (
    <div className='bg-white min-h-screen'>
      {/* Container */}
      <div className='mx-auto px-6 py-16 max-w-7xl'>
        <div className='gap-16 grid grid-cols-1 lg:grid-cols-2'>
          {/* Left Side - Description */}
          <div className='space-y-6'>
            {/* Organisasi Section */}
            <div>
              <div className='flex items-center gap-4 mb-6'>
                <div className='flex justify-center items-center bg-black rounded-full w-14 h-14'>
                  <svg
                    className='w-8 h-8 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <h1 className='font-bold text-black text-4xl'>Organisasi</h1>
              </div>
              <p className='text-gray-600 leading-relaxed'>
                Struktur organisasi siswa, berbagai kegiatan yang dijalankan,
                serta peran penting Organisasi dalam membentuk kepemimpinan
                siswa di SMK Telkom Malang.
              </p>
            </div>

            {/* Spacer untuk align dengan card organisasi */}
            <div className='h-[200px]'></div>

            {/* Sub-organisasi Section */}
            <div>
              <div className='flex items-center gap-4 mt-[-50px] mb-6'>
                <div className='flex justify-center items-center bg-black rounded-full w-14 h-14'>
                  <svg
                    className='w-8 h-8 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                </div>
                <h2 className='font-bold text-black text-4xl'>
                  Sub-organisasi
                </h2>
              </div>
              <p className='text-gray-600 leading-relaxed'>
                Sub-Organisasi adalah bagian penting dari organisasi siswa di
                SMK Telkom Malang, yang menampilkan beragam kegiatan dan inovasi
                yang dijalankan di bawah pengawasan OSIS dan MPK.
              </p>
            </div>
          </div>

          {/* Right Side - Cards */}
          <div className='space-y-6'>
            {/* Organisasi Cards */}
            {organizationData.filter(org => org.is_organization == 1).map(org => (
              <Link
                key={org.id}
                href={`/organisasi/${org.id}`}
                className='group block bg-white hover:shadow-lg p-6 border border-gray-200 rounded-2xl transition-all duration-300'
              >
                <div className='flex justify-between items-center'>
                  <div className='flex flex-1 items-center gap-4'>
                    <div className='flex flex-shrink-0 justify-center items-center bg-gray-100 rounded-full w-16 h-16 overflow-hidden'>
                      <Image
                        src={org.logo}
                        alt={`Logo ${org.name}`}
                        width={64}
                        height={64}
                        className='object-cover'
                      />
                    </div>
                    <div className='flex-1'>
                      <h3 className='mb-1 font-semibold text-black group-hover:text-primary text-xl transition-colors'>
                        {org.name}
                      </h3>
                      <p className='text-gray-500 text-sm line-clamp-1'>
                        {org.short_description}
                      </p>
                    </div>
                  </div>
                  <svg
                    className='flex-shrink-0 ml-4 w-6 h-6 text-primary transition-transform group-hover:translate-x-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </div>
              </Link>
            ))}

            {/* Divider */}
            <div className='py-4'></div>

            {/* Sub-organisasi Cards */}
            {subOrganisations.map(suborg => (
              <Link
                key={suborg.id}
                href={suborg.link}
                className='group block bg-white hover:shadow-lg p-6 border border-gray-200 rounded-2xl transition-all duration-300'
              >
                <div className='flex justify-between items-center'>
                  <div className='flex flex-1 items-center gap-4'>
                    {/* FRAME BULAT — tetap ukuran sama */}
                    <div className='flex flex-shrink-0 justify-center items-center bg-gray-100 rounded-full w-16 h-16 overflow-hidden'>
                      <Image
                        src={suborg.logo}
                        alt={`Logo ${suborg.name}`}
                        width={64}
                        height={64}
                        className='object-contain transition-transform'
                        style={{
                          transform: `scale(${suborg.logoScale || 1})`, // 🔥 scale hanya untuk gambar
                          transformOrigin: 'center'
                        }}
                      />
                    </div>

                    {/* TEKS */}
                    <div className='flex-1'>
                      <h3 className='mb-1 font-semibold text-black group-hover:text-primary text-xl transition-colors'>
                        {suborg.name}
                      </h3>
                      <p className='text-gray-500 text-sm line-clamp-1'>
                        {suborg.description}
                      </p>
                    </div>
                  </div>

                  {/* PANAH */}
                  <svg
                    className='flex-shrink-0 ml-4 w-6 h-6 text-primary transition-transform group-hover:translate-x-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
