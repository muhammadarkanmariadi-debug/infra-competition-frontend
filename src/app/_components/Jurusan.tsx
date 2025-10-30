'use client'

import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'
import { api } from './lib/api'
import Link from 'next/link'
import { motion } from "framer-motion";

interface Jurusan {
  id: number;
  name: string
  thumbnail: string
  short_description: string
}

export default function JurusanSection () {
  const [data, setData] = useState<Jurusan[]>([])

  useEffect(() => {
    api.get('/major').then(response => {
      setData(response.data.data)
    })
  }, [])
  return (
    <motion.section
      className='relative bg-gradient-to-b py-20'
      id='jurusan'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className='mx-auto px-6 text-center container'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h2 
          className='mb-4 font-bold text-black text-4xl'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Jurusan Kami
        </motion.h2>
        <motion.p 
          className='mx-auto mb-12 max-w-2xl text-black text-lg'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Pilih jurusan sesuai passion kamu! Semua jurusan di SMK Telkom Malang
          dirancang untuk mempersiapkan kamu jadi profesional muda di dunia
          teknologi.
        </motion.p>
      </motion.div>
      <motion.div 
        className='items-start'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {data.map((item, index) => (
          <motion.div
            className={`flex flex-wrap items-center my-8 rounded-2xl mx-20 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={`${item.thumbnail}`}
                alt={item.name}
                width={400}
                height={150}
                className='flex-shrink-0'
              />
            </motion.div>
            <motion.div
              className={`flex  flex-col gap-8 ${
                index % 2 === 0
                  ? 'ml-6 items-start'
                  : 'mr-6 items-end text-right'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className='font-bold text-5xl'
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                {item.name}
              </motion.h3>
              <motion.p 
                className='max-w-4xl text-gray-600 text-xl'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                viewport={{ once: true }}
              >
                {item.short_description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/jurusan/${item.id}`}
                  className='hover:bg-primary mt-4 px-6 py-2 border border-primary rounded-lg w-fit font-semibold text-primary hover:text-white transition-colors duration-300'
                >
                  Lihat Detail
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
