"use client";
import Image from "next/image";

const alumniData = [
  {
    id: 1,
    name: "Budi Santoso",
    photo: "/assets/image/alumni/alif.png", // Ganti dengan path foto asli
    angkatan: "28",
    currentJob: "Software Engineer at Google",
    company: "Google Indonesia",
    quote: "SMK Telkom Malang memberikan fondasi yang kuat dalam dunia teknologi. Skill yang saya pelajari di sini sangat membantu karir saya.",
  },
  {
    id: 2,
    name: "Siti Rahma",
    photo: "/assets/image/alumni/alif.png",
    angkatan: "31",
    currentJob: "UI/UX Designer at Tokopedia",
    company: "Tokopedia",
    quote: "Pengalaman di Moklet mengajarkan saya untuk selalu berinovasi dan tidak takut mencoba hal baru dalam desain.",
  },
  {
    id: 3,
    name: "Ahmad Fauzi",
    photo: "/assets/image/alumni/alif.png",
    angkatan: "15",
    currentJob: "Full Stack Developer at Gojek",
    company: "Gojek",
    quote: "Berkat guru-guru yang inspiratif dan fasilitas yang memadai, saya bisa berkembang dan mencapai impian saya.",
  },
  {
    id: 4,
    name: "Dewi Kusuma",
    photo: "/assets/image/alumni/alif.png",
    angkatan: "20",
    currentJob: "Data Analyst at Shopee",
    company: "Shopee Indonesia",
    quote: "Moklet bukan hanya mengajarkan skill teknis, tapi juga soft skill yang sangat penting di dunia kerja.",
  },
  {
    id: 5,
    name: "Reza Pratama",
    photo: "/assets/image/alumni/alif.png",
    angkatan: "26",
    currentJob: "Tech Entrepreneur",
    company: "Founder of StartupXYZ",
    quote: "Semangat kewirausahaan yang ditanamkan di Moklet membuat saya berani memulai bisnis sendiri di usia muda.",
  },
  {
    id: 6,
    name: "Linda Wijaya",
    photo: "/assets/image/alumni/alif.png",
    angkatan: "19",
    currentJob: "Network Engineer at Telkom",
    company: "Telkom Indonesia",
    quote: "Lulusan Moklet sangat dihargai di industri telekomunikasi karena kualitas pendidikan yang sangat baik.",
  },
];

export default function AlumniSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Alumni Success Stories
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kisah inspiratif dari alumni SMK Telkom Malang yang telah sukses
            berkarir di berbagai perusahaan ternama
          </p>
        </div>

        {/* Alumni Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumniData.map((alumni) => (
            <div
              key={alumni.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Photo */}
              <div className="relative h-72 bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  {/* Placeholder - ganti dengan Image component kalau foto ready */}
                  <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">
                      {alumni.name.charAt(0)}
                    </span>
                  </div>
                </div>
                {/* Uncomment ini kalau foto sudah siap */}
                <Image
                  src={alumni.photo}
                  alt={alumni.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name */}
                <h3 className="text-xl font-bold text-black mb-1">
                  {alumni.name}
                </h3>

                {/* Angkatan */}
                <p className="text-primary font-semibold mb-3">
                  Angkatan {alumni.angkatan}
                </p>

                {/* Current Job */}
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <p className="text-gray-900 font-medium">{alumni.currentJob}</p>
                  <p className="text-gray-500 text-sm">{alumni.company}</p>
                </div>

                {/* Quote */}
                <div className="relative">
                  <svg
                    className="w-8 h-8 text-primary/20 absolute -top-2 -left-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 text-sm italic leading-relaxed pl-6">
                    {alumni.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
            <a href="#">
          <button className="px-8 py-4 bg-primary text-white rounded-full hover:bg-red-700 transition font-medium shadow-lg hover:shadow-xl">
           Lihat Semua Alumni
          </button>
          </a> 
        </div>
      </div>
    </section>
  );
}