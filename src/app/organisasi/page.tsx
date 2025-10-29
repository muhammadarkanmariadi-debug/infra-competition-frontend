"use client";
import Image from "next/image";
import Link from "next/link";

const organisations = [
  {
    id: 1,
    name: "OSIS",
    description: "MPK Moklet merupakan singkatan dari Majelis...",
    logo: "/assets/image/osis.png",
    link: "/organisasi/mpk",
  },
  {
    id: 2,
    name: "MPK",
    description: "OSIS SMK Telkom Malang merupakan sebuah...",
    logo: "/assets/image/mpk.png",
    link: "/organisasi/osis",
  },
];

const subOrganisations = [
  {
    id: 1,
    name: "METIC",
    description: "METIC adalah komunitas pelajar SMK Telkom Malang yang terbuka, inovatif, dan santai, mengembangkan teknologi, kewirausahaan, serta kreativitas melalui kolaborasi, workshop, dan kompetisi berdampak sosial dan bisnis.",
    logo: "/assets/image/suborgan/metic.png",
    link: "/organisasi/metic",
    logoScale: 0.5,
  },
  {
    id: 2,
    name: "MEMO",
    description: "Perpustakaan SMK Telkom Malang, yang dikenal...",
    logo: "/assets/image/suborgan/memo.png",
    link: "/organisasi/pustel",
    logoScale: 0.8,
  },
  {
    id: 3,
    name: "MAC",
    description: "Paskatema (Paskibra SMK Telkom Malang) adala...",
    logo: "/assets/image/suborgan/mac.png",
    link: "/organisasi/paskatema",
    logoScale: 1,
  },
  {
    id: 4,
    name: "COMET",
    description: "COMET (Community of Moklet English Talent) is a...",
    logo: "/assets/image/suborgan/comet.png",
    link: "/organisasi/comet",
    logoScale: 1,
  },
  {
    id: 5,
    name: "PUSTEL",
    description: "MEMO adalah singkatan dari...",
    logo: "/assets/image/suborgan/pustel.png",
    link: "/organisasi/memo",
    logoScale: 1,
  },
  {
    id: 6,
    name: "PMR",
    description: "MEMO adalah singkatan dari...",
    logo: "/assets/image/suborgan/pmr.png",
    link: "/organisasi/osis",
    logoScale: 1,
  },
  {
    id: 7,
    name: "PALWAGA",
    description: "MEMO adalah singkatan dari...",
    logo: "/assets/image/suborgan/palwaga.png",
    link: "/organisasi/osis",
    logoScale: 0.6,
  },
  {
    id: 8,
    name: "BDI",
    description: "MEMO adalah singkatan dari...",
    logo: "/assets/image/suborgan/bdi.png",
    link: "/organisasi/osis",
    logoScale: 1,
  },
  {
    id: 9,
    name: "PASKATEMA",
    description: "MEMO adalah singkatan dari...",
    logo: "/assets/image/suborgan/paskatema.png",
    link: "/organisasi/osis",
    logoScale: 0.9,
  },
];

export default function OrganisasiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Description */}
          <div className="space-y-6">
            {/* Organisasi Section */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h1 className="text-4xl font-bold text-black">Organisasi</h1>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Struktur organisasi siswa, berbagai kegiatan yang dijalankan,
                serta peran penting Organisasi dalam membentuk kepemimpinan siswa
                di SMK Telkom Malang.
              </p>
            </div>

            {/* Spacer untuk align dengan card organisasi */}
            <div className="h-[200px]"></div>

            {/* Sub-organisasi Section */}
            <div>
              <div className="flex items-center gap-4 mb-6 mt-[-50px]">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-black">Sub-organisasi</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Sub-Organisasi adalah bagian penting dari organisasi siswa di SMK
                Telkom Malang, yang menampilkan beragam kegiatan dan inovasi yang
                dijalankan di bawah pengawasan OSIS dan MPK.
              </p>
            </div>
          </div>

          {/* Right Side - Cards */}
          <div className="space-y-6">
            {/* Organisasi Cards */}
            {organisations.map((org) => (
              <Link
                key={org.id}
                href={org.link}
                className="group block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src={org.logo}
                        alt={`Logo ${org.name}`}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-black mb-1 group-hover:text-primary transition-colors">
                        {org.name}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-1">
                        {org.description}
                      </p>
                    </div>
                  </div>
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}

            {/* Divider */}
            <div className="py-4"></div>

        {/* Sub-organisasi Cards */}
{subOrganisations.map((suborg) => (
  <Link
    key={suborg.id}
    href={suborg.link}
    className="group block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        {/* FRAME BULAT — tetap ukuran sama */}
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
          <Image
            src={suborg.logo}
            alt={`Logo ${suborg.name}`}
            width={64}
            height={64}
            className="object-contain transition-transform"
            style={{
              transform: `scale(${suborg.logoScale || 1})`, // 🔥 scale hanya untuk gambar
              transformOrigin: "center",
            }}
          />
        </div>

        {/* TEKS */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-black mb-1 group-hover:text-primary transition-colors">
            {suborg.name}
          </h3>
          <p className="text-gray-500 text-sm line-clamp-1">
            {suborg.description}
          </p>
        </div>
      </div>

      {/* PANAH */}
      <svg
        className="w-6 h-6 text-primary flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  </Link>
))}


          </div>
        </div>
      </div>
    </div>
  );
}