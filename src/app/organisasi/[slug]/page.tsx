"use client";
import Image from "next/image";

// Data bisa diambil dari props atau API
const organisasiData = {
  name: "METIC",
  fullName: "Moklet Education of Technology Informatic Club",
  logo: "/path/to/metic-logo.png", // ganti dengan path logo asli
  description:
    "METIC adalah komunitas pelajar SMK Telkom Malang yang terbuka, inovatif, dan santai, mengembangkan teknologi, kewirausahaan, serta kreativitas melalui kolaborasi, workshop, dan kompetisi berdampak sosial dan bisnis.",
  visi: "Menciptakan generasi pemimpin muda yang inovatif, kolaboratif, dan berorientasi solusi di bidang teknologi untuk masa depan digital yang inklusif dan berkelanjutan.",
  misi: [
    "Mengembangkan solusi teknologi yang inovatif, aman, dan berdaya saing global.",
    "Mendorong kolaborasi antara talenta muda, industri, dan akademisi di bidang teknologi.",
    "Menyediakan wadah bagi pengembangan riset, kreativitas, dan kewirausahaan berbasis teknologi.",
    "Menjunjung tinggi etika, profesionalisme, dan keberlanjutan dalam setiap pengembangan teknologi.",
  ],
  about: {
    title: "Tentang METIC",
    content: `METIC, singkatan dari Moklet Education of Technology and Informatics Club, menjadi ruang pengembangan bagi pelajar SMK Telkom Malang untuk mengeksplorasi, menciptakan, dan memberikan dampak nyata melalui inovasi teknologi. Dengan semangat Creating Youth Innovators, METIC membentuk generasi pemimpin muda yang inovatif, kolaboratif, dan berorientasi solusi di era digital.

Organisasi ini mengedepankan sikap open minded dan mendukung kebaruan serta eksperimen teknologi. Melalui workshop, hackathon, diskusi, dan kolaborasi lintas disiplin, METIC menciptakan ekosistem inovasi yang inklusif dan berkelanjutan.`,
  },
};

export default function OrganisasiDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Logo, Title, Description */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
<div className="w-32 h-32 mb-8">
  <Image
    src="/assets/image/suborgan/metic.png"
    alt={`${organisasiData.name} Logo`}
    width={128}
    height={128}
    className="w-full h-full object-contain"
  />
</div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            {organisasiData.fullName}
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed">
            {organisasiData.description}
          </p>
        </div>
      </section>

      {/* Visi Misi Section - Red Background */}
      <section className=" bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold">Visi</h2>
              </div>
              <p className="text-white/90 leading-relaxed text-lg">
                {organisasiData.visi}
              </p>
            </div>

            {/* Misi */}
            <div className="text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold">Misi</h2>
              </div>
              <ol className="space-y-3">
                {organisasiData.misi.map((item, index) => (
                  <li key={index} className="text-white/90 leading-relaxed">
                    {index + 1}. {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8">
            {organisasiData.about.title}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            {organisasiData.about.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Divisi/Program Section (Optional - add if needed) */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-50">
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-12 text-center">
          Divisi & Program
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contoh card divisi */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition"
            >
            
              <h3 className="text-xl font-semibold text-black mb-2">
                Divisi {item}
              </h3>
              <p className="text-gray-600 text-sm">
                Deskripsi singkat tentang divisi atau program ini...
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}