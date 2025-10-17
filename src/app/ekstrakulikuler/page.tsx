"use client";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { api } from "../_components/lib/api";
import { useRouter, useParams } from "next/navigation";

interface Posts{
  id: number;
  title: string;
  author: {
    name: string;
    role: string;
  };
  date: string;
  thumbnail: string;
  short_body: string;
  body: string;
  slug : string;
}




export default function BeritaPage() {
  const [selectedPost, setSelectedPost] = useState<string| null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [postesTes, setPostesTes] = useState<Posts[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      api.get('/Ekstrakurikuler').then((res) => {
     
        setPostesTes(res.data.data);
      })
    }

    fetchPosts()
  }, []);

  const handleSelect = (slug: string) => {
    setSelectedPost(selectedPost === slug ? null : slug);
    router.push(`/post/${slug}`);
  };

  // 🔍 Filter post berdasarkan search
  const filteredPosts = postesTes.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="mx-auto px-6 md:px-1 py-15 max-w-6xl">
      <h1 className="mb-8 font-bold text-black text-3xl">
        Ekskul Sekolah SMK Telkom Malang
      </h1>

      {/* 🔍 Search Box */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari Ekstrakurikuler..."
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
                  src={`http://localhost:8000/storage/${post.thumbnail}`}
                  alt={post.title}
                  width={120}
                  height={80}
                  className="rounded-lg w-[120px] h-[80px] object-cover"
                />
                <div>
                  <h2
                    className="font-semibold text-black hover:text-red-600 text-lg cursor-pointer"
                    onClick={() => handleSelect(post.slug)}
                  >
                    {post.title}
                  </h2>
                  <p className="mt-1 text-gray-500 text-sm">{post.short_body}</p>
                  <div className="flex justify-between mt-2 text-gray-400 text-xs">
                    <span></span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>

              {selectedPost === post.slug && (
                <div
                  className="mt-4 pt-4 border-t text-gray-700 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.body }}
                />
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">Data Ekskul Masih Kosong 😢</p>
        )}
      </div>
    </section>
  );
}
