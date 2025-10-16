"use client";

import { useState } from 'react';
import { ChevronRight, Plus, Trash2 } from 'lucide-react';

interface Question {
  id: number;
  type: string;
  question: string;
  required: boolean;
}

interface FormSettings {
  currentlyReceiving: boolean;
  canBeEdited: boolean;
  fillOnce: boolean;
}

export default function FormBuilder() {
  const [formData, setFormData] = useState({
    title: 'Formulir Baru',
    description: '',
    settings: {
      currentlyReceiving: true,
      canBeEdited: false,
      fillOnce: true
    },
    openDate: '',
    closeDate: ''
  });

  const [questions, setQuestions] = useState<Question[]>([]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSettingChange = (setting: keyof FormSettings) => {
    setFormData(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        [setting]: !prev.settings[setting]
      }
    }));
  };

  const addQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      type: 'text',
      question: '',
      required: false
    };
    setQuestions([...questions, newQuestion]);
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    console.log('Questions:', questions);
    alert('Form berhasil disimpan!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="hover:text-gray-900 cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="hover:text-gray-900 cursor-pointer">Admin</span>
            <ChevronRight className="w-4 h-4" />
            <span className="hover:text-gray-900 cursor-pointer">Form</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">New</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Formulir</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          {/* Title */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
              placeholder="Masukkan judul formulir"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none resize-none"
              rows={3}
              placeholder="Masukkan deskripsi formulir"
            />
          </div>

          {/* Settings */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Pengaturan
            </label>
            <div className="space-y-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.settings.currentlyReceiving}
                  onChange={() => handleSettingChange('currentlyReceiving')}
                  className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                />
                <span className="text-sm text-gray-700">Formulir sedang menerima jawaban</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.settings.canBeEdited}
                  onChange={() => handleSettingChange('canBeEdited')}
                  className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                />
                <span className="text-sm text-gray-700">Jawaban dapat dirubah</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.settings.fillOnce}
                  onChange={() => handleSettingChange('fillOnce')}
                  className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                />
                <span className="text-sm text-gray-700">Hanya dapat mengisi sekali</span>
              </label>
            </div>
          </div>

          {/* Open Date */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dibuka pada
            </label>
            <input
              type="datetime-local"
              value={formData.openDate}
              onChange={(e) => handleInputChange('openDate', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Close Date */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ditutup pada
            </label>
            <input
              type="datetime-local"
              value={formData.closeDate}
              onChange={(e) => handleInputChange('closeDate', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Save Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-lg transition-colors"
          >
            Simpan
          </button>

          {/* Question Stats */}
          <div className="mt-6 flex items-center gap-4 text-sm">
            <span className="text-gray-600">Total jawaban: <span className="font-semibold">0</span></span>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors">
              Hapus semua jawaban 0
            </button>
          </div>
        </div>

        {/* Questions Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Pertanyaan</h2>
          
          {questions.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Belum ada pertanyaan. Klik tombol di bawah untuk menambahkan pertanyaan.</p>
          ) : (
            <div className="space-y-4 mb-6">
              {questions.map((q) => (
                <div key={q.id} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <input
                      type="text"
                      placeholder="Masukkan pertanyaan"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    />
                    <button
                      onClick={() => removeQuestion(q.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={addQuestion}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Tambah Pertanyaan
          </button>
        </div>
      </div>
    </div>
  );
}