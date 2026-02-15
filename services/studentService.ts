import { supabase, isSupabaseConfigured } from './supabaseClient';
import { Student } from '../types';
import { MOCK_STUDENTS } from '../constants';

export const searchStudent = async (query: string): Promise<Student | null> => {
  // Simulate network delay for better UX feel
  await new Promise(resolve => setTimeout(resolve, 800));

  if (isSupabaseConfigured && supabase) {
    try {
      // Logic: Search by NISN or Nomor Ujian
      const { data, error } = await supabase
        .from('students')
        .select('*')
        .or(`nisn.eq.${query},nomor_ujian.eq.${query}`)
        .maybeSingle();

      if (error) {
        console.error('Supabase error:', error);
        throw new Error('Terjadi kesalahan saat mengambil data.');
      }

      return data as Student | null;
    } catch (err) {
      console.error('Service error:', err);
      // Fallback to mock data if connection fails (optional, usually you'd show error)
      return searchMockData(query);
    }
  } else {
    // Return mock data if Supabase is not configured
    console.warn("Supabase credentials missing. Using Mock Data.");
    return searchMockData(query);
  }
};

const searchMockData = (query: string): Student | null => {
  const result = MOCK_STUDENTS.find(
    s => s.nisn === query || s.nomor_ujian === query
  );
  return result || null;
};
