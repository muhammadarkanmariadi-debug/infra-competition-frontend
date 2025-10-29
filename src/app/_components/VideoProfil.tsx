'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function VideoProfil () {
  return (
    <>
      <motion.section
        className='relative bg-secondary w-full overflow-hidden'
        id='video-profil'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
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
        <div className='z-10 relative flex xl:flex-row flex-col items-center gap-10 grid-cols-1 md:grid-cols-2 mx-auto px-8 py-16 max-w-[1900px]'>
          {/* Kiri: teks */}
          <motion.div
            className=''
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className='mb-6 font-bold text-white text-3xl md:text-5xl'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Video Profil
            </motion.h2>
            <motion.p
              className='text-white text-base md:text-2xl leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Video profil sekolah yang akan memperkenalkan kepada kalian
              hal-hal yang berkaitan dengan lingkungan sekolah, fasilitas umum
              sekolah, fasilitas pembelajaran, ruang belajar, kegiatan siswa dan
              masih banyak lagi.
              <br />
              <br />
              Biar kalian tidak penasaran apa saja yang ada di dalam{' '}
              <b>SMK Telkom Malang</b>, yuk segera tonton video profilnya!
            </motion.p>
          </motion.div>

          {/* Kanan: iframe dengan efek interaktif */}
          <motion.div
            className='relative'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Shadow dan glow effect */}
            <motion.div
              className='absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-50 blur-lg rounded-xl'
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            <iframe
              className='relative shadow-2xl border-4 border-white rounded-xl w-full md:w-[560px] h-[315px]'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/9xofia597HI?si=Oq-aoiTM-SVx_udM'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
            {/* Overlay interaktif */}
          </motion.div>
        </div>


         <motion.div 
            className='block bg-[#E9E2EA] h-5'
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          ></motion.div>
      </motion.section>
    </>
  )
}
