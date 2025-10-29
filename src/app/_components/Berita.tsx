'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { api } from './lib/api'
import { useRouter } from 'next/dist/client/components/navigation'
import { motion } from 'framer-motion'

interface Author {
  id: number
  name: string
  email: string
  role: string
  created_at: string
  updated_at: string
}

interface Post {
  id: number
  title: string
  author_id: number
  body: string
  short_body: string
  thumbnail: string
  tags: string
  slug: string
  is_published: number
  approval_status: string
  created_at: string
  updated_at: string
  author: Author
}

const Berita = () => {
  const [data, setData] = useState<Post[]>([])
  const router = useRouter()

  const handleCardClick = (slug: string) => {
    router.push(`/post/${slug}`)
  }

  useEffect(() => {
    api.get('/blog').then(response => {
      // Sesuaikan dengan struktur response API kamu
      setData(response.data.data.data)
    })
  }, [])
  const datas = data.slice(0, 3)
  return (
    <motion.div
      id="berita"
      className='py-20'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h1
        className='font-[700] text-[48px] text-black text-center'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Berita Terbaru
      </motion.h1>
      <motion.p className='mx-auto mt-4 max-w-2xl font-[400] text-gray-600 text-xl text-center'>
        Prestasi Moklet dan Berita terkini Seputar Moklet
      </motion.p>
      <motion.div
        className='flex xl:flex-row flex-col justify-center items-center gap-10 mx-auto mt-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {datas.map((item, index) => (
          <motion.div
            onClick={() => handleCardClick(item.slug)}
            key={item.id}
            className='bg-white shadow-md hover:shadow-2xl px-[16.5px] py-[22.5px] rounded-[18px] w-[350px] transition-shadow duration-300'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={`${item.thumbnail}`}
                alt={item.title}
                width={339}
                height={182}
                className='rounded-[20px] w-[339px] h-[182px] object-cover'
              />
            </motion.div>
            <div className=''>
              <motion.div
                className='flex flex-wrap gap-2 mt-[15px]'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
              >
                {item.tags.split(',').slice(0, 2).map((tag: string, tagIndex: number) => (
                  <span
                    key={tagIndex}
                    className='bg-primary/10 hover:bg-primary/20 px-4 py-1.5 rounded-full font-medium text-primary text-sm transition-colors cursor-pointer'
                  >
                    {tag.trim()}
                  </span>
                ))}
              </motion.div>
              <motion.h2
                className='mt-[10px] font-[600] text-[22px] text-primary'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                {item.title}
              </motion.h2>
              <motion.p
                className='font-[400] text-[15px] text-black'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                viewport={{ once: true }}
              >
                {item.short_body}...
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Berita
