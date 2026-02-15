import { Student } from './types';

// Fallback data for demonstration if Supabase is not connected
export const MOCK_STUDENTS: Student[] = [
  {
    id: 1,
    nisn: "1234567890",
    nomor_ujian: "KP-001-2024",
    nama: "Andi Saputra",
    kelas: "XII IPA 1",
    jurusan: "Ilmu Pengetahuan Alam",
    status: "LULUS",
    nilai_rata_rata: 88.5,
    tgl_lahir: "2006-05-12"
  },
  {
    id: 2,
    nisn: "0987654321",
    nomor_ujian: "KP-002-2024",
    nama: "Siti Aminah",
    kelas: "XII IPS 2",
    jurusan: "Ilmu Pengetahuan Sosial",
    status: "LULUS",
    nilai_rata_rata: 92.0,
    tgl_lahir: "2006-08-23"
  },
  {
    id: 3,
    nisn: "1122334455",
    nomor_ujian: "KP-003-2024",
    nama: "Budi Santoso",
    kelas: "XII IPA 3",
    jurusan: "Ilmu Pengetahuan Alam",
    status: "TIDAK LULUS",
    nilai_rata_rata: 45.0,
    tgl_lahir: "2005-12-01"
  }
];

export const SCHOOL_NAME = "SMA NEGERI 1 INDONESIA";
export const SCHOOL_ADDRESS = "Jl. Pendidikan No. 1, Jakarta";
export const ANNOUNCEMENT_YEAR = "2024/2025";
