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
  console.log('Fetching ekskul data...')
  api.get('/ekstrakulikuler')
    .then(response => {
      console.log('Response:', response)
      console.log('Response data:', response.data)
      console.log('Response data.data:', response.data.data)
      setOrganisations(response.data.data)
    })
    .catch(error => {
      console.error('Error fetching ekskul:', error)
      console.error('Error response:', error.response)
    })
}, [])

console.log('Current orgs:', orgs)


  useEffect(() => {
    api.get('/ekstrakulikuler').then(response => {
      // Sesuaikan dengan struktur response API kamu
     
      setOrganisations(response.data.data)
    })
  }, [])
  return (
    <main className='bg-white min-h-screen'>
      <section className='mx-auto px-6 py-16 max-w-7xl'>
        <h1 className='mb-8 font-bold text-red-800 text-5xl text-center'>
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
  className='relative overflow-hidden bg-gray-100 shadow hover:shadow-xl rounded-2xl transition-all h-80'
>
  {/* Image penuh atas */}
  <div className='relative h-48'>
    <Image
      src={org.logo}
      alt={`Logo ${org.name}`}
      fill
      className='object-cover'
    />
  </div>
  
  {/* Box putih bawah */}
  <div className='bg-white p-6'>
    <h2 className='mb-2 font-bold text-gray-900 text-xl'>
      {org.name}
    </h2>
    <p className='text-gray-600 text-sm line-clamp-3'>
      {org.description}
    </p>
  </div>
</div>


          ))}
        </div>
      </section>
    </main>
  )
}
