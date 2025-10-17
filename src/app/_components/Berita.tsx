'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { api } from './lib/api'
import { useRouter } from 'next/dist/client/components/navigation'

interface BeritaData {
  id: number
  title: string
  body: string
  short_body: string
  thumbnail: string
  tags: string
  slug: string
  is_published: boolean
  author_id: number
  created_at: string
  updated_at: string
}

const Berita = () => {
  const [data, setData] = useState<BeritaData[]>([])
  const router = useRouter();


  const handleCardClick = (slug: string) => {
    router.push(`/post/${slug}`);
  };

  useEffect(() => {
    api.get('/blog').then(response => {
      // Sesuaikan dengan struktur response API kamu
      setData(response.data.data.data)
    })
  }, [])
  const datas = data.slice(0, 3)
  return (
    <div className='py-20'>
      <h1 className='font-[700] text-[48px] text-primary text-center'>
        Berita Terbaru
      </h1>
      <div className='flex xl:flex-row justify-center items-center gap-10 mx-auto mt-10'>
        {datas.map(item => (
          <div onClick={() => handleCardClick(item.slug)}
            key={item.id}
            className='bg-white shadow-md hover:shadow-2xl px-[16.5px] py-[22.5px] rounded-[18px] w-[350px] transition-shadow duration-300'
          >
            <Image
              src={`http://localhost:8000/storage/${item.thumbnail}`}
              alt={item.title}
              width={339}
              height={182}
              className='rounded-[20px] w-[339px] h-[182px] object-cover'
            />
            <div className=''>
              <div className='bg-secondary-bg mt-[15px] py-2 rounded-[13px] w-[113px] h-[32px] font-[500] text-[12px] text-primary text-center'>
                {item.tags}
              </div>
              <h2 className='mt-[10px] font-[600] text-[22px] text-primary'>
                {item.title}
              </h2>
              <p className='font-[400] text-[15px] text-black'>
                {item.short_body}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Berita
