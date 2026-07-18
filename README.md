# Mudassar Ali | AI Video & Motion Director Portfolio

A premium, high-performance portfolio and lead-generation portal for an Independent AI Video & Motion Director. Designed with modern aesthetics, fast page loading, and an integrated Admin Panel to manage incoming client leads.

---

## 📁 Repository Structure

The project has been organized into a professional, modular structure:

```
poprtfoli/
├── index.html          # Public portfolio landing page
├── admin.html          # Admin dashboard for lead management
├── PRD.md              # Product Requirements Document
├── README.md           # Documentation & Setup Guide
├── .gitignore          # Git exclusion rules
└── assets/
    ├── brand/
    │   └── logo.svg    # Brand logo & Favicon asset
    ├── css/
    │   ├── style.css   # Main website design & layout system
    │   └── admin.css   # Admin dashboard custom styling
    └── js/
        ├── app.js      # Public portfolio frontend logic
        └── admin.js    # Admin panel dashboard code
```

---

## ✨ Features & Upgrades

- **Visual Refresh**: Upgraded to a premium **Cosmic Obsidian & Electric Violet** color palette, tailored specifically for creative and AI motion director themes.
- **Modern Typography**: Replaced default fonts with **Syne** (for bold, artistic agency-grade headings) and **Plus Jakarta Sans** (for highly legible, premium body text).
- **Custom Budget Field**: Pre-defined budget dropdowns have been removed. Both forms (on-page and modal) feature a completely custom text input allowing clients to type any budget size (e.g. `$500`, `$5,000`, or `$10k+`).
- **Integrated Admin Dashboard**: Accessible via a subtle link in the website footer (`admin.html`). Allows managing leads stored in Supabase with statistics, search, filtering, CSV export, and email quick replies.
- **Performance Optimized**: Inline CSS/JS moved to external files to enable browser caching. Vimeo background video load is deferred until 1.4s after the window load event. Testimonials marquee uses GPU hardware-accelerated transitions.

---

## 🔧 Setup & Integrations

### 1. Supabase Database Setup

Follow these steps to store client briefs in your database:

1. Sign up/log in to [Supabase](https://supabase.com/).
2. Create a **New Project** and name it (e.g., `portfolio`).
3. Go to the **SQL Editor** on the left menu, click **New Query**, paste the following SQL command and click **Run**:

```sql
-- Create contact_messages table to store client briefs
create table contact_messages (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  brand text not null,
  email text not null,
  service text not null,
  budget text not null,  -- Stores the custom text budget input
  timeline text not null,
  brief text not null
);

-- Enable insert access for public submissions
alter table contact_messages enable row level security;

create policy "Enable insert access for all users" on contact_messages
  for insert
  with check (true);
```

4. Go to **Project Settings** (gear icon) -> **API** in the Supabase dashboard.
5. Copy your **Project URL** and the **`anon` (public)** API key.
6. Open [assets/js/app.js](file:///c:/Users/PC/Desktop/poprtfoli/assets/js/app.js) and [assets/js/admin.js](file:///c:/Users/PC/Desktop/poprtfoli/assets/js/admin.js) and locate the config at the top:
   ```javascript
   const SUPABASE_URL = 'YOUR_SUPABASE_URL';
   const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
   ```
7. Replace with your copied credentials and save the files.

*Note: If credentials are left as placeholders, form submissions will gracefully fall back to opening a pre-filled mailto brief in the client's email app.*

---

## 🔐 Admin Portal Credentials

The credentials for [admin.html](file:///c:/Users/PC/Desktop/poprtfoli/admin.html) are configured in `assets/js/admin.js`:
- **Username:** `mudassar`
- **Password:** `Mudassar@2026`

*To update these, modify the constants `ADMIN_USER` and `ADMIN_PASS` at the top of `assets/js/admin.js`.*

---

## 🚀 Local Running & Deployment

### Run Locally
Simply open `index.html` in any modern web browser or run a simple local web server:
```bash
npx serve .
```

### Deploy to GitHub Pages
1. Initialize git and commit files:
   ```bash
   git init
   git add .
   git commit -m "Refactor portfolio into clean folder structure and upgrade visual theme"
   ```
2. Link your GitHub repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/Mudassaralired/content_services.git
   git push -u origin main --force
   ```
3. Enable GitHub Pages:
   - Go to your repository **Settings** -> **Pages**.
   - Set the source to **Deploy from a branch**.
   - Select `main` branch and `/ (root)` folder and click **Save**.
