"use client";
import Image from "next/image";
import { useState } from "react";

const posts = [
  {
    id: 1,
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
    `,
  },
  {
    id: 2,
    title: "MPLS 2025 SMK Telkom Malang: Stinging Like a Bee",
    author: "Fadi Alyuliansyah",
    date: "Jul 21, 2025",
    image:
      "https://www.moklet.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmokletorg%2Fimage%2Fupload%2Fv1753081392%2Fapp_media%2Ffile_rk0plj.png&w=1920&q=75",
    excerpt:
      "Kegiatan MPLS tahun ini membawa tema baru dan semangat tinggi...",
    content: `
      <p>MPLS 2025 berlangsung meriah dengan berbagai kegiatan interaktif dan edukatif.</p>
      <p>Siswa baru mengenal lebih dekat budaya dan lingkungan SMK Telkom Malang.</p>
    `,
  },
];

export default function BeritaPage() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelect = (id: number) => {
    setSelectedPost(selectedPost === id ? null : id);
  };

  // 🔍 Filter post berdasarkan search
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-1 py-15">
      <h1 className="text-3xl font-bold mb-8 text-black">
        Berita Sekolah & Organisasi SMK Telkom Malang
      </h1>

      {/* 🔍 Search Box */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari berita..."
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 📰 Daftar Berita */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition bg-white"
            >
              <div className="flex gap-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={120}
                  height={80}
                  className="rounded-lg object-cover w-[120px] h-[80px]"
                />
                <div>
                  <h2
                    className="text-lg font-semibold text-black cursor-pointer hover:text-red-600"
                    onClick={() => handleSelect(post.id)}
                  >
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">{post.excerpt}</p>
                  <div className="flex justify-between mt-2 text-xs text-gray-400">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>

              {selectedPost === post.id && (
                <div
                  className="mt-4 border-t pt-4 text-gray-700 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">Berita tidak ditemukan 😢</p>
        )}
      </div>
    </section>
  );
}
