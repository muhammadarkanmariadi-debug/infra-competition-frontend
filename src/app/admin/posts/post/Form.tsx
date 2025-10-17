"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/app/admin/layout";
import { PhotoIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Editor from "../../components/MdEditor";

export default function CreatePostPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<{
    title: string;
    description: string;
    slug: string;
    category: string;
    tags: string[];
    content: string;
    thumbnail: File | null;
    status: string;
  }>({
    title: "",
    description: "",
    slug: "",
    category: "",
    tags: [],
    content: "",
    thumbnail: null,
    status: "draft",
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const categories = [
    "Pengumuman",
    "Berita",
    "Event",
    "Kegiatan",
    "Prestasi",
    "Tutorial",
  ];

  const availableTags = [
    "OSIS",
    "MPK",
    "Akademik",
    "Non-Akademik",
    "Lomba",
    "Workshop",
    "Seminar",
    "Ekstrakurikuler",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "title") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setFormData((prev) => ({
        ...prev,
        slug: slug,
      }));
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFormData((prev) => ({
        ...prev,
        thumbnail: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent, status = "draft") => {
    e.preventDefault();

    console.log("Submitting post:", { ...formData, status });

    // Redirect back to posts list
    router.push("/posts");
  };

  const handleTagToggle = (tag: string): void => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="mb-4 text-gray-600 hover:text-gray-900 flex items-center space-x-2"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span>Kembali</span>
          </button>

        </div>

        {/* Form */}
        <form
          onSubmit={(e) => handleSubmit(e, "publish")}
          className="space-y-6"
        >
          <div className="bg-white rounded-lg shadow p-6 space-y-6">
            {/* Judul Post */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Judul Post<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Masukkan judul post..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deskripsi<span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Deskripsi singkat tentang post..."
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Custom Slug
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleInputChange}
                placeholder="custom-url-slug"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategori<span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              >
                <option value="">Select...</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <div className="flex flex-wrap gap-2">
                {availableTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handleTagToggle(tag)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      formData.tags.includes(tag)
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Thumbnail */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Thumbnail<span className="text-red-500">*</span>
              </label>
              <div className="flex items-start space-x-4">
                <div className="w-48 h-48 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <PhotoIcon className="w-16 h-16 text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                    id="thumbnail-upload"
                  />
                  <label
                    htmlFor="thumbnail-upload"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                  >
                    Choose File
                  </label>
                  {formData.thumbnail && (
                    <p className="mt-2 text-sm text-gray-500">
                      {formData.thumbnail.name}
                    </p>
                  )}
                  <p className="mt-2 text-xs text-gray-500">
                    Recommended size: 1200x630px. Max file size: 2MB
                  </p>
                </div>
              </div>
            </div>

            {/* Content Editor */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Text Editor<span className="text-red-500">*</span>
              </label>
              <Editor
                value={""}
                onChange={function (
                  value?: string | undefined,
                  event?: ChangeEvent<HTMLTextAreaElement> | undefined
                ): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-6 border-t">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={(e) => handleSubmit(e, "draft")}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Save as Draft
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Simpan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
