"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyUs() {
  return (
    <motion.div 
      className="bg-white mt-16 pb-10 w-full" 
      id="divisi"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Judul */}
      <div className="max-sm:px-3 text-center">
        <motion.h4 
          className="font-[500] text-[15px] text-gray-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          why us?
        </motion.h4>
        <motion.h2 
          className="mt-2 font-[700] text-[#333333] text-[32px] sm:text-[40px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Mengapa Harus Moklet ?
        </motion.h2>
        <motion.p 
          className="mt-3 font-[400] text-[15px] text-black leading-[21px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Ini alasan mengapa anda harus memilih sekolah kami?
        </motion.p>
      </div>

      {/* Grid Card */}
      <motion.div 
        className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 px-6 lg:px-24 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {/* Item 1 */}
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex justify-center items-center bg-primary mb-5 rounded-full w-24 h-24">
            <Image
              src="/assets/image/whyus/1.png" 
              alt="Fasilitas Lengkap"
              width={40}
              height={40}
            />
          </div>
          <h3 className="font-bold text-[#333333] text-lg">
            Fasilitas Lengkap
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            Penunjang belajar dengan kualitas premium.
          </p>
        </motion.div>

        {/* Item 2 */}
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex justify-center items-center bg-primary mb-5 rounded-full w-24 h-24">
            <Image
              src="/assets/image/whyus/2.png" 
              alt="Lingkungan Nyaman"
              width={40}
              height={40}
            />
          </div>
          <h3 className="font-bold text-[#333333] text-lg">
            Lingkungan Nyaman
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            Berada di lingkungan yang asri, aman, dan kondusif.
          </p>
        </motion.div>

        {/* Item 3 */}
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex justify-center items-center bg-primary mb-5 rounded-full w-24 h-24">
            <Image
              src="/assets/image/whyus/3.png" 
              alt="Pengajar Kompeten"
              width={40}
              height={40}
            />
          </div>
          <h3 className="font-bold text-[#333333] text-lg">
            Pengajar Kompeten
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            Guru yang up-to-date dengan perkembangan industri.
          </p>
        </motion.div>

        {/* Item 4 */}
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex justify-center items-center bg-primary mb-5 rounded-full w-24 h-24">
            <Image
              src="/assets/image/whyus/4.png" 
              alt="Kerjasama Luas"
              width={40}
              height={40}
            />
          </div>
          <h3 className="font-bold text-[#333333] text-lg">
            Kerjasama Luas
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            Memperbesar kesempatan bekerja sebelum lulus.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
