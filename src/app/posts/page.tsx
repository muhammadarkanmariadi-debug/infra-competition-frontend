"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { api } from "../_components/lib/api";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search, Calendar, User, Tag, Newspaper } from "lucide-react";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get('/blog');
        console.log("Posts response:", res.data);
        setPosts(res.data.data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleSelect = (slug: string) => {
    router.push(`/post/${slug}`);
  };

  // Filter posts based on search term
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="relative bg-secondary mt-10 py-20 overflow-hidden">
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
  );
}
