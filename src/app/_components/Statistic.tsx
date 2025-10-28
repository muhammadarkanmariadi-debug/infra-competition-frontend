'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

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
    <div className='bg-white shadow-lg p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300 transform'>
      <div className='mb-4 text-6xl'>{prestasi.icon}</div>
      <h3 className='mb-2 font-bold text-gray-800 text-xl'>{prestasi.title}</h3>
      <div className='font-bold text-primary text-4xl'>
        {count}
        {prestasi.suffix}
      </div>
    </div>
  )
}

const Statistic: React.FC = () => {
  return (
    <div
      className='relative bg-secondary mt-31 w-full overflow-hidden'
      id='track'
    >
      {/* Ornamen wave di atas */}
      <div className='-top-[15px] left-0 absolute w-full overflow-hidden leading-none'>
        <svg
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
      </div>

      {/* Judul */}
      <div className='pt-[60px] pb-[30px] text-center'>
        <h4 className='font-medium text-[15px] text-white/60'>
          Statistik Murid Kami
        </h4>
        <h1 className='font-bold text-[45px] text-white'>
          Statistik Murid & Alumni
        </h1>
      </div>


      {/* Ornamen Gambar (tetap ada) */}
      <div className='flex xl:flex-row flex-col items-center my-10 pb-[30px] w-full'>
    
        <div className='justify-center mx-auto px-6 w-full'>
          <div className='justify-center gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {prestasiData.map((prestasi, index) => (
              <CounterCard key={index} prestasi={prestasi} />
            ))}
          </div>
        </div>
      </div>

      {/* Garis bawah */}
      <div className='block bg-[#E9E2EA] h-5'></div>
    </div>
  )
}

export default Statistic
