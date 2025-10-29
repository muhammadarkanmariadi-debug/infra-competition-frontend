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

// Helper function untuk mendapatkan icon berdasarkan nama
const getIcon = (name: string) => {
  const nameLower = name.toLowerCase()
  
  if (nameLower.includes('musik') || nameLower.includes('band')) {
    return <Music className="w-12 h-12" />
  } else if (nameLower.includes('seni') || nameLower.includes('art')) {
    return <Palette className="w-12 h-12" />
  } else if (nameLower.includes('olahraga') || nameLower.includes('sport')) {
    return <Trophy className="w-12 h-12" />
  } else if (nameLower.includes('pmr') || nameLower.includes('kesehatan')) {
    return <Heart className="w-12 h-12" />
  } else if (nameLower.includes('foto') || nameLower.includes('kamera')) {
    return <Camera className="w-12 h-12" />
  } else if (nameLower.includes('bahasa') || nameLower.includes('english')) {
    return <Globe className="w-12 h-12" />
  } else if (nameLower.includes('coding') || nameLower.includes('programming')) {
    return <Cpu className="w-12 h-12" />
  } else if (nameLower.includes('literasi') || nameLower.includes('baca')) {
    return <BookOpen className="w-12 h-12" />
  } else if (nameLower.includes('organisasi') || nameLower.includes('osis')) {
    return <Users className="w-12 h-12" />
  } else {
    return <Lightbulb className="w-12 h-12" />
  }
}

// Array warna gradient untuk variasi
const gradientColors = [
  'from-blue-500 to-blue-700',
  'from-purple-500 to-purple-700',
  'from-pink-500 to-pink-700',
  'from-green-500 to-green-700',
  'from-orange-500 to-orange-700',
  'from-red-500 to-red-700',
  'from-teal-500 to-teal-700',
  'from-indigo-500 to-indigo-700',
  'from-cyan-500 to-cyan-700'
]

export default function EkstrakurikulerPage () {
  const [orgs, setOrganisations] = useState<Organisation[]>([])

  useEffect(() => {
    api.get('/ekstrakulikuler').then(response => {
      setOrganisations(response.data.data)
    }).catch(err => {
      console.error('Error fetching ekstrakurikuler:', err)
    })
  }, [])

  return (
    <main className='bg-white min-h-screen'>
      {/* Header Section */}
      <section className='relative bg-secondary py-20 overflow-hidden'>
        {/* Decorative elements */}
        <div className='absolute inset-0 opacity-10'>
          <div className='top-0 left-1/4 absolute bg-white blur-3xl rounded-full w-96 h-96'></div>
          <div className='right-1/4 bottom-0 absolute bg-white blur-3xl rounded-full w-96 h-96'></div>
        </div>

        <div className='relative mx-auto px-6 max-w-7xl container'>
          <motion.div
            className='text-center'
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className='mb-6 font-bold text-white text-5xl md:text-6xl'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ekstrakurikuler
            </motion.h1>
            <motion.p
              className='mx-auto mb-8 max-w-3xl text-white/90 text-xl'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Temukan berbagai ekstrakurikuler yang bisa kamu ikuti untuk
              mengembangkan bakat, minat, dan karakter di SMK Telkom Malang
            </motion.p>
            <motion.div
              className='bg-white/30 mx-auto rounded-full w-24 h-1'
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ekstrakurikuler Cards */}
      <section className='mx-auto px-6 py-20 max-w-7xl'>
        <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {orgs.map((org, index) => (
            <motion.div
              key={org.id}
              className='group relative flex flex-col bg-white shadow-lg hover:shadow-2xl p-8 border border-gray-200 rounded-3xl overflow-hidden transition-all duration-300'
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  bounce: 0.3
                }
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[index % gradientColors.length]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Icon Circle */}
              <motion.div
                className={`relative flex justify-center items-center bg-gradient-to-br ${gradientColors[index % gradientColors.length]} shadow-lg mb-6 rounded-2xl w-20 h-20 text-white`}
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                {getIcon(org.name)}
              </motion.div>

              {/* Content */}
              <div className='z-10 relative'>
                <h2 className='mb-3 font-bold text-gray-900 group-hover:text-primary text-2xl transition-colors duration-300'>
                  {org.name}
                </h2>
                <p className='mb-6 text-gray-600 leading-relaxed'>
                  {org.description}
                </p>

                {/* Decorative line */}
                <motion.div
                  className={`bg-gradient-to-r ${gradientColors[index % gradientColors.length]} rounded-full w-0 group-hover:w-16 h-1 transition-all duration-300`}
                ></motion.div>
              </div>

              {/* Corner decoration */}
              <div className='top-0 right-0 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className={`bg-gradient-to-br ${gradientColors[index % gradientColors.length]} blur-2xl rounded-full w-32 h-32 -translate-y-1/2 translate-x-1/2`}></div>
              </div>
            </motion.div>
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
