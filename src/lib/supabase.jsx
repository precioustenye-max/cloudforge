import { createClient } from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
const supabase = isSupabaseConfigured
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
/**
 * Keeps local development usable when Supabase credentials are not available.
 * Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.local to enable the
 * real database again.
 */
export async function insertProjectInquiry(inquiry) {
    if (supabase) {
        return supabase.from('project_inquiries').insert([inquiry]);
    }
    const key = 'cloudforge:project-inquiries';
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    localStorage.setItem(key, JSON.stringify([...existing, { ...inquiry, created_at: new Date().toISOString() }]));
    return { error: null };
}
