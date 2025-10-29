"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Network, Gamepad2, ArrowLeft } from "lucide-react";
import { useRouter, useParams } from "next/navigation";

const jurusanData = [
  {
    id: 1,
    nama: "Rekayasa Perangkat Lunak (RPL)",
    deskripsi: "Jurusan ini fokus pada pengembangan perangkat lunak, pemrograman, dan teknologi aplikasi. Siswa akan belajar bahasa pemrograman seperti Java, Python, dan framework modern untuk membangun aplikasi web, mobile, dan desktop.",
    prospek: "Bekerja sebagai developer, software engineer, atau startup founder di perusahaan teknologi.",
    ikon: <Code className="w-16 h-16 text-white" />,
    gambar: "https://res.cloudinary.com/dvpb6z2oj/image/upload/v1690000000/rpl-coding.jpg", // Ganti dengan URL gambar RPL
    warna: "from-slate-600 to-slate-800", // Warna elegan: abu-abu gelap
    detailTambahan: [
      "Kurikulum: Pemrograman Dasar, Database, Web Development, Mobile Apps.",
      "Fasilitas: Lab Komputer, Software Development Tools.",
      "Prestasi: Juara Lomba Coding Nasional.",
    ],
  },
  {
    id: 2,
    nama: "Teknik Komputer dan Jaringan (TKJ)",
    deskripsi: "Jurusan ini mengajarkan tentang jaringan komputer, keamanan siber, dan infrastruktur IT. Siswa akan mempelajari instalasi jaringan, troubleshooting, dan teknologi cloud untuk mendukung konektivitas digital.",
    prospek: "Karir sebagai network administrator, IT support, atau cybersecurity specialist di berbagai industri.",
    ikon: <Network className="w-16 h-16 text-white" />,
    gambar: "https://res.cloudinary.com/dvpb6z2oj/image/upload/v1690000000/tkj-network.jpg", // Ganti dengan URL gambar TKJ
    warna: "from-gray-700 to-gray-900", // Warna elegan: abu-abu lebih gelap
    detailTambahan: [
      "Kurikulum: Jaringan Komputer, Cybersecurity, Cloud Computing.",
      "Fasilitas: Lab Jaringan, Server Room.",
      "Prestasi: Sertifikasi Internasional Networking.",
    ],
  },
  {
    id: 3,
    nama: "Pengembangan Game (PG)",
    deskripsi: "Jurusan ini khusus untuk kreator game, meliputi desain game, pemrograman game engine seperti Unity atau Unreal, dan storytelling interaktif. Siswa akan belajar membuat game 2D/3D yang menarik dan inovatif.",
    prospek: "Menjadi game developer, designer, atau animator di industri game dan entertainment.",
    ikon: <Gamepad2 className="w-16 h-16 text-white" />,
    gambar: "https://res.cloudinary.com/dvpb6z2oj/image/upload/v1690000000/pg-gamedev.jpg", // Ganti dengan URL gambar PG
    warna: "from-zinc-600 to-zinc-800", // Warna elegan: zinc gelap
    detailTambahan: [
      "Kurikulum: Game Design, 3D Modeling, Game Programming.",
      "Fasilitas: Lab Game Development, VR Equipment.",
      "Prestasi: Pemenang Game Jam Internasional.",
    ],
  },
];

export default function DetailJurusan() {
  const router = useRouter();
  const { id } = useParams(); // Destructuring id dari useParams
  const jurusanId = parseInt(id as string, 10); // Konversi ke number

  const jurusan = jurusanData.find((j) => j.id === jurusanId);

  if (!jurusan) {
    return (
      <motion.div
        className="flex justify-center items-center bg-secondary min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="font-bold text-white text-4xl">Jurusan tidak ditemukan</h1>
      </motion.div>
    );
  }

  return (
    <motion.section
      className={`bg-gradient-to-br ${jurusan.warna} min-h-screen py-20`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto px-6 max-w-4xl container">
        {/* Back Button */}
        <motion.button
          onClick={() => router.back()}
          className="flex items-center mb-8 text-white hover:text-gray-200 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="mr-2 w-6 h-6" />
          Kembali
        </motion.button>

        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {jurusan.ikon}
          </motion.div>
          <h1 className="mb-4 font-bold text-white text-5xl">{jurusan.nama}</h1>
          <p className="mx-auto max-w-2xl text-white/90 text-xl">{jurusan.deskripsi}</p>
        </motion.div>

        {/* Konten Utama */}
        <div className="items-center gap-10 grid md:grid-cols-2">
          {/* Gambar */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={jurusan.gambar}
                alt={jurusan.nama}
                width={500}
                height={400}
                className="shadow-2xl rounded-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Detail */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.h2
              className="mb-6 font-semibold text-white text-3xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Prospek Karir
            </motion.h2>
            <motion.p
              className="mb-8 text-white/90 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {jurusan.prospek}
            </motion.p>

            <motion.h3
              className="mb-4 font-semibold text-white text-2xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Detail Tambahan
            </motion.h3>
            <ul className="space-y-3">
              {jurusan.detailTambahan.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-3 text-white/90"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 bg-white mt-1 rounded-full w-2 h-2"></div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <motion.button
            className="bg-white hover:bg-gray-100 shadow-lg px-8 py-4 rounded-full font-bold text-secondary text-xl transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Daftar Jurusan Ini
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
