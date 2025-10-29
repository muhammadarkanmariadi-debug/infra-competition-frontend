"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <>
      <motion.div 
        className='mt-28'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className='text-center'>
          <motion.h1 
            className='font-[700] text-[30px] text-primary 2xl:text-[60px] xl:text-[50px]'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The Real Informatics School!
          </motion.h1>
          <motion.h3 
            className='mt-[2px] px-1 xl:px-0 font-[600] xl:font-[700] text-[22px] text-primary 2xl:text-[40px]'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Pelopor SMK Bidang Teknologi dan Informatika di Indonesia
          </motion.h3>
          <motion.p 
            className='mt-[20px] px-4 xl:px-0 font-[400] text-black text-sm 2xl:text-xl'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <b className='text-primary'>Moklet Portal</b> adalah pusat informasi
            digital <b>SMK Telkom Malang</b> yang menyajikan berita, agenda,
            pengumuman, dan <br /> prestasi sekolah secara cepat dan mudah
            diakses oleh siswa, guru, orang tua, maupun masyarakat.
          </motion.p>
        </div>
        <motion.div 
          className='drop-shadow-[0_4px_25px_rgba(225,95,96,0.35)] text-center'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src='/assets/image/bombi.png'
              alt='Arrow Down'
              width={400}
              height={0}
              className='z-[-1] relative mx-auto mt-[38px] w-[300px] xl:w-[400px] hover:scale-105 transition-transform duration-300'
            />
          </motion.div>
          <motion.a
            href="/login"
            className="flex justify-center items-center bg-primary hover:bg-opacity-90 hover:shadow-lg mx-auto py-3 xl:py-5 rounded-full w-[400px] max-sm:w-[350px] xl:w- font-bold text-white text-2xl xl:text-4xl hover:scale-105 transition-all duration-300 [450px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ikuti Kami!
          </motion.a>
        </motion.div>
        <div className='sm:hidden xl:block hiasan'>
          <div className='2xl:top-[-700px] 2xl:left-[100px] 2xl:relative kiri'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src='/assets/image/server-rack.png'
                alt='Server Rack'
                width={72}
                height={72}
                className='max-md:hidden top-[150px] left-[153px] min-xl:absolute rotate-[-5deg]'
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: -127 }}
              whileInView={{ opacity: 1, rotate: -127 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src='/assets/image/triangle-sm.png'
                alt='small triangle'
                width={32}
                height={28}
                className='max-md:hidden top-[236px] left-[263px] min-xl:absolute rotate-[-127deg]'
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src='/assets/image/Polygon21.png'
                alt='segitiga kiri'
                width={343.5}
                height={307.5}
                className='max-md:hidden top-[359px] left-[100px] min-xl:absolute'
              />
            </motion.div>
          </div>

          <div className='2xl:top-[-700px] 2xl:right-[100px] 2xl:relative kanan'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src='/assets/image/Polygon20.png'
                alt='triangle kanan'
                width={318}
                height={283.5}
                className='max-md:hidden top-[377px] right-[104px] min-xl:absolute'
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src='/assets/image/desktop.png'
                alt='desktop'
                width={65}
                height={65}
                className='max-md:hidden top-[400px] right-[350px] min-xl:absolute'
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: -5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src='/assets/image/Group1395.png'
                alt='Server Rack'
                width={32}
                height={28}
                className='max-md:hidden top-[183px] right-[295px] min-xl:absolute rotate-[-5deg]'
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src='/assets/image/Group1395.png'
                alt='triangle besar'
                width={90}
                height={81}
                className='max-md:hidden top-[264px] right-[108px] min-xl:absolute'
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src='/assets/image/panah-kiri.png'
              alt='panah kiri'
              width={161}
              height={32}
              className='max-md:hidden top-[640px] 2xl:top-[900px] left-[320px] 2xl:left-[500px] min-xl:absolute'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src='/assets/image/Vector39.png'
              alt='panah kanan'
              width={161}
              height={32}
              className='max-md:hidden top-[485px] 2xl:top-[650px] right-[375px] 2xl:right-[600px] min-xl:absolute'
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Segitiga dekorasi atas */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <Image
          src="/assets/image/Group14556.png"
          alt="triangle top left"
          width={80}
          height={80}
          className="hidden md:block top-16 md:top-20 left-10 md:left-24 absolute"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <Image
          src="/assets/image/Group1395.png"
          alt="triangle top right"
          width={80}
          height={80}
          className="hidden md:block top-16 md:top-20 right-10 md:right-24 absolute"
        />
      </motion.div>
    </>
  );
}
