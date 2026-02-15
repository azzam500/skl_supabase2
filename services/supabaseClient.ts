import { createClient } from '@supabase/supabase-js';

// NOTE: In a real deployment, these should be environment variables.
// Use process.env.REACT_APP_SUPABASE_URL or import.meta.env.VITE_SUPABASE_URL depending on bundler.
// For this generated code, we check if they exist in process.env.

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = supabaseUrl && supabaseKey;

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseKey)
  : null;
