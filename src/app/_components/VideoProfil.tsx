"use client"; 
import Image from 'next/image'
import { motion } from "framer-motion";

export default function VideoProfil () {
  return (
    <>
      <motion.section 
        className='relative bg-gradient-to-br from-[#FFF5F5] via-white to-[#F0F8FF] w-full overflow-hidden' 
        id='video-profil'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Elemen dekoratif background */}
        <motion.div 
          className='top-0 left-0 absolute opacity-10 w-full h-full'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className='top-10 left-10 absolute bg-primary blur-xl rounded-full w-32 h-32'></div>
          <div className='right-10 bottom-10 absolute bg-secondary blur-xl rounded-full w-48 h-48'></div>
        </motion.div>

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
              className='mb-6 font-bold text-black text-3xl md:text-4xl'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Video Profil
            </motion.h2>
            <motion.p 
              className='text-black text-base md:text-lg leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Video profil sekolah yang akan memperkenalkan kepada kalian hal-hal
              yang berkaitan dengan lingkungan sekolah, fasilitas umum sekolah,
              fasilitas pembelajaran, ruang belajar, kegiatan siswa dan masih
              banyak lagi.
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
        
        {/* Elemen dekoratif bawah */}
        <motion.div 
          className='z-10 relative flex justify-center mt-10'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <div className='bg-gradient-to-r from-primary to-secondary rounded-full w-32 h-1'></div>
        </motion.div>
      </motion.section>
    </>
  )
}
