"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Organisation {
  id: number;
  slug: string;
  name: string;
  description: string;
  logo: string;
  category: string;
  fullDescription: string;
  jadwal: string;
  pembina: string;
  kontak: string;
}

const organisations: Organisation[] = [
  {
    id: 1,
    slug: "pramuka",
    name: "Pramuka",
    description: "Gerakan kepanduan yang membentuk karakter dan jiwa kepemimpinan",
    logo: "/assets/image/pramuka.png",
    category: "Kepramukaan",
    fullDescription: `
      <p>Pramuka SMK Telkom Malang merupakan wadah pembinaan karakter dan kepemimpinan siswa melalui kegiatan kepramukaan yang terstruktur dan menyenangkan.</p>
      <p>Kegiatan rutin meliputi latihan mingguan, perkemahan, jambore, dan berbagai kegiatan outdoor yang mengasah mental dan fisik anggota.</p>
      <h3>Kegiatan Utama:</h3>
      <ul>
        <li>Latihan PBB dan Pioneering</li>
        <li>Kemah dan Hiking</li>
        <li>Bakti Sosial</li>
        <li>Lomba Kepramukaan</li>
      </ul>
    `,
    jadwal: "Setiap Sabtu, 14:00 - 16:00 WIB",
    pembina: "Bapak Ahmad Sutrisno, S.Pd",
    kontak: "pramuka@moklet.sch.id",
  },
  {
    id: 2,
    slug: "bola-voli",
    name: "Bola Voli",
    description: "Ekstrakurikuler olahraga bola voli untuk melatih kerjasama tim",
    logo: "/assets/image/bola-voli.png",
    category: "Olahraga",
    fullDescription: `
      <p>Ekstrakurikuler Bola Voli membentuk siswa menjadi atlet yang tangguh dengan semangat sportivitas tinggi.</p>
      <p>Program latihan terstruktur dengan pelatih berpengalaman membantu siswa mengembangkan teknik dan strategi permainan.</p>
    `,
    jadwal: "Senin & Kamis, 15:30 - 17:30 WIB",
    pembina: "Ibu Siti Rahayu, S.Pd",
    kontak: "voliclub@moklet.sch.id",
  },
  {
    id: 3,
    slug: "seni-vokal",
    name: "Seni Vokal",
    description: "Pengembangan bakat menyanyi dan seni suara",
    logo: "/assets/image/seni-vokal.png",
    category: "Seni",
    fullDescription: `
      <p>Ekstrakurikuler Seni Vokal mengembangkan kemampuan menyanyi dan seni suara siswa dengan bimbingan profesional.</p>
      <p>Berbagai genre musik dipelajari, dari pop, jazz, hingga lagu daerah.</p>
    `,
    jadwal: "Rabu, 15:00 - 17:00 WIB",
    pembina: "Ibu Dewi Lestari, S.Sn",
    kontak: "senivokal@moklet.sch.id",
  },
];

export default function OrganisasiDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [org, setOrg] = useState<Organisation | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const slug = params?.slug;
      if (typeof slug !== 'string') {
        setLoading(false);
        return;
      }

      const foundOrg = organisations.find((o) => o.slug === slug);
      setOrg(foundOrg || null);
      setLoading(false);
    } catch (error) {
      console.error('Error loading organisation:', error);
      setLoading(false);
    }
  }, [params?.slug]);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8" />
          <div className="bg-gray-200 rounded-2xl h-96 mb-8" />
          <div className="space-y-4">
            <div className="h-6 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
          </div>
        </div>
      </div>
    );
  }

  if (!org) {
    return (
      <div className="max-w-5xl mx-auto py-20 px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <svg
            className="w-24 h-24 text-gray-300 mb-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Ekstrakurikuler Tidak Ditemukan
          </h2>
          <p className="text-gray-500 mb-8 max-w-md">
            Maaf, ekstrakurikuler yang Anda cari tidak ditemukan. Silakan kembali
            ke halaman ekstrakurikuler.
          </p>
          <button
            onClick={() => router.push("/ekstrakurikuler")}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Kembali ke Ekstrakurikuler
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-5xl mx-auto py-12 px-4">
      {/* Back button */}
      <button
        onClick={() => router.push("/ekstrakurikuler")}
        className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition mb-8"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Kembali ke Ekstrakurikuler
      </button>

      {/* Header Card */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 mb-8">
        <div className="flex items-start gap-6">
          {/* Logo */}
          <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md overflow-hidden">
            <Image
              src={org.logo}
              alt={`Logo ${org.name}`}
              width={96}
              height={96}
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-4 py-1.5 bg-red-600 text-white text-sm font-medium rounded-full">
                {org.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">{org.name}</h1>
            <p className="text-lg text-gray-700">{org.description}</p>
          </div>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Jadwal */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <svg
              className="w-6 h-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <h3 className="font-semibold text-gray-900">Jadwal</h3>
          </div>
          <p className="text-gray-600 text-sm">{org.jadwal}</p>
        </div>

        {/* Pembina */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <svg
              className="w-6 h-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <h3 className="font-semibold text-gray-900">Pembina</h3>
          </div>
          <p className="text-gray-600 text-sm">{org.pembina}</p>
        </div>

        {/* Kontak */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <svg
              className="w-6 h-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h3 className="font-semibold text-gray-900">Kontak</h3>
          </div>
          <p className="text-gray-600 text-sm">{org.kontak}</p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Tentang {org.name}
        </h2>
        <div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: org.fullDescription }}
        />
      </div>

      {/* CTA Button */}
      <div className="mt-8 flex justify-center">
        <button className="px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all shadow-lg hover:shadow-xl font-semibold">
          Daftar Sekarang
        </button>
      </div>
    </article>
  );
}