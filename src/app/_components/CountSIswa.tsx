'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const CountSiswa = () => {
  const [count, setCount] = useState({
    tkj: 0,
    rpl: 0,
    game: 0,
  })

  // data statis (bisa kamu ubah sesuai jumlah murid nyata)
  const targetCount = {
    tkj: 150,
    rpl: 300,
    game: 60,
  }

  // animasi counter
  useEffect(() => {
    const animate = (key: keyof typeof targetCount, end: number) => {
      let start = 0
      const duration = 2000
      const stepTime = Math.max(Math.floor(duration / end), 10)
      const timer = setInterval(() => {
        start += 1
        setCount(prev => ({ ...prev, [key]: start }))
        if (start >= end) clearInterval(timer)
      }, stepTime)
    }

    animate('tkj', targetCount.tkj)
    animate('rpl', targetCount.rpl)
    animate('game', targetCount.game)
  }, [])

  return (
    <div  className='relative bg-secondary mt-31 w-full overflow-hidden' id='track'>
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
        <h1 className='font-bold text-[45px] text-white'>Total Murid</h1>
      </div>

      {/* Counter Section */}
      <div className='z-[10] relative flex max-sm:flex-col justify-center items-center gap-10 mx-auto mt-[10px] pb-[60px] w-full'>
        <div className='flex flex-col justify-center items-center bg-white rounded-2xl w-[200px] h- h-[150px]'>
          <h2 className='drop-shadow-sm font-bold text-[50px] text-primary transition-all duration-500'>
            {count.tkj}+
          </h2>
          <p className='mt-2 font-medium text-primary text-lg'>TKJ</p>
        </div>

        <div className='flex flex-col justify-center items-center bg-white rounded-2xl w-[200px] h- h-[150px]'>
          <h2 className='drop-shadow-sm font-bold text-[50px] text-primary transition-all duration-500'>
            {count.rpl}+
          </h2>
          <p className='mt-2 font-medium text-primary text-lg'>RPL</p>
        </div>

        <div className='flex flex-col justify-center items-center bg-white rounded-2xl w-[200px] h- h-[150px]'>
          <h2 className='drop-shadow-sm font-bold text-[50px] text-primary text-center transition-all duration-500'>
            {count.game}+
          </h2>
          <p className='mt-2 font-medium text-primary text-lg text-center'>
            Pengembangan <br></br>Game
          </p>
        </div>

        {/* Radial Light Effect */}
        <div className='right-0 absolute bg-[radial-gradient(ellipse_39.33%_39.33%_at_49.95%_56.31%,_rgba(255,_255,_255,_0.20)_12%,_rgba(255,_255,_255,_0)_100%)] mt-[-90px] w-150 h-127 rotate-[2.17deg]'></div>
      </div>

      {/* Ornamen Gambar (tetap ada) */}
      <div className='flex max-sm:flex-col items-center mt-[70px] pb-[30px] w-full'>
        <Image
          src='/assets/image/bombi.png'
          alt='bombi'
          width={490}
          height={390}
          className='max-sm:hidden left-0 z-[1] min-xl:absolute drop-shadow-[0_3px_90px_rgba(255,255,255,0.73)] mt-[-300px] xl:w-[400px]'
        />
       
        <div className='min-w-[50%]'></div>
      </div>

      {/* Garis bawah */}
      <div className='block bg-[#E9E2EA] h-5'></div>
    </div>
  )
}

export default CountSiswa
