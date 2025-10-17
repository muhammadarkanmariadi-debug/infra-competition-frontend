"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Data posts (idealnya dari database atau API)
const posts = [
  {
    id: 1,
    slug: "mac-a-rhythm-saat-aula-berubah-jadi-panggung-seni",
    title: "MAC A Rhythm: Saat Aula Berubah Jadi Panggung Seni",
    author: "Rayyan Irsa",
    date: "Sep 14, 2025",
    image:
      "https://www.moklet.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmokletorg%2Fimage%2Fupload%2Fv1753081392%2Fapp_media%2Ffile_rk0plj.png&w=1920&q=75",
    excerpt:
      "MAC A Rhythm menghadirkan suasana berbeda di aula SMK Telkom Malang...",
    content: `
      <p>Acara MAC A Rhythm sukses menarik perhatian siswa dengan suasana musik yang hangat dan kreatif.</p>
      <p>Berbagai band dari kelas 10–12 tampil memukau, menunjukkan bakat luar biasa siswa Moklet.</p>
      <p>Event ini menjadi wadah bagi para musisi muda untuk mengekspresikan karya mereka.</p>
    `,
  },
  {
    id: 2,
    slug: "mpls-2025-smk-telkom-malang-stinging-like-a-bee",
    title: "MPLS 2025 SMK Telkom Malang: Stinging Like a Bee",
    author: "Fadi Alyuliansyah",
    date: "Jul 21, 2025",
    image:
      "https://www.moklet.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmokletorg%2Fimage%2Fupload%2Fv1753081392%2Fapp_media%2Ffile_rk0plj.png&w=1920&q=75",
    excerpt: "Kegiatan MPLS tahun ini membawa tema baru dan semangat tinggi...",
    content: `
      <p>MPLS 2025 berlangsung meriah dengan berbagai kegiatan interaktif dan edukatif.</p>
      <p>Siswa baru mengenal lebih dekat budaya dan lingkungan SMK Telkom Malang.</p>
    `,
  },
  {
    id: 3,
    slug: "dance-attack-saat-jalanan-berubah-jadi-tempat-menari",
    title: "Dance Attack! Saat Jalanan Berubah Jadi Tempat Menari",
    author: "Rayyan Irsa",
    date: "Sep 14, 2025",
    image:
      "https://www.moklet.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmokletorg%2Fimage%2Fupload%2Fv1753081392%2Fapp_media%2Ffile_rk0plj.png&w=1920&q=75",
    excerpt: "Dance Attack membawa semangat baru di jalanan kota...",
    content: `<p>Event dance yang meriah dan penuh energi.</p>`,
  },
  {
    id: 4,
    slug: "mac-home-band-class-mac-33-kenalan-cara-setup",
    title: "MAC Home Band Class : MAC 33 Kenalan Cara Setup",
    author: "Rayyan Irsa",
    date: "Sep 14, 2025",
    image:
      "https://www.moklet.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmokletorg%2Fimage%2Fupload%2Fv1753081392%2Fapp_media%2Ffile_rk0plj.png&w=1920&q=75",
    excerpt: "Workshop setup band untuk pemula...",
    content: `<p>Kegiatan edukasi musik yang bermanfaat.</p>`,
  },
];

export default function BeritaDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Simulasi loading
      setTimeout(() => {
        const slug = params.slug;
        const foundPost = posts.find((p) => p.slug === slug);

        if (!foundPost) {
          setError("Berita tidak ditemukan");
        } else {
          setPost(foundPost);
        }
        setLoading(false);
      }, 500);
    } catch (err) {
      setError("Terjadi kesalahan saat memuat berita");
      setLoading(false);
    }
  }, [params.slug]);

  // Loading state
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="h-96 bg-gray-200 rounded mb-8"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  // Error state - 404 Not Found
  if (error || !post) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4">
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
            Berita Tidak Ditemukan
          </h2>
          <p className="text-gray-500 mb-8 max-w-md">
            Maaf, berita yang Anda cari tidak ditemukan atau mungkin sudah
            dihapus. Silakan kembali ke halaman berita.
          </p>
          <button
            onClick={() => router.push("/berita")}
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
            Kembali ke Berita
          </button>
        </div>
      </div>
    );
  }

  // Success state - Display post
  return (
    <article className="max-w-4xl mx-auto py-12 px-4">
      {/* Back button */}
      <button
        onClick={() => router.push("/berita")}
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
        Kembali ke Berita
      </button>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {post.title}
      </h1>

      {/* Meta info */}
      <div className="flex items-center gap-4 text-gray-500 text-sm mb-8 pb-8 border-b">
        <span className="font-medium">{post.author}</span>
        <span>•</span>
        <span>{post.date}</span>
      </div>

      {/* Featured image */}
      <div className="mb-8 rounded-2xl overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Excerpt */}
      <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
        {post.excerpt}
      </p>

      {/* Content */}
      <div
        className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Share buttons (optional) */}
      <div className="mt-12 pt-8 border-t">
        <p className="text-gray-600 mb-4">Bagikan artikel ini:</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Facebook
          </button>
          <button className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition">
            Twitter
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            WhatsApp
          </button>
        </div>
      </div>
    </article>
  );
}