"use client";
import Link from "next/link";
import Image from "next/image";

interface Organisation {
  id: number;
  slug: string;
  name: string;
  description: string;
  logo: string;
  category: string;
}

const organisations: Organisation[] = [
  {
    id: 1,
    slug: "pramuka",
    name: "Pramuka",
    description: "Gerakan kepanduan yang membentuk karakter dan jiwa kepemimpinan",
    logo: "/assets/image/pramuka.png",
    category: "Kepramukaan",
  },
  {
    id: 2,
    slug: "bola-voli",
    name: "Bola Voli",
    description: "Olahraga bola voli untuk melatih kerjasama tim dan fisik.",
    logo: "/assets/image/bola-voli.png",
    category: "Olahraga",
  },
  {
    id: 3,
    slug: "seni-tari",
    name: "Seni Tari",
    description: "Ekstrakurikuler seni tari untuk mengembangkan bakat menari dan seni gerak.",
    logo: "/assets/image/seni-tari.png",
    category: "Seni",
  },
  {
    id: 4,
    slug: "seni-vokal",
    name: "Seni Vokal",
    description: "Pengembangan bakat menyanyi dan seni suara.",
    logo: "/assets/image/seni-vokal.png",
    category: "Seni",
  },
  {
    id: 5,
    slug: "teater",
    name: "Teater",
    description: "Ekstrakurikuler teater untuk mengasah kemampuan akting dan drama.",
    logo: "/assets/image/teater.png",
    category: "Seni",
  },
  {
    id: 6,
    slug: "karawitan",
    name: "Karawitan",
    description: "Belajar seni musik tradisional Jawa dan gamelan.",
    logo: "/assets/image/karawitan.png",
    category: "Seni",
  },
  {
    id: 7,
    slug: "pmr",
    name: "PMR",
    description: "Palang Merah Remaja, pelatihan pertolongan pertama dan kepedulian sosial.",
    logo: "/assets/image/pmr.png",
    category: "Kesehatan",
  },
  {
    id: 8,
    slug: "fotografi",
    name: "Fotografi",
    description: "Belajar teknik fotografi dan pengambilan gambar.",
    logo: "/assets/image/fotografi.png",
    category: "Media",
  },
  {
    id: 9,
    slug: "paskibra",
    name: "Paskibra",
    description: "Pasukan Pengibar Bendera, melatih disiplin dan kepemimpinan.",
    logo: "/assets/image/paskibra.png",
    category: "Kepemimpinan",
  },
  {
    id: 10,
    slug: "pencak-silat",
    name: "Pencak Silat",
    description: "Belajar seni bela diri pencak silat dan ketahanan fisik.",
    logo: "/assets/image/pencak-silat.png",
    category: "Olahraga",
  },
  {
    id: 11,
    slug: "bola-basket",
    name: "Bola Basket",
    description: "Olahraga bola basket untuk melatih kerjasama dan fisik.",
    logo: "/assets/image/bola-basket.png",
    category: "Olahraga",
  },
  {
    id: 12,
    slug: "futsal",
    name: "Futsal",
    description: "Olahraga futsal untuk meningkatkan skill dan teamwork.",
    logo: "/assets/image/futsal.png",
    category: "Olahraga",
  },
  {
    id: 13,
    slug: "english-conversation",
    name: "English Conversation",
    description: "Belajar dan praktik percakapan bahasa Inggris.",
    logo: "/assets/image/english-conversation.png",
    category: "Bahasa",
  },
  {
    id: 14,
    slug: "robotik",
    name: "Robotik",
    description: "Belajar merakit dan memprogram robot.",
    logo: "/assets/image/robotik.png",
    category: "Teknologi",
  },
  {
    id: 15,
    slug: "graphic-design",
    name: "Graphic Design",
    description: "Belajar desain grafis dan kreativitas visual.",
    logo: "/assets/image/graphic-design.png",
    category: "Teknologi",
  },
  {
    id: 16,
    slug: "cloud-computing",
    name: "Cloud Computing",
    description: "Belajar teknologi komputasi awan dan server.",
    logo: "/assets/image/cloud-computing.png",
    category: "Teknologi",
  },
  {
    id: 17,
    slug: "it-software",
    name: "IT Software",
    description: "Belajar pengembangan perangkat lunak dan aplikasi.",
    logo: "/assets/image/it-software.png",
    category: "Teknologi",
  },
  {
    id: 18,
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    description: "Belajar dasar-dasar kecerdasan buatan dan machine learning.",
    logo: "/assets/image/artificial-intelligence.png",
    category: "Teknologi",
  },
  {
    id: 19,
    slug: "cyber-security",
    name: "Cyber Security",
    description: "Belajar keamanan siber dan perlindungan data.",
    logo: "/assets/image/cyber-security.png",
    category: "Teknologi",
  },
  {
    id: 20,
    slug: "drone-pilot",
    name: "Drone Pilot",
    description: "Belajar mengoperasikan dan mengendalikan drone.",
    logo: "/assets/image/drone-pilot.png",
    category: "Teknologi",
  },
  {
    id: 21,
    slug: "internet-network-cabling",
    name: "Internet Network Cabling",
    description: "Belajar instalasi dan manajemen kabel jaringan internet.",
    logo: "/assets/image/internet-network-cabling.png",
    category: "Teknologi",
  },
  {
    id: 22,
    slug: "it-network",
    name: "IT Network",
    description: "Belajar membangun dan mengelola jaringan komputer.",
    logo: "/assets/image/it-network.png",
    category: "Teknologi",
  },
  {
    id: 23,
    slug: "digital-marketing",
    name: "Digital Marketing",
    description: "Belajar strategi pemasaran digital dan media sosial.",
    logo: "/assets/image/digital-marketing.png",
    category: "Teknologi",
  },
  {
    id: 24,
    slug: "web-design",
    name: "Web Design",
    description: "Belajar desain dan pengembangan website.",
    logo: "/assets/image/web-design.png",
    category: "Teknologi",
  },
];

export default function EkstrakurikulerPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-red-800">Ekstrakurikuler SMK Telkom Malang</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Temukan berbagai ekstrakurikuler yang bisa kamu ikuti untuk mengembangkan bakat, minat, dan karakter di SMK Telkom Malang.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {organisations.map((org) => (
            <div key={org.id} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center shadow hover:shadow-lg transition">
              <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-full bg-red-100">
                <Image
                  src={org.logo}
                  alt={`Logo ${org.name}`}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <span className="px-4 py-1.5 bg-red-600 text-white text-xs font-medium rounded-full mb-2">
                {org.category}
              </span>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{org.name}</h2>
              <p className="text-gray-600 text-sm mb-6">{org.description}</p>
              <Link
                href={`/ekstrakurikuler/${org.slug}`}
                className="px-6 py-2 bg-red-800 text-white rounded-full hover:bg-red-700 transition text-sm font-semibold"
              >
                Lihat Detail
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}