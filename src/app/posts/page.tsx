"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
<<<<<<< HEAD
import { SetStateAction, useEffect, useState } from "react";
import { api } from "../_components/lib/api";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search, Calendar, User, Tag, Clock, Newspaper } from "lucide-react";

interface Posts {
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
  slug: string;
  tags?: string;
}

export default function BeritaPage() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [postesTes, setPostesTes] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get('/blog');
        setPostesTes(res.data.data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleSelect = (slug: string) => {
    router.push(`/post/${slug}`);
=======
import Link from "next/link";

const postsDummy = [
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
    title: "Ikan Bakar",
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
    title: "MAC Home Band Class : MAC 33 Kenalan Cara Setup",
    author: "Rayyan Irsa",
    date: "Sep 14, 2025",
    image:
      "https://www.moklet.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmokletorg%2Fimage%2Fupload%2Fv1753081392%2Fapp_media%2Ffile_rk0plj.png&w=1920&q=75",
    excerpt: "Workshop setup band untuk pemula...",
    content: `<p>Kegiatan edukasi musik yang bermanfaat.</p>`,
  },
];
export interface TypeUser {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string | null;
  role: string;
  created_at: string;
  updated_at: string;
}

export interface Typepost {
  id: number;
  title: string;
  slug: string;
  thumbnail: string; // pakai nama dari API
  excerpt: string;
  content: string;
  user: TypeUser; // ini adalah object, bukan string
  created_at: string;
  updated_at: string;
}

export default function BeritaPage() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [posts, setPosts] = useState<Typepost[]>([]);
  const [filteredPost, setFilteredPost] = useState<Typepost[]>([]);

  // const handleSelect = (id) => {
  //   setSelectedPost(selectedPost === id ? null : id);
  // };

  const handleSearch = () => {
    setIsSearched(true);
>>>>>>> origin/haikal
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    // kalau kosong → reset pencarian
    if (value.trim() === "") {
      setIsSearched(false);
    } else {
      setIsSearched(true);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const getDataPost = async () => {
      try {
        const res = await fetch("https://api.digicodes.my.id/api/blog", {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch posts");

        const result = await res.json();

      
        const normalized: Typepost[] = Array.isArray(result?.data?.data)
          ? result.data.data
          : [];

        if (isMounted) {
          setPosts(normalized);
          setFilteredPost(normalized); // tampilkan semua saat awal
          console.log("✅ Data fetched:", normalized);
        }
      } catch (error) {
        console.error("❌ Fetch error:", error);
        if (isMounted) setPosts([]);
      }
    };

    getDataPost(); // jalankan saat mount

    return () => {
      isMounted = false;
    };
  }, []);

  // 🔍 Efek untuk filtering berdasarkan pencarian
  useEffect(() => {

    if (searchTerm.trim() === "") {
      // jika input kosong → tampilkan semua
      setFilteredPost(posts || []);
      setIsSearched(false);
    } else {
      // filter berdasarkan title
      const filtered = posts?.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPost(filtered);
      setIsSearched(true);
    }
  }, [searchTerm, posts]);

  console.log("Posts state:", posts);

  return (
<<<<<<< HEAD
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="relative bg-secondary py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="top-0 left-1/4 absolute bg-white blur-3xl rounded-full w-96 h-96"></div>
          <div className="right-1/4 bottom-0 absolute bg-white blur-3xl rounded-full w-96 h-96"></div>
        </div>

        <div className="relative mx-auto px-6 max-w-7xl container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-white/20 shadow-lg backdrop-blur-sm mb-6 px-6 py-3 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Newspaper className="w-6 h-6 text-white" />
              <span className="font-semibold text-white">Berita & Artikel</span>
            </motion.div>

            <motion.h1
              className="mb-6 font-bold text-white text-5xl md:text-6xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Berita Sekolah
            </motion.h1>
            <motion.p
              className="mx-auto mb-8 max-w-3xl text-white/90 text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Informasi terkini seputar kegiatan dan prestasi SMK Telkom Malang
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-gray-50 py-8">
        <div className="mx-auto px-6 max-w-7xl">
          <motion.div
            className="relative mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Search className="top-1/2 left-4 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari berita berdasarkan judul..."
              className="shadow-lg px-12 py-4 border-2 border-gray-200 focus:border-primary rounded-2xl focus:outline-none w-full transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="top-1/2 right-4 absolute text-gray-400 hover:text-gray-600 -translate-y-1/2"
              >
                ✕
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Posts Section */}
      <section className="mx-auto px-6 py-16 max-w-7xl">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="border-4 border-gray-200 border-t-primary rounded-full w-16 h-16 animate-spin"></div>
          </div>
        ) : (
          <>
            {filteredPosts.length > 0 ? (
              <>
                <motion.div
                  className="mb-8 text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Menampilkan {filteredPosts.length} berita
                </motion.div>

                <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      className="group relative bg-white shadow-lg hover:shadow-2xl rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8 }}
                      onClick={() => handleSelect(post.slug)}
                    >
                      {/* Thumbnail */}
                      <div className="relative w-full h-56 overflow-hidden">
                        <Image
                          src={`
                            ${post.thumbnail}`}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        
                        {/* Tags */}
                        {post.tags && (
                          <div className="bottom-4 left-4 absolute flex flex-wrap gap-2">
                            {post.tags.split(',').slice(0, 2).map((tag, i) => (
                              <span
                                key={i}
                                className="flex items-center gap-1 bg-white/90 shadow-lg backdrop-blur-sm px-3 py-1 rounded-full font-medium text-primary text-xs"
                              >
                                <Tag className="w-3 h-3" />
                                {tag.trim()}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h2 className="mb-3 font-bold text-gray-900 group-hover:text-primary text-xl line-clamp-2 transition-colors">
                          {post.title}
                        </h2>
                        
                        <p className="mb-4 text-gray-600 text-sm line-clamp-3 leading-relaxed">
                          {post.short_body}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center gap-4 pt-4 border-gray-100 border-t text-gray-500 text-xs">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          {post.author && (
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              <span>{post.author.name}</span>
                            </div>
                          )}
                        </div>

                        {/* Read More */}
                        <div className="flex items-center gap-2 group-hover:gap-3 mt-4 font-semibold text-primary text-sm transition-all">
                          Baca Selengkapnya
                          <span className="transition-transform group-hover:translate-x-1">→</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            ) : (
              <motion.div
                className="py-20 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="inline-flex justify-center items-center bg-gray-100 mb-4 rounded-full w-20 h-20">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="mb-2 font-semibold text-gray-900 text-2xl">
                  Berita Tidak Ditemukan
                </h3>
                <p className="text-gray-600">
                  Coba gunakan kata kunci yang berbeda
                </p>
              </motion.div>
            )}
          </>
        )}
      </section>
    </main>
=======
    <section className="max-w-6xl mx-auto py-15 mt-5">
      {/* Search Box */}
      <div className="flex items-center mx-[-30px] px-2 ml-[-38px]">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Cari berita di Moklet Portal..."
            className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <div className="ml-4 mr-[-7px]">
          <button
            className="w-full md:w-auto px-6 py-4 bg-red-800 text-white rounded-2xl hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-600 flex items-center gap-2"
            onClick={handleSearch}
          >
            <h6 className="text-[13px]">Cari berita</h6>
          </button>
        </div>
      </div>

      {/* Show results or no results message */}
      {isSearched && filteredPost?.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 mt-10">
          <svg
            className="w-20 h-20 text-gray-300 mb-4"
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
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Tidak ada hasil
          </h3>
          <p className="text-gray-500 mb-4">
            Tidak ada berita yang cocok dengan pencarian "
            <span className="font-semibold">{searchTerm}</span>"
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setIsSearched(false);
            }}
            className="px-6 py-2 bg-red-800 text-white rounded-lg hover:bg-red-700 transition"
          >
            Kembali ke semua berita
          </button>
        </div>
      ) : (
        <>
          {/* Berita Terpopuler - Grid 2 Kolom */}

          <h1 className="text-4xl font-bold mb-8 text-black mt-15 ml-[-27px]">
            Berita Terpopuler Sekolah & Organisasi SMK Telkom Malang
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mx-[-30px] mt-5">
            {filteredPost &&
              filteredPost?.slice(0, 4).map((post) => (
                <Link
                  href={`/post/${post.id}`}
                  key={post.id}
                  className="border border-gray-200 rounded-2xl p-4 hover:shadow-md transition bg-white"
                >
                  <div className="flex gap-4">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="rounded-lg object-cover w-[120px] h-[80px]"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-black hover:text-red-600">
                        {post.title}
                      </h2>
                      <p className="text-gray-500 text-sm mt-1">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between mt-2 text-xs text-gray-400">
                        <span>{post.user?.name}</span>
                        <span>{post.created_at}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          {/* Berita Terbaru - Grid 3 Kolom */}
          <h1 className="text-4xl font-bold mb-8 text-black mt-15 ml-[-27px]">
            Berita Terbaru Sekolah & Organisasi SMK Telkom Malang
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-[-30px]">
            {posts?.map((post) => (
              <Link
                href={`/post/${post.id}`}
                key={`latest-${post.id}`}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition bg-white"
              >
                <div className="relative w-full h-[200px]">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-black hover:text-red-600 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-3">{post.excerpt}</p>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{post.user?.name}</span>
                    <span>{post.created_at}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
>>>>>>> origin/haikal
  );
}
