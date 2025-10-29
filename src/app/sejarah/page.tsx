"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function sejarah() {
  return (
    <motion.section
      className="bg-gray-50 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto px-6 max-w-4xl container">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="mb-4 font-bold text-gray-900 text-5xl">
            Sejarah SMK Telkom Malang
          </h1>
          <p className="text-gray-600 text-xl">
            Perjalanan panjang pendidikan vokasi di bidang teknologi informasi dan komunikasi.
          </p>
        </motion.div>

        {/* Konten Utama */}
        <div className="items-center gap-10 grid md:grid-cols-2">
          {/* Teks Deskripsi */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h2
              className="mb-6 font-semibold text-gray-800 text-3xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Pendirian dan Awal Mula
            </motion.h2>
            <motion.p
              className="mb-4 text-gray-700 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              SMK Telkom Malang didirikan pada tahun 1992 sebagai bagian dari Yayasan Pendidikan Telkom (YPT). Sekolah ini awalnya bernama Sekolah Menengah Kejuruan Telekomunikasi Malang, dengan fokus utama pada pendidikan vokasi di bidang teknologi informasi dan komunikasi (TIK).
            </motion.p>
            <motion.p
              className="mb-4 text-gray-700 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Sejak awal, SMK Telkom Malang berkomitmen untuk menghasilkan lulusan yang siap kerja dan kompeten di industri telekomunikasi, informatika, dan teknologi terkini. Dengan dukungan dari PT Telkom Indonesia, sekolah ini terus berkembang menjadi salah satu sekolah vokasi terkemuka di Indonesia.
            </motion.p>
            <motion.p
              className="mb-4 text-gray-700 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Hingga saat ini, SMK Telkom Malang telah melahirkan ribuan alumni yang berkontribusi di berbagai perusahaan teknologi nasional dan internasional, serta menjadi pionir dalam pendidikan berbasis industri.
            </motion.p>
          </motion.div>

          {/* Gambar Ilustrasi */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="https://res.cloudinary.com/dvpb6z2oj/image/upload/lanang_loro_if2t7u" // Ganti dengan URL gambar sebenarnya jika ada
                alt="Gedung SMK Telkom Malang"
                width={600}
                height={500}
                className="drop-shadow-lg rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline atau Fakta Tambahan */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h3 className="mb-8 font-semibold text-gray-800 text-3xl text-center">
            Tonggak Penting
          </h3>
          <div className="gap-6 grid md:grid-cols-3">
            <motion.div
              className="bg-white shadow-md p-6 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="mb-2 font-bold text-primary text-xl">1992</h4>
              <p className="text-gray-700">Pendirian SMK Telkom Malang sebagai sekolah vokasi pertama di bidang TIK.</p>
            </motion.div>
            <motion.div
              className="bg-white shadow-md p-6 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="mb-2 font-bold text-primary text-xl">2000-an</h4>
              <p className="text-gray-700">Pengembangan kurikulum berbasis industri dan kemitraan dengan perusahaan teknologi.</p>
            </motion.div>
            <motion.div
              className="bg-white shadow-md p-6 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="mb-2 font-bold text-primary text-xl">Sekarang</h4>
              <p className="text-gray-700">Menjadi pusat pendidikan vokasi unggulan dengan ribuan alumni sukses.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
