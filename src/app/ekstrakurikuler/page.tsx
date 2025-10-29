'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { api } from '../_components/lib/api'

interface Organisation {
  id: number;
  name: string
  description: string
  logo: string
}

export default function EkstrakurikulerPage () {
  const [orgs, setOrganisations] = useState<Organisation[]>([])

  useEffect(() => {
    api.get('/ekstrakulikuler').then(response => {
      // Sesuaikan dengan struktur response API kamu
     
      setOrganisations(response.data.data)
    })
  }, [])
  return (
    <main className='bg-white min-h-screen'>
      <section className='mx-auto px-6 py-16 max-w-7xl'>
        <h1 className='mb-8 font-bold text-red-800 text-4xl text-center'>
          Ekstrakurikuler SMK Telkom Malang
        </h1>
        <p className='mx-auto mb-12 max-w-2xl text-gray-600 text-center'>
          Temukan berbagai ekstrakurikuler yang bisa kamu ikuti untuk
          mengembangkan bakat, minat, dan karakter di SMK Telkom Malang.
        </p>
        <div className='gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {orgs.map(org => (
            <div
              key={org.id}
              className='flex flex-col items-center bg-white shadow hover:shadow-lg p-6 border border-gray-200 rounded-2xl text-center transition'
            >
              <div className='flex justify-center items-center bg-red-100 mb-4 rounded-full w-24 h-24'>
                <Image
                  src={org.logo}
                  alt={`Logo ${org.name}`}
                  width={80}
                  height={80}
                  className='object-contain'
                />
              </div>
     
              <h2 className='mb-2 font-bold text-gray-900 text-xl'>
                {org.name}
              </h2>
              <p className='mb-6 text-gray-600 text-sm'>{org.description}</p>
         
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
