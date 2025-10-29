"use client";
import Image from "next/image";

import { motion } from "framer-motion";

export default function VisiMisi() {
  return (
    <section id="visi-misi" className="relative bg-[#D65C5C] mt-10 overflow-hidden text-white">
      {/* Wave atas */}
      <motion.div 
        className="-top-6 left-0 absolute w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <svg viewBox="0 0 1440 60" className="w-full h-[60px]">
          <path
            d="M0 20 Q720 50 1440 20 L1440 0 Q720 10 0 0 Z"
            fill="#d1d1d1"
          />
        </svg>
      </motion.div>

      <motion.div 
        className="z-10 relative items-center gap-8 grid md:grid-cols-2 mx-auto px-6 py-16 max-w-7xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {/* Teks */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="mb-4 font-bold text-2xl md:text-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Visi
          </motion.h2>
          <motion.p 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Mencetak lulusan berAKHLAK, ahli, dan berkebhinekaan global.
          </motion.p>

          <motion.h2 
            className="mb-4 font-bold text-2xl md:text-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            viewport={{ once: true }}
          >
            Misi
          </motion.h2>
          <motion.ol 
            className="space-y-2 pl-5 list-decimal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <li>Mengasuh MOKLETER menjadi pribadi yang religius dan tangguh</li>
            <li>
              Mengasah MOKLETER menjadi pribadi pembelajar sepanjang hayat di
              bidang teknologi Informasi dan Komunikasi
            </li>
            <li>
              Membekali MOKLETER dengan kompetensi berstandar internasional
            </li>
          </motion.ol>
        </motion.div>

        {/* Dekorasi kanan */}
        <motion.div 
          className="relative flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Logo besar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/assets/image/tsp.png"
              alt="Logo TS"
              width={250}
              height={250}
              className="opacity-80"
            />
          </motion.div>
          {/* Badge */}
          <motion.span 
            className="bottom-20 left-40 absolute bg-white/30 backdrop-blur px-4 py-2 rounded-lg font-medium text-white text-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            Visi & Misi
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
