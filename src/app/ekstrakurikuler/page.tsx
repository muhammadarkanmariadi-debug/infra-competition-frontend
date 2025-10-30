'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { api } from '../_components/lib/api'
import { 
  Music, 
  Palette, 
  Trophy, 
  Users, 
  BookOpen, 
  Lightbulb,
  Heart,
  Camera,
  Globe,
  Cpu
} from 'lucide-react'

interface Organisation {
  id: number
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
      setOrganisations(response.data.data)
    }).catch(err => {
      console.error('Error fetching ekstrakurikuler:', err)
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

        {/* Empty State */}
        {orgs.length === 0 && (
          <motion.div
            className='py-20 text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className='inline-flex justify-center items-center bg-gray-100 mb-4 rounded-full w-20 h-20'>
              <Users className='w-10 h-10 text-gray-400' />
            </div>
            <h3 className='mb-2 font-semibold text-gray-900 text-xl'>
              Belum ada ekstrakurikuler
            </h3>
            <p className='text-gray-600'>
              Data ekstrakurikuler akan segera ditampilkan
            </p>
          </motion.div>
        )}
      </section>

      {/* Bottom CTA Section */}
      <section className='bg-secondary py-16'>
        <div className='mx-auto px-6 max-w-7xl text-center'>
          <motion.h2
            className='mb-4 font-bold text-white text-3xl'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Siap Bergabung?
          </motion.h2>
          <motion.p
            className='mb-8 text-white/90 text-lg'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Pilih ekstrakurikuler yang sesuai dengan minat dan bakatmu!
          </motion.p>
          <motion.a
            href='https://ppdb.telkomschools.sch.id/signup?lemdik=51'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block bg-white hover:bg-gray-100 shadow-lg px-8 py-4 rounded-full font-bold text-primary text-xl transition-colors'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Daftar Sekarang
          </motion.a>
        </div>
      </section>
    </main>
  )
}
