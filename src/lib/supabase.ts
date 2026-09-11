import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;

export interface ProjectInquiry {
  full_name: string;
  business: string;
  email: string;
  phone: string;
  service_needed: string;
  estimated_budget: string;
  preferred_timeline: string;
  project_description: string;
}

/**
 * Keeps local development usable when Supabase credentials are not available.
 * Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.local to enable the
 * real database again.
 */
export async function insertProjectInquiry(inquiry: ProjectInquiry) {
  if (supabase) {
    return supabase.from('project_inquiries').insert([inquiry]);
  }

  const key = 'cloudforge:project-inquiries';
  const existing = JSON.parse(localStorage.getItem(key) || '[]') as ProjectInquiry[];
  localStorage.setItem(key, JSON.stringify([...existing, { ...inquiry, created_at: new Date().toISOString() }]));
  return { error: null };
}
