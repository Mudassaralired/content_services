# Product Requirement Document (PRD)
## AI Creative Portfolio & Lead Generation Website

### 1. Document Control
- **Project**: Mudassar Ali Portfolio (v3 -> v4)
- **Role**: AI Video & Motion Director
- **Status**: Production-Ready / Implementation Phase

---

### 2. Executive Summary & Overall Goal
The primary objective of this website is to serve as a high-end, premium portfolio and lead-generation portal for an Independent AI Video & Motion Director. The design, animation, performance, and user experience must meet the standards of premium creative agencies to attract ambitious, high-paying global brands.

---

### 3. Core Features & Functional Specifications

#### 3.1 Testimonials Section (Client Words)
To establish trust with enterprise clients, the testimonials section must be expanded into a dynamic social-proof engine.
* **Quantity**: At least **20 professional testimonials** from founders, marketing directors, and brand managers.
* **Auto Slider / Marquee**: 
  - Implementation of an infinite, continuous horizontal slider (marquee).
  - Designed using two rows moving in opposite directions for visual depth and premium feel.
  - Smooth animation using hardware-accelerated CSS translation (minimizing layout paint cycles).
  - Hovering over a testimonial card should pause the marquee so the user can easily read it.
* **Scroll Animation**:
  - Smooth fade-in and slide-up animations as the user scrolls, matching the website's existing aesthetic.
* **Card Details**:
  - Client Name
  - Company/Brand Name
  - Avatar Placeholder: Initials styled with a clean modern gradient matching the color palette.
  - Rating: 5-star visual indicator.
  - Service Category: E.g., Performance Creative, Product Storytelling, Motion Systems.
  - Brief Review: A concise, impactful testimonial about the results (e.g., lift in CTR, conversion rate, turnaround time).

#### 3.2 Email & Contact System
The lead generation funnel must be dual-purpose: immediate email generation and a secure backend form system.
* **Direct Professional Email Interface (`mailto`)**:
  - Triggered by clicking "Send Brief" or "Start Your Project".
  - Pre-fills the destination email: `banmance5@gmail.com`.
  - Automatically structures the subject line and email body with a brief template so the client can send requirements quickly.
* **Supabase Contact Form**:
  - A form integrated directly into the page collecting:
    - Name
    - Company / Brand
    - Email
    - Service (Dropdown)
    - Budget (Dropdown with tiers)
    - Timeline (Dropdown with ranges)
    - Project Brief (Textarea)
  - **Supabase Integration**: Details must be sent to a Supabase table (`contact_messages`) via the official JS CDN client.
  - **Graceful Fallback**: If Supabase credentials are not configured, the website must log a notice and gracefully execute the `mailto` fallback, ensuring 100% lead capture under any hosting condition.
  - **Email Notification**: Database triggers or webhooks (e.g., Supabase Edge Functions connected to Resend/SendGrid) can be configured to notify the owner when a new brief is stored.

#### 3.3 Performance Optimization
The site must be fast, scoring **95–100 on Lighthouse Performance** to maintain a premium feel.
* **Vimeo Video Loading Deferral**:
  - Previews of Vimeo videos must NOT load on page load.
  - Video playbacks/embeds must load dynamically via Intersection Observer (only when they are in viewport) or when clicked (for modal overlays), preventing heavy initial script execution.
* **Asset Lazy Loading**:
  - All images and thumbnail files must use `loading="lazy"`.
* **Resource Optimization**:
  - Use preconnect tags for external assets like Google Fonts and Vimeo domains.
  - Keep styling inside a single, highly compressed `<style>` block and minimize JS bundles.
  - Strictly manage layout dimensions to achieve zero Layout Shifts (CLS = 0).

#### 3.4 Quality Assurance & Responsiveness
* **Zero Console Errors**: All scripts must run cleanly without throwing runtime exceptions.
* **SEO & Metadata**: Proper title tags, meta descriptions, and Open Graph tags for optimal sharing.
* **Accessibility (a11y)**: Focus states, contrast ratios, and semantic elements (using `<header>`, `<main>`, `<section>`, `<footer>`, `<figure>`, `<dialog>`, etc.).
* **Responsive Layouts**: Flawless visual display from ultra-wide desktops down to 320px mobile screens.
