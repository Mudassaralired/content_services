# Mudassar Ali | AI Video & Motion Director Portfolio

A premium, high-performance portfolio and lead-generation portal for an Independent AI Video & Motion Director. Crafted to meet the visual standards of creative agencies, featuring hardware-accelerated scroll-reveal animations, Vimeo hover video previews, and a dual-purpose lead capturing system.

---

## Features
- **Premium UI/UX Design System**: High-contrast, hardware-accelerated animations using CSS variables.
- **Continuous Testimonial Slider**: Double-row, infinite marquee moving in opposite directions displaying 22 professional client reviews.
- **Supabase Form Integration**: Automatically logs client leads, brands, budgets, timelines, and briefs directly to a database.
- **Smart mailto: Fallback**: Ensures briefs are never lost by opening pre-filled email client briefs.
- **Performance Optimized**: Deferral of heavy Vimeo iframe background renders, lazy loaded fonts, and responsive CSS grids.

---

## 1. Supabase Database Integration Setup

Follow these steps to store client briefs in your Supabase database:

### Step 1: Create a Supabase Project
1. Sign up or log in to [Supabase](https://supabase.com/).
2. Click **New Project** and select your organization.
3. Configure your project name, password, and region.

### Step 2: Create the Database Table
1. In your Supabase dashboard, go to the **SQL Editor** on the left menu.
2. Click **New Query** and paste the following SQL schema command:

```sql
-- Create contact_messages table to store client briefs
create table contact_messages (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  brand text not null,
  email text not null,
  service text not null,
  budget text not null,
  timeline text not null,
  brief text not null
);

-- Turn off Row Level Security (RLS) for public inserts on contact_messages
-- Or set up an insert-only policy for public access.
alter table contact_messages enable row level security;

create policy "Enable insert access for all users" on contact_messages
  for insert
  with check (true);
```

3. Click **Run** to execute the query. This creates the table and allows visitors to submit briefs into your database securely.

### Step 3: Connect Supabase API Keys to index.html
1. Go to **Project Settings** (gear icon) -> **API** in the Supabase dashboard.
2. Copy your **Project URL** and the **`anon` (public)** API key.
3. Open [index.html](file:///c:/Users/PC/Desktop/poprtfoli/index.html) and locate lines 359-360 at the top of the `<script>` section:
   ```javascript
   const SUPABASE_URL = 'YOUR_SUPABASE_URL';
   const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
   ```
4. Replace `YOUR_SUPABASE_URL` and `YOUR_SUPABASE_ANON_KEY` with the credentials you copied.
5. Save the file. The contact form will now securely insert messages into your Supabase database table before launching the mail client helper.

*Note: If these credentials are left as placeholders, the site automatically bypasses the database save and seamlessly triggers the pre-filled mail client directly so that messages are never lost.*

---

## 2. GitHub Upload & Deployment (GitHub Pages)

Follow these steps to upload your repository to GitHub and publish it using GitHub Pages:

### Step 1: Initialize Git Repository
Open your terminal (PowerShell, Git Bash, or CMD) inside the `poprtfoli` folder and run:
```bash
git init
git add .
git commit -m "Initialize premium AI Video & Motion Director portfolio"
```

### Step 2: Push Code to GitHub
1. Go to [GitHub](https://github.com/) and create a new repository named `portfolio`.
2. Do **not** initialize it with a README, `.gitignore`, or license.
3. Copy the push commands provided on your repository page and run them in your terminal:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
   *(Be sure to replace `YOUR_USERNAME` with your actual GitHub username).*

### Step 3: Deploy to GitHub Pages
1. On your GitHub repository page, click the **Settings** tab.
2. Select **Pages** from the left sidebar navigation menu.
3. Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
4. Under **Branch**, select `main` and `/ (root)` folder, then click **Save**.
5. After 1-2 minutes, refresh the page. You will see a banner at the top of the section showing your live URL: `https://YOUR_USERNAME.github.io/portfolio/`.
