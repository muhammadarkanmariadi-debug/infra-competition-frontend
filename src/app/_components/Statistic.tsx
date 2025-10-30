'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

interface Prestasi {
  icon: string
  title: string
  target: number
  suffix?: string
}
const prestasiData: Prestasi[] = [
  {
    icon: '🧑‍💻',
    title: 'Alumni bekerja di perusahaan IT ternama',
    target: 150, // Ganti dengan angka sebenarnya
    suffix: '+'
  },
  {
    icon: '🎓',
    title: 'Alumni melanjutkan kuliah di universitas unggulan',
    target: 200, // Ganti dengan angka sebenarnya
    suffix: '+'
  },
  {
    icon: '🏆',
    title: 'Prestasi lomba tingkat nasional',
    target: 50, // Ganti dengan angka sebenarnya
    suffix: '+'
  },
  {
    icon: '💼',
    title: 'Mitra industri aktif',
    target: 30, // Ganti dengan angka sebenarnya
    suffix: '+'
  }
]
const CounterCard: React.FC<{ prestasi: Prestasi }> = ({ prestasi }) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const duration = 2000 // Durasi animasi dalam ms
    const increment = prestasi.target / (duration / 50)
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= prestasi.target) {
          clearInterval(timer)
          return prestasi.target
        }
        return Math.ceil(prev + increment)
      })
    }, 50)
    return () => clearInterval(timer)
  }, [prestasi.target])
  return (
    <motion.div 
      className='bg-white shadow-lg rounded-2xl text-center hover:scale-105 transition-transform duration-300 transform w-100 h-64 flex flex-col justify-center items-center'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <div className='mb-4 text-6xl'>{prestasi.icon}</div>
      <h3 className='mb-2 font-bold text-gray-800 text-xl'>{prestasi.title}</h3>
      <div className='font-bold text-primary text-4xl'>
        {count}
        {prestasi.suffix}
      </div>
    </motion.div>
  )
}

const Statistic: React.FC = () => {
  return (
    <motion.div
      className='relative bg-secondary mt-31 w-full overflow-hidden'
      id='track'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Ornamen wave di atas */}
      <motion.div 
        className='-top-[15px] left-0 absolute w-full overflow-hidden leading-none'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <svg style={{ marginTop: '-20px' }}
          width='1440'
          height='60'
          viewBox='0 0 1440 60'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='w-full h-auto'
        >
          <path
            d='M0 20 Q720 50 1440 20 L1440 0 Q720 10 0 0 Z'
            fill='url(#gradienName)'
          />
          <defs>
            <linearGradient
              id='gradienName'
              x1='0'
              y1='0'
              x2='0'
              y2='100%'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#E9E2EA' />
              <stop offset='1' stopColor='#F5F5F5' />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Judul */}
      <motion.div 
        className='pt-[60px] pb-[30px] text-center'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.h4 
          className='font-medium text-[15px] text-white/60'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Statistik Murid Kami
        </motion.h4>
        <motion.h1 
          className='font-bold text-[45px] text-white'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Statistik Murid & Alumni
        </motion.h1>
      </motion.div>

      {/* Ornamen Gambar (tetap ada) */}
      <motion.div 
        className='flex xl:flex-row flex-col items-center my-10 pb-[30px] w-full'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <div className='justify-center mx-auto px-6 w-full'>
          <motion.div 
            className='justify-center gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {prestasiData.map((prestasi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <CounterCard prestasi={prestasi} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Garis bawah */}
      <motion.div 
        className='block bg-[#E9E2EA] h-5'
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      ></motion.div>
    </motion.div>
  )
}

export default Statistic
