export interface Student {
  id: number;
  nisn: string;
  nomor_ujian: string;
  nama: string;
  kelas: string;
  jurusan: string;
  status: 'LULUS' | 'TIDAK LULUS' | 'DITUNDA';
  nilai_rata_rata: number;
  tgl_lahir?: string;
}

export interface SearchState {
  query: string;
  isLoading: boolean;
  error: string | null;
  hasSearched: boolean;
}

export interface SupabaseConfig {
  url: string;
  key: string;
}