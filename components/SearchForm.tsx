import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';

interface SearchFormProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 -mt-10 sm:-mt-16 relative z-10 mx-4 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Cek Status Kelulusan
      </h2>
      <p className="text-gray-500 text-center mb-8 max-w-md mx-auto">
        Masukkan Nomor Induk Siswa Nasional (NISN) atau Nomor Ujian Anda untuk melihat hasil pengumuman.
      </p>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg"
            placeholder="Contoh: 1234567890"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-blue-700 text-white font-medium rounded-lg px-6 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[100px]"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              "Cek Data"
            )}
          </button>
        </div>
        <p className="mt-4 text-xs text-center text-gray-400">
          Pastikan data yang Anda masukkan benar dan valid.
        </p>
      </form>
    </div>
  );
};
