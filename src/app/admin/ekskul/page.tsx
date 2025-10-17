'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight, Plus, Edit, Trash2, Image as ImageIcon } from 'lucide-react';

interface Ekskul {
  id: string;
  name: string;
  year: string;
  Ekskul: string;
  description: string;
  photo: string | null;
  photoDescription: string;
  pembimbing: string;
  updated: string;
}

export default function EkskulListPage() {
  const router = useRouter();
  const [ekskuls, setEkskuls] = useState<Ekskul[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterEkskul, setFilterEkskul] = useState('all');
  const [filterYear, setFilterYear] = useState('all');


  useEffect(() => {
    const savedEkskuls = localStorage.getItem('ekskuls');
    if (savedEkskuls) {
      setEkskuls(JSON.parse(savedEkskuls));
    }
  }, []);

  const handleCreateEkskul = () => {
    router.push('/admin/ekskul/new');
  };

  const handleEditEkskul = (ekskulId: string) => {
    router.push(`/admin/ekskul/${ekskulId}`);
  };

  const handleDeleteEkskul = (ekskulId: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus ekstrakurikuler ini?')) {
      const updatedEkskuls = ekskuls.filter(ekskul => ekskul.id !== ekskulId);
      setEkskuls(updatedEkskuls);
      localStorage.setItem('ekskuls', JSON.stringify(updatedEkskuls));
    }
  };

  // Filter ekskuls
  const filteredEkskuls = ekskuls.filter(ekskul => {
    if (filterEkskul !== 'all' && ekskul.name !== filterEkskul) return false;
    if (filterYear !== 'all' && ekskul.year !== filterYear) return false;
    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filteredEkskuls.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentEkskuls = filteredEkskuls.slice(startIndex, endIndex);

  // Get unique names
  const ekskulNames = ['all', ...Array.from(new Set(ekskuls.map(e => e.name)))];
  const years = ['all', ...Array.from(new Set(ekskuls.map(e => e.year)))];

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
            <span className="text-gray-900 font-medium">Ekstrakurikuler</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Ekstrakurikuler</h1>
            <p className="text-gray-600">Kelola informasi ekstrakurikuler sekolah</p>
          </div>
          <button
            onClick={handleCreateEkskul}
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Ekstrakurikuler
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ekstrakurikuler
              </label>
              <select
                value={filterEkskul}
                onChange={(e) => {
                  setFilterEkskul(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
              >
                <option value="all">Semua Ekstrakurikuler</option>
                {ekskulNames.filter(n => n !== 'all').map(name => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Year
              </label>
              <select
                value={filterYear}
                onChange={(e) => {
                  setFilterYear(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
              >
                <option value="all">Semua Tahun</option>
                {years.filter(y => y !== 'all').map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Photo
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Ekstrakurikuler
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Year
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Sub Ekskul
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Pembimbing
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Updated
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentEkskuls.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                      <ImageIcon className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                      <p className="text-lg mb-2">Belum ada ekstrakurikuler</p>
                      <p className="text-sm">Klik tombol "Add Ekstrakurikuler" untuk menambahkan ekstrakurikuler baru</p>
                    </td>
                  </tr>
                ) : (
                  currentEkskuls.map((ekskul) => (
                    <tr key={ekskul.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                          {ekskul.photo ? (
                            <img src={ekskul.photo} alt={ekskul.name} className="w-full h-full object-cover" />
                          ) : (
                            <ImageIcon className="w-6 h-6 text-gray-400" />
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-900 font-medium">{ekskul.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">{ekskul.year}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">{ekskul.Ekskul}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">{ekskul.pembimbing}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">{ekskul.updated}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEditEkskul(ekskul.id)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                            title="Edit"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteEkskul(ekskul.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {filteredEkskuls.length > 0 && (
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Rows per page:</span>
                <select
                  value={rowsPerPage}
                  onChange={(e) => {
                    setRowsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="border border-gray-300 rounded px-2 py-1 text-sm"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  {startIndex + 1}-{Math.min(endIndex, filteredEkskuls.length)} of {filteredEkskuls.length}
                </span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}