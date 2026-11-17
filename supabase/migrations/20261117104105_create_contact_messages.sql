/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's display name
  - `email` (text, not null) — sender's reply-to email
  - `message` (text, not null) — the body of the contact submission
  - `created_at` (timestamptz, defaults to now())

2. Security
- Enable RLS on `contact_messages`.
- Grant INSERT to `anon` + `authenticated` so visitors can submit the contact form without signing in.
- Allow public inserts (with a reasonable length cap via CHECK) since the portfolio has no sign-in screen.
- No SELECT/UPDATE/DELETE grants for anon/authenticated — only the service role can read collected messages, keeping submissions private to the site owner.

3. Important notes
- This is a single-tenant public-facing portfolio: no user accounts, no auth.uid() ownership.
- The INSERT policy restricts row shape via CHECK constraints on length rather than ownership.
- The site owner reads submissions through the Supabase dashboard / service role, not the anon client.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND char_length(email) <= 320),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 5000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);