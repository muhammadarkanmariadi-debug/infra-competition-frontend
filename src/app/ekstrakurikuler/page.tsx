"use client";
import Image from "next/image";
import Link from "next/link";


const organisations = [
  {
    id: 1,
    name: "Pramuka",
    description: "Gerakan kepanduan yang membentuk karakter...",
    logo: "/assets/image/pramuka.png",
    link: "/organisasi/pramuka",
  },
  {
    id: 2,
    name: "Bola Voli",
    description: "Ekstrakurikuler olahraga bola voli...",
    logo: "/assets/image/bola-voli.png",
    link: "/organisasi/bola-voli",
  },
  {
    id: 3,
    name: "Seni Vokal",
    description: "Pengembangan bakat menyanyi dan seni suara...",
    logo: "/assets/image/seni-vokal.png",
    link: "/organisasi/seni-vokal",
  },
  {
    id: 4,
    name: "Seni Tari",
    description: "Seni tari tradisional dan modern...",
    logo: "/assets/image/seni-tari.png",
    link: "/organisasi/seni-tari",
  },
  {
    id: 5,
    name: "Teater",
    description: "Seni peran dan drama...",
    logo: "/assets/image/teater.png",
    link: "/organisasi/teater",
  },
  {
    id: 6,
    name: "Karawitan",
    description: "Seni musik gamelan Jawa...",
    logo: "/assets/image/karawitan.png",
    link: "/organisasi/karawitan",
  },
  {
    id: 7,
    name: "PMR",
    description: "Palang Merah Remaja...",
    logo: "/assets/image/pmr.png",
    link: "/organisasi/pmr",
  },
  {
    id: 8,
    name: "Fotografi",
    description: "Palang Merah Remaja...",
    logo: "/assets/image/pmr.png",
    link: "/organisasi/pmr",
  },
  {
    id: 9,
    name: "Paskibra",
    description: "Palang Merah Remaja...",
    logo: "/assets/image/pmr.png",
    link: "/organisasi/pmr",
  },
  {
    id: 10,
    name: "Pencak Silat",
    description: "Palang Merah Remaja...",
    logo: "/assets/image/pmr.png",
    link: "/organisasi/pmr",
  },
  {
    id: 11,
    name: "Bola Basket",
    description: "Palang Merah Remaja...",
    logo: "/assets/image/pmr.png",
    link: "/organisasi/pmr",
  },
  {
    id: 12,
    name: "Futsal",
    description: "Palang Merah Remaja...",
    logo: "/assets/image/pmr.png",
    link: "/organisasi/pmr",
  },
  {
    id: 13,
    name: "PMR",
    description: "Palang Merah Remaja...",
    logo: "/assets/image/pmr.png",
    link: "/organisasi/pmr",
  },
  {
    id: 14,
    name: "English Conversation & Debate",
    description: "Palang Merah Remaja...",
    logo: "/assets/image/pmr.png",
    link: "/organisasi/pmr",
  },
  {
    id: 15,
    name: "Robotik",
    description: "Palang Merah Remaja...",
    logo: "/assets/image/pmr.png",
    link: "/organisasi/pmr",
  },
  {
    id: 16,
    name: "Graphic Design",
    description: "Palang Merah Remaja...",
    logo: "/assets/image/pmr.png",
    link: "/organisasi/pmr",
  },
  {
    id: 17,
    name: "Cloud Computing",
    description: "Palang Merah Remaja...",
    logo: "/assets/image/pmr.png",
    link: "/organisasi/pmr",
  },
  {
    id: 18,
    name: "IT Software",
    description: "Palang Merah Remaja...",
    logo: "/assets/image/pmr.png",
    link: "/organisasi/pmr",
  },
  {
    id: 19,
    name: "Artificial Intelligence",
    description: "Palang Merah Remaja...",
    logo: "/assets/image/pmr.png",
    link: "/organisasi/pmr",
  },
  {
    id: 20,
    name: "Cyber Security",
    description: "Palang Merah Remaja...",
    logo: "/assets/image/pmr.png",
    link: "/organisasi/pmr",
  },
  {
    id: 21,
    name: "Drone Pilot",
    description: "Palang Merah Remaja...",
    logo: "/assets/image/pmr.png",
    link: "/organisasi/pmr",
  },
  {
    id: 22,
    name: "Internet Network Cabling",
    description: "Palang Merah Remaja...",
    logo: "/assets/image/pmr.png",
    link: "/organisasi/pmr",
  },
  {
    id: 23,
    name: "IT Network System Administration",
    description: "Palang Merah Remaja...",
    logo: "/assets/image/pmr.png",
    link: "/organisasi/pmr",
  },
  {
    id: 24,
    name: "Digital Marketing",
    description: "Palang Merah Remaja...",
    logo: "/assets/image/pmr.png",
    link: "/organisasi/pmr",
  },
  {
    id: 25,
    name: "Web Design",
    description: "Palang Merah Remaja...",
    logo: "/assets/image/pmr.png",
    link: "/organisasi/pmr",
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
                <h1 className="text-4xl font-bold text-black">Ekstrakurikuler</h1>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Struktur organisasi siswa, berbagai kegiatan yang dijalankan,
                serta peran penting Organisasi dalam membentuk kepemimpinan siswa
                di SMK Telkom Malang.
              </p>
            </div>

            {/* Spacer untuk align dengan card organisasi */}
            <div className="h-[200px]"></div>

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


          </div>
        </div>
      </div>
    </div>
  );
}