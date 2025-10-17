'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import RecordCard from './RecordCard'
import { api } from './lib/api'
export interface Posts {
  id: number
  title: string
  author: {
    name: string
    role: string
  }
  date: string
  thumbnail: string
  short_body: string
  body: string
}

const Prestasi = () => {
  useEffect(() => {
    api
      .get('/blog')
      .then(res => {
        setDatas(res.data.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  const [datas, setDatas] = useState<Posts[]>([])
  // const datass = datas.slice(0, 3)
  // const datasss = datas.slice(0, 1)

  const [currentIndex, setCurrentIndex] = useState(0)

  // Filter admin data
  const adminData = datas.filter(d => d.author.role === 'admin')

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex(prev => (prev === adminData.length - 1 ? 0 : prev + 1))
  //   }, 3000)

  //   return () => clearInterval(interval)
  // }, [adminData.length])

  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev === adminData.length - 1) {
          setDirection(-1)
          return prev - 1
        } else if (prev === 0) {
          setDirection(1)
          return prev + 1
        }
        return prev + direction
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [adminData.length, direction]) 
  return (
    <div className='relative bg-secondary mt-31 w-full' id='track'>
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
      <div className='pt-[60px] pb-[30px] text-center'>
        <h4 className='font-[500] text-[15px] text-white/61'>
          Event & Achievements
        </h4>
        <h1 className='font-[700] text-[45px] text-white'>Berita Moklet!</h1>
      </div>
      <div className='flex max-sm:flex-col items-center mt-[30px] pb-[30px] w-full'>
        {/* bagian event */}
        <div className='hidden xl:flex justify-center items-center mx-auto sm:px-3.5 max-sm:py-7 rounded-[18px] shrink-0'>
          <div
            className='hidden xl:flex flex-row-reverse gap-[43px] transition-transform duration-300'
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${adminData.length * 100}%`
            }}
          >
            {adminData
              .filter(d => d.author.role === 'admin')
              .map((data, index) => (
                <RecordCard key={index} data={data} />
              ))}
          </div>
        </div>
        <div className='xl:hidden flex justify-center items-center mx-auto sm:px-3.5 max-sm:py-7 rounded-[18px] shrink-0'>
          <div className='xl:hidden flex flex-row-reverse gap-[43px] transition-transform duration-300'>
            {adminData
              .filter(d => d.author.role === 'admin')
              .map((data, index) => (
                <RecordCard key={index} data={data} />
              ))}
          </div>
        </div>
        <div className='right-0 absolute bg-[radial-gradient(ellipse_39.33%_39.33%_at_49.95%_56.31%,_rgba(255,_255,_255,_0.20)_12%,_rgba(255,_255,_255,_0)_100%)] mt-[-90px] w-150 h-127 rotate-[2.17deg]'></div>
      </div>
      <div className='flex max-sm:flex-col items-center mt-[70px] pb-[30px] w-full'>
        <Image
          src='/assets/image/bombi.png'
          alt='bombi'
          width={490}
          height={390}
          className='max-sm:hidden left-0 z-[1] min-xl:absolute drop-shadow-[0_3px_90px_rgba(255,255,255,0.73)] mt-[-440px]'
        />
        <Image
          src='/assets/image/icon-piala.png'
          alt='Arrow Down'
          width={110}
          height={110}
          className='max-sm:hidden left-[360px] z-[1] min-xl:absolute drop-shadow-[0_3px_90px_rgba(255,255,255,0.73)] mt-[-920px]'
        />
        <Image
          src='/assets/image/icon-global.png'
          alt='Arrow Down'
          width={87}
          height={87}
          className='max-sm:hidden left-[401px] z-[1] min-xl:absolute drop-shadow-[0_3px_90px_rgba(255,255,255,0.73)] -mt-[200px]'
        />
        <div className='max-sm:hidden left-[364px] z-[222] min-xl:absolute -mt-[400px]'>
          <div className='bg-[#ffffff] px-[28px] py-[15px] border-[1px] border-[E04E4E] rounded-[12px_12px_0px_12px] w-[245px] h-[54px] font-[600] text-[15px] text-secondary-text text-center'>
            Metic Go Internasional?
          </div>
        </div>
        <div className='min-w-[50%]'></div>
      </div>

      <div className='block bg-[#E9E2EA] h-5'></div>
    </div>
  )
}
export default Prestasi
