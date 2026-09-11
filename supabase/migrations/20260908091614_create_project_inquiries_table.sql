/*
# Create project_inquiries table (single-tenant, no auth)

1. New Tables
- `project_inquiries`
  - `id` (uuid, primary key)
  - `full_name` (text, not null) — the submitter's name
  - `business` (text, nullable) — company or business name
  - `email` (text, not null) — contact email
  - `phone` (text, nullable) — phone or WhatsApp number
  - `service_needed` (text, not null) — selected service type
  - `estimated_budget` (text, nullable) — selected budget range
  - `preferred_timeline` (text, nullable) — selected timeline
  - `project_description` (text, not null) — project details
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `project_inquiries`.
- Allow anon + authenticated INSERT only (public contact form, no sign-in).
- No SELECT/UPDATE/DELETE policies — inquiries are private to the site owner.
*/

CREATE TABLE IF NOT EXISTS project_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  business text,
  email text NOT NULL,
  phone text,
  service_needed text NOT NULL,
  estimated_budget text,
  preferred_timeline text,
  project_description text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE project_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON project_inquiries;
CREATE POLICY "anon_insert_inquiries" ON project_inquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);
