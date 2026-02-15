import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchForm } from './components/SearchForm';
import { ResultCard } from './components/ResultCard';
import { searchStudent } from './services/studentService';
import { Student, SearchState } from './types';
import { AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  const [searchState, setSearchState] = useState<SearchState>({
    query: '',
    isLoading: false,
    error: null,
    hasSearched: false,
  });

  const [studentData, setStudentData] = useState<Student | null>(null);

  const handleSearch = async (query: string) => {
    setSearchState({ ...searchState, isLoading: true, error: null, query });
    setStudentData(null);

    try {
      const result = await searchStudent(query);
      if (result) {
        setStudentData(result);
        setSearchState(prev => ({ ...prev, isLoading: false, hasSearched: true, error: null }));
      } else {
        setSearchState(prev => ({ 
          ...prev, 
          isLoading: false, 
          hasSearched: true, 
          error: "Data siswa tidak ditemukan. Silakan periksa kembali NISN atau Nomor Ujian Anda." 
        }));
      }
    } catch (err) {
      setSearchState(prev => ({ 
        ...prev, 
        isLoading: false, 
        hasSearched: true, 
        error: "Terjadi kesalahan koneksi. Silakan coba lagi nanti." 
      }));
    }
  };

  const handleReset = () => {
    setSearchState({
      query: '',
      isLoading: false,
      error: null,
      hasSearched: false,
    });
    setStudentData(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-primary pb-24 pt-16 sm:pt-24 px-4 relative overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
             <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
             <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-white blur-2xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Pengumuman Kelulusan
            <br />
            <span className="text-blue-200">Tahun Ajaran 2024/2025</span>
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto font-light">
            Silakan periksa status kelulusan Anda dengan memasukkan data yang valid pada kolom pencarian di bawah ini.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        
        {!studentData && (
          <div className="animate-fade-in">
             <SearchForm onSearch={handleSearch} isLoading={searchState.isLoading} />
             
             {/* Info Cards / Features (Visible only when not viewing results) */}
             {!searchState.hasSearched && (
               <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <FeatureItem 
                    title="Real-time Data" 
                    desc="Data kelulusan terintegrasi langsung dengan database sekolah." 
                  />
                  <FeatureItem 
                    title="Akses Mudah" 
                    desc="Dapat diakses melalui Smartphone, Tablet, maupun Komputer." 
                  />
                  <FeatureItem 
                    title="Cetak SKL" 
                    desc="Fitur cetak Surat Keterangan Lulus sementara secara langsung." 
                  />
               </div>
             )}
          </div>
        )}

        {/* Error State */}
        {searchState.error && !studentData && (
          <div className="max-w-lg mx-auto mt-8 bg-white border border-red-200 rounded-xl p-6 shadow-sm flex items-start gap-4 animate-fade-in">
            <div className="bg-red-50 p-2 rounded-full flex-shrink-0">
               <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-red-800 font-semibold mb-1">Data Tidak Ditemukan</h3>
              <p className="text-red-600 text-sm">{searchState.error}</p>
              <button 
                onClick={handleReset} 
                className="mt-4 text-sm font-medium text-red-700 hover:text-red-900 underline"
              >
                Coba lagi
              </button>
            </div>
          </div>
        )}

        {/* Success Result */}
        {studentData && (
          <ResultCard student={studentData} onReset={handleReset} />
        )}
      </main>

      <Footer />
    </div>
  );
};

const FeatureItem: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="h-2 w-12 bg-primary/20 rounded-full mx-auto mb-4"></div>
    <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default App;
