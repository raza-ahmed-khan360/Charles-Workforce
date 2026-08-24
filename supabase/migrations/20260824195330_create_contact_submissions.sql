/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's email address
  - `phone` (text) — optional telephone number
  - `organization` (text) — optional organization/company name
  - `reason` (text, not null) — reason for contact (program participation, volunteering, etc.)
  - `message` (text, not null) — the inquiry message
  - `created_at` (timestamptz, default now())
  - `status` (text, default 'new') — tracking status for internal use

2. Security
- Enable RLS on `contact_submissions`.
- This is a no-auth public website contact form, so anon + authenticated can INSERT.
- Only allow INSERT for public submissions — no public SELECT/UPDATE/DELETE to protect submission data.

3. Important Notes
- The website contact form submits directly from the browser using the anon key.
- Submissions are readable only by database admins (via Supabase dashboard or service role key).
- The destination email address for form forwarding is controlled by the Foundation, not the developer.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  organization text,
  reason text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_contact" ON contact_submissions;
DROP POLICY IF EXISTS "anon_update_contact" ON contact_submissions;
DROP POLICY IF EXISTS "anon_delete_contact" ON contact_submissions;
