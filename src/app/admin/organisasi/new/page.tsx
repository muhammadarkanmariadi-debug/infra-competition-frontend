'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ChevronRight, Upload, X } from 'lucide-react';

interface OrganizationForm {
  id: string;
  category: string;
  year: string;
  subOrganization: string;
  name: string;
  logo: string | null;
  description: string;
  photo: string | null;
  photoDescription: string;
  pembimbing: string;
  socialMedia: string;
  visi: string;
  misi: string;
  struktur: string;
  created: string;
  updated: string;
}

export default function OrganizationFormPage() {
  const router = useRouter();
  const params = useParams();
  const isEdit = !!params?.id;

  const [formData, setFormData] = useState<OrganizationForm>({
    id: '',
    category: '',
    year: '',
    subOrganization: '',
    name: '',
    logo: null,
    description: '',
    photo: null,
    photoDescription: '',
    pembimbing: '',
    socialMedia: '',
    visi: '',
    misi: '',
    struktur: '',
    created: '',
    updated: ''
  });

  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  // Organization categories
  const categories = [
    'OSIS', 'MPK', 'BDI', 'PALWAGA', 'PASKATEMA', 
    'TSBC', 'TSFC', 'TSVC', 'PMR', 'MEMO', 
    'MAC', 'METIC', 'COMET', 'PUSTEL', 'DA'
  ];

  // Years
  const currentYear = new Date().getFullYear();
  const years = [`${currentYear}/${currentYear + 1}`];

  // Sub-organizations based on category
  const getSubOrganizations = (category: string): string[] => {
    const subOrgMap: Record<string, string[]> = {
      'MAC': ['Sub-Organisasi 1', 'Sub-Organisasi 2', 'Sub-Organisasi 3'],
      'OSIS': ['Ketua OSIS', 'Wakil Ketua', 'Sekretaris'],
      'MPK': ['Ketua MPK', 'Anggota MPK'],
      // Add more mappings as needed
    };
    return subOrgMap[category] || [];
  };

  // Load organization data if editing
  useEffect(() => {
    if (isEdit) {
      const savedOrgs = localStorage.getItem('organizations');
      if (savedOrgs) {
        const orgs = JSON.parse(savedOrgs);
        const org = orgs.find((o: OrganizationForm) => o.id === params.id);
        if (org) {
          setFormData(org);
          if (org.logo) setLogoPreview(org.logo);
          if (org.photo) setPhotoPreview(org.photo);
        }
      }
    }
  }, [isEdit, params?.id]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Reset sub-organization when category changes
    if (field === 'category') {
      setFormData(prev => ({
        ...prev,
        subOrganization: ''
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'logo' | 'photo') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        if (type === 'logo') {
          setLogoPreview(result);
          setFormData(prev => ({ ...prev, logo: result }));
        } else {
          setPhotoPreview(result);
          setFormData(prev => ({ ...prev, photo: result }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeFile = (type: 'logo' | 'photo') => {
    if (type === 'logo') {
      setLogoPreview(null);
      setFormData(prev => ({ ...prev, logo: null }));
    } else {
      setPhotoPreview(null);
      setFormData(prev => ({ ...prev, photo: null }));
    }
  };

  const handleSubmit = () => {
    // Validation
    if (!formData.category || !formData.year || !formData.name) {
      alert('Category, Year, dan Organization Name harus diisi!');
      return;
    }

    const now = new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    const savedOrgs = localStorage.getItem('organizations');
    const orgs = savedOrgs ? JSON.parse(savedOrgs) : [];

    if (isEdit) {
      // Update existing organization
      const updatedOrgs = orgs.map((o: OrganizationForm) =>
        o.id === formData.id
          ? { ...formData, updated: now }
          : o
      );
      localStorage.setItem('organizations', JSON.stringify(updatedOrgs));
    } else {
      // Create new organization
      const newOrg = {
        ...formData,
        id: Date.now().toString(),
        created: now,
        updated: now
      };
      orgs.push(newOrg);
      localStorage.setItem('organizations', JSON.stringify(orgs));
    }

    alert('Organisasi berhasil disimpan!');
    router.push('/admin/organisasi');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span onClick={() => router.push('/')} className="hover:text-gray-900 cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4" />
            <span onClick={() => router.push('/admin')} className="hover:text-gray-900 cursor-pointer">Admin</span>
            <ChevronRight className="w-4 h-4" />
            <span onClick={() => router.push('/admin/organisasi')} className="hover:text-gray-900 cursor-pointer">Organisasi</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Organization Information</h1>
        <p className="text-gray-600 mb-8">Introduce your organization's profile to the world!</p>

        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Category & Year */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pilih<span className="text-red-500">*</span>
              </label>
              <select
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
              >
                <option value="">Pilih</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pilih<span className="text-red-500">*</span>
              </label>
              <select
                value={formData.year}
                onChange={(e) => handleInputChange('year', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
              >
                <option value="">Pilih</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Sub Organization */}
          {formData.category && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Organ/Sub<span className="text-red-500">*</span>
              </label>
              <select
                value={formData.subOrganization}
                onChange={(e) => handleInputChange('subOrganization', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
              >
                <option value="">Sub-Organisasi</option>
                {getSubOrganizations(formData.category).map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
          )}

          {/* Organization Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Organisasi Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Majelis Perwakilan Kelas"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Logo */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Logo<span className="text-red-500">*</span>
            </label>
            {logoPreview ? (
              <div className="relative w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
                <img src={logoPreview} alt="Logo preview" className="w-full h-full object-cover" />
                <button
                  onClick={() => removeFile('logo')}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                <Upload className="w-8 h-8 text-gray-400" />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, 'logo')}
              className="mt-2 text-sm"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description<span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Deskripsi organisasi MAC"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none resize-none"
              rows={4}
            />
          </div>

          {/* Photo */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Photo<span className="text-red-500">*</span>
            </label>
            {photoPreview ? (
              <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                <img src={photoPreview} alt="Photo preview" className="w-full h-full object-cover" />
                <button
                  onClick={() => removeFile('photo')}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <Upload className="w-8 h-8 text-gray-400" />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, 'photo')}
              className="mt-2 text-sm"
            />
          </div>

          {/* Photo Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Photo Description<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.photoDescription}
              onChange={(e) => handleInputChange('photoDescription', e.target.value)}
              placeholder="Foto anggota/Foto Kegiatan/Lain-lain"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Pembimbing */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pembimbing<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.pembimbing}
              onChange={(e) => handleInputChange('pembimbing', e.target.value)}
              placeholder="Pembimbing MAC"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Social Media */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Social Media<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.socialMedia}
              onChange={(e) => handleInputChange('socialMedia', e.target.value)}
              placeholder="Link social media MAC"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Visi */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Visi
            </label>
            <textarea
              value={formData.visi}
              onChange={(e) => handleInputChange('visi', e.target.value)}
              placeholder="Visi organisasi MAC"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none resize-none"
              rows={4}
            />
          </div>

          {/* Misi */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Misi
            </label>
            <textarea
              value={formData.misi}
              onChange={(e) => handleInputChange('misi', e.target.value)}
              placeholder="Misi organisasi MAC"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none resize-none"
              rows={4}
            />
          </div>

          {/* Struktur Organisasi */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Struktur Organisasi<span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.struktur}
              onChange={(e) => handleInputChange('struktur', e.target.value)}
              placeholder="Struktur organisasi"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none resize-none"
              rows={4}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-6 border-t">
            <button
              onClick={() => router.back()}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Create Organization
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}