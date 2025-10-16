"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { api } from "../_components/lib/api";

interface Posts{
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
  short_body: string;
  body: string;
}



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
  const [postesTes, setPostesTes] = useState<Posts[]>([]);


  useEffect(() => {
    const fetchPosts = async () => {
      api.get('/blog').then((res) => {
        console.log(res.data);
        setPostesTes(res.data.data.data);
      })
    }

    fetchPosts()
  }, []);

  const handleSelect = (id: number) => {
    setSelectedPost(selectedPost === id ? null : id);
  };

  // 🔍 Filter post berdasarkan search
  const filteredPosts = postesTes.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="mx-auto px-6 md:px-1 py-15 max-w-6xl">
      <h1 className="mb-8 font-bold text-black text-3xl">
        Berita Sekolah & Organisasi SMK Telkom Malang
      </h1>

      {/* 🔍 Search Box */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari berita..."
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 w-full md:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 📰 Daftar Berita */}
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white hover:shadow-md p-4 border border-gray-200 rounded-xl transition"
            >
              <div className="flex gap-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={120}
                  height={80}
                  className="rounded-lg w-[120px] h-[80px] object-cover"
                />
                <div>
                  <h2
                    className="font-semibold text-black hover:text-red-600 text-lg cursor-pointer"
                    onClick={() => handleSelect(post.id)}
                  >
                    {post.title}
                  </h2>
                  <p className="mt-1 text-gray-500 text-sm">{post.short_body}</p>
                  <div className="flex justify-between mt-2 text-gray-400 text-xs">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>

              {selectedPost === post.id && (
                <div
                  className="mt-4 pt-4 border-t text-gray-700 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.body }}
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
