"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { PhotoIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Editor from "../../components/MdEditor";
import { api } from "@/app/_components/lib/api";

type FormState = {
  title: string;
  description: string; // short_body
  slug: string;
  tags: string[]; // will be sent as comma separated string to Laravel
  content: string; // body
  thumbnail: File | null; // local file if replaced
  status: "draft" | "publish";
  thumbnailUrl?: string; // existing url from backend / cloudinary
};

export default function EditPostForm() {
  const router = useRouter();
  const params: any = useParams();
  const id = params?.id as string | undefined;

  const [formData, setFormData] = useState<FormState>({
    title: "",
    description: "",
    slug: "",
    tags: [],
    content: "",
    thumbnail: null,
    status: "draft",
    thumbnailUrl: undefined,
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    if (!id) return;
    let mounted = true;
    setLoading(true);
    (async () => {
      try {
        // TODO: replace with your API function: const res = await getPost(id)
        const res = await api.get(`/blogs/${id}`).then((response) => response.data.data);

        if (!mounted) return;

        setFormData((prev) => ({
          ...prev,
          title: res.title ?? "",
          description: res.short_body ?? res.description ?? "",
          slug: res.slug ?? "",
          tags: res.tags ? (Array.isArray(res.tags) ? res.tags : String(res.tags).split(",")) : [],
          content: res.body ?? res.content ?? "",
          status: res.is_published ? "publish" : "draft",
          thumbnailUrl: res.thumbnail ?? res.thumbnailUrl ?? undefined,
        }));

        if (res.thumbnail ?? res.thumbnailUrl) {
          setPreviewImage(res.thumbnail ?? res.thumbnailUrl);
        }
      } catch (err) {
        console.error("Failed to load post", err);
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [id]);

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
        slug,
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

  async function uploadToCloudinary(file: File) {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    if (!cloudName || !uploadPreset) {
      throw new Error("Cloudinary not configured. Set NEXT_PUBLIC_CLOUDINARY_* env vars.");
    }

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const fd = new FormData();
    fd.append("file", file);
    fd.append("upload_preset", uploadPreset);

    const res = await fetch(url, {
      method: "POST",
      body: fd,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Cloudinary upload failed: ${text}`);
    }

    const data = await res.json();
    return data.secure_url as string;
  }

  const handleSubmit = async (e: React.FormEvent, publishStatus: "draft" | "publish" = "draft") => {
    e.preventDefault();
    if (!id) {
      console.error("Missing post id");
      return;
    }

    setLoading(true);
    try {
      let thumbnailUrl = formData.thumbnailUrl ?? null;

      // if user provided a new file -> upload to cloudinary
      if (formData.thumbnail) {
        thumbnailUrl = await uploadToCloudinary(formData.thumbnail);
      }

      // build payload according to Laravel schema
      const payload = {
        title: formData.title,
        author_id: undefined, // backend should infer author from auth; omit or set if required
        body: formData.content,
        short_body: formData.description,
        thumbnail: thumbnailUrl,
        tags: formData.tags.join(","), // Laravel schema expects string
        slug: formData.slug,
        is_published: publishStatus === "publish",
        approval_status: "pending",
      };

      // TODO: replace with your api call (e.g. await updatePost(id, payload))
      const res = await api.put(`/blogs/${id}`, JSON.stringify(payload));

      if (!res.status.toString().startsWith("2")) {
        const text = await res.data;
        throw new Error(`Update failed: ${text.message}`);
      }

      // success -> go back to posts list
      router.push("/posts");
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan. Cek console untuk detail.");
    } finally {
      setLoading(false);
    }
  };

  const handleTagToggle = (tag: string): void => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  if (loading && !formData.title) {
    return (
      <div className="p-6">
        <div className="mx-auto max-w-4xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 mb-4 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span>Kembali</span>
          </button>
        </div>

        <form onSubmit={(e) => handleSubmit(e, "publish")} className="space-y-6">
          <div className="space-y-6 bg-white shadow p-6 rounded-lg">
            <div>
              <label className="block mb-2 font-medium text-gray-700 text-sm">
                Judul Post<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Masukkan judul post..."
                className="px-4 py-2 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-red-500 w-full"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 text-sm">
                Deskripsi<span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Deskripsi singkat tentang post..."
                rows={3}
                className="px-4 py-2 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-red-500 w-full"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 text-sm">
                Custom Slug
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleInputChange}
                placeholder="custom-url-slug"
                className="px-4 py-2 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-red-500 w-full"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 text-sm">
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

            <div>
              <label className="block mb-2 font-medium text-gray-700 text-sm">
                Thumbnail
              </label>
              <div className="flex items-start space-x-4">
                <div className="flex justify-center items-center bg-gray-100 rounded-lg w-48 h-48 overflow-hidden">
                  {previewImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
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
                    className="inline-flex items-center bg-white hover:bg-gray-50 px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 text-sm cursor-pointer"
                  >
                    Choose File
                  </label>
                  {formData.thumbnail && (
                    <p className="mt-2 text-gray-500 text-sm">{formData.thumbnail.name}</p>
                  )}
                  <p className="mt-2 text-gray-500 text-xs">Recommended size: 1200x630px. Max file size: 2MB</p>
                </div>
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 text-sm">
                Text Editor<span className="text-red-500">*</span>
              </label>
              <Editor
                value={formData.content}
                onChange={(value?: string | undefined) => {
                  setFormData((prev) => ({ ...prev, content: value ?? "" }));
                }}
              />
            </div>

            <div className="flex justify-end space-x-4 pt-6 border-t">
              <button
                type="button"
                onClick={() => router.back()}
                className="hover:bg-gray-50 px-6 py-2 border border-gray-300 rounded-lg text-gray-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={(e) => handleSubmit(e as any, "draft")}
                className="bg-gray-500 hover:bg-gray-600 px-6 py-2 rounded-lg text-white"
              >
                Save as Draft
              </button>
              <button type="submit" className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg text-white">
                Simpan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}