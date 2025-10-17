'use client'

import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'
import { api } from './lib/api'

const jurusanList = [
  {
    nama: 'Rekayasa Perangkat Lunak (RPL)',
    gambar: '/assets/image/jurusan-rpl.png',
    deskripsi:
      'Jurusan yang fokus pada pengembangan software, mulai dari website, mobile app, hingga sistem berbasis AI. Cocok buat kamu yang suka ngoding, desain, dan logika kreatif 💻'
  },
  {
    nama: 'Teknik Komputer & Jaringan (TKJ)',
    gambar: '/assets/image/jurusan-tkj.png',
    deskripsi:
      'Di TKJ, kamu bakal belajar tentang instalasi jaringan, server, dan keamanan data. Jurusan ini cocok buat kamu yang suka dunia hardware, network, dan teknologi komunikasi 🌐'
  },
  {
    nama: 'Pengembangan Gim (Game Dev)',
    gambar: '/assets/image/jurusan-game.png',
    deskripsi:
      'Gabungan seni, logika, dan teknologi! Kamu bakal belajar bikin game dari nol, mulai dari desain karakter, coding gameplay, sampai testing dan publikasi 🎮'
  }
]

interface Jurusan {
  name: string
  thumbnail: string
  description: string
}

export default function JurusanSection () {
  const [data, setData] = useState<Jurusan[]>([])

    useEffect(() => {
        api.get('/major').then((response) => {
            setData(response.data.data);
        })
    }, [])
  return (
    <section
      className='relative bg-gradient-to-b from-[#FFF5F5] to-[#FFFFFF] py-20'
      id='jurusan'
    >
      <div className='mx-auto px-6 text-center container'>
        <h2 className='mb-4 font-bold text-primary text-4xl'>Jurusan Kami</h2>
        <p className='mx-auto mb-12 max-w-2xl text-secondary-text text-lg'>
          Pilih jurusan sesuai passion kamu! Semua jurusan di SMK Telkom Malang
          dirancang untuk mempersiapkan kamu jadi profesional muda di dunia
          teknologi.
        </p>

        <div className='justify-center items-stretch gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          {data.map((item, index) => (
            <div
              key={index}
              className='group flex flex-col items-center bg-white shadow-md hover:shadow-2xl p-6 border border-gray-100 rounded-3xl overflow-hidden text-center transition-all hover:-translate-y-2 duration-500'
            >
              <div className='relative mb-5 w-[150px] h-[150px]'>
                <Image
                  src={'http://localhost:8000/storage/' + item.thumbnail}
                  alt={item.name}
                  fill
                  className='object-contain group-hover:scale-105 transition-transform duration-500'
                />
              </div>
              <h3 className='mb-3 font-semibold text-primary text-2xl'>
                {item.name}
              </h3>
              <p className='text-[15px] text-gray-600 leading-relaxed'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
