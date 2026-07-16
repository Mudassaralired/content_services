-- Supabase Schema for Portfolio Contact Form
-- Run this in your Supabase SQL Editor to create the required table

-- Drop existing table if it exists (to avoid conflicts)
DROP TABLE IF EXISTS contact_messages CASCADE;

-- Create the contact_messages table
CREATE TABLE contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
    full_name TEXT NOT NULL,
    brand_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    service_type TEXT NOT NULL,
    budget_estimate TEXT NOT NULL, -- Now accepts custom text input
    project_details TEXT NOT NULL,
    ip_address INET,
    user_agent TEXT,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed'))
);

-- Add comments for clarity
COMMENT ON TABLE contact_messages IS 'Stores contact form submissions from the portfolio website';
COMMENT ON COLUMN contact_messages.budget_estimate IS 'Custom budget estimate provided by the client (text input)';

-- Enable Row Level Security (RLS)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anonymous inserts (required for public forms)
-- This allows anyone to submit the form but not read other submissions
CREATE POLICY "Allow public to submit contact forms"
ON contact_messages
FOR INSERT
WITH CHECK (true);

-- Optional: Create a policy for authenticated users (admins) to view all submissions
-- Uncomment the lines below if you have authentication setup for admin access
/*
CREATE POLICY "Allow authenticated users to view all submissions"
ON contact_messages
FOR SELECT
USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to update status"
ON contact_messages
FOR UPDATE
USING (auth.role() = 'authenticated');
*/

-- Create an index on created_at for faster sorting/querying
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at DESC);

-- Create an index on status for filtering
CREATE INDEX idx_contact_messages_status ON contact_messages(status);

-- Optional: Create a function to notify via webhook on new submission (if needed later)
/*
CREATE OR REPLACE FUNCTION notify_new_submission()
RETURNS TRIGGER AS $$
BEGIN
  -- You can add webhook logic here or use Supabase's built-in Database Webhooks
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_new_contact_submission
AFTER INSERT ON contact_messages
FOR EACH ROW
EXECUTE FUNCTION notify_new_submission();
*/
