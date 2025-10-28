'use client'

import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'
import { api } from './lib/api'
import Link from 'next/link'


interface Jurusan {
  name: string
  thumbnail: string
  description: string
}

export default function JurusanSection () {
  const [data, setData] = useState<Jurusan[]>([])

  useEffect(() => {
    api.get('/major').then(response => {
      setData(response.data.data)
    })
  }, [])
  return (
    <section
      className='relative bg-gradient-to-b from-[#FFF5F5] to-[#FFFFFF] py-20'
      id='jurusan'
    >
      <div className='mx-auto px-6 text-center container'>
        <h2 className='mb-4 font-bold text-black text-4xl'>Jurusan Kami</h2>
        <p className='mx-auto mb-12 max-w-2xl text-black text-lg'>
          Pilih jurusan sesuai passion kamu! Semua jurusan di SMK Telkom Malang
          dirancang untuk mempersiapkan kamu jadi profesional muda di dunia
          teknologi.
        </p>
      </div>
      <div className='items-start'>
        {data.map((item, index) => (
          <div
            className={`flex flex-wrap items-center my-8 rounded-2xl mx-20 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
            key={index}
          >
            <Image
              src={'http://localhost:8000/storage/' + item.thumbnail}
              alt={item.name}
              width={400}
              height={150}
              className='flex-shrink-0'
            />
            <div
              className={`flex flex-col gap-8 ${
                index % 2 === 0
                  ? 'ml-6 items-start'
                  : 'mr-6 items-end text-right'
              }`}
            >
              <h3 className='font-bold text-5xl'>{item.name}</h3>
              <p className='max-w-4xl text-gray-600 text-xl'>{item.description}</p>
              <Link
                href={`/jurusan/${item.id}`}
                className='hover:bg-primary mt-4 px-6 py-2 border border-primary rounded-lg w-fit font-semibold text-primary hover:text-white transition-colors duration-300'
              >
                Lihat Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
