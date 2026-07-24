// ===========================
// SERVICE WORKER REGISTRATION
// ===========================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registered successfully:', reg.scope))
      .catch(err => console.warn('Service Worker registration failed:', err));
  });
}

// ===========================
// SUPABASE CONFIGURATION
// ===========================
const SUPABASE_URL = 'https://ftoaghmbibpkgkyonzbb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0b2FnaG1iaWJwa2dreW9uemJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwMTc4MzgsImV4cCI6MjA5OTU5MzgzOH0.KQowMR2Vt4MsbFnIJyneS7df0_zHzSrngyqcR5xpqB4';

let supabaseClient = null;

// Wait for Supabase script to load (loaded async)
function tryInitSupabase() {
  if (typeof supabase !== 'undefined') {
    try {
      supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    } catch (err) {
      console.warn('Supabase init failed:', err);
    }
  } else {
    setTimeout(tryInitSupabase, 300);
  }
}
tryInitSupabase();

// ===========================
// ===========================
// COMPLETE VIDEO CATALOG (40+ Projects)
// ===========================
const data = [
  // TOP FEATURED PROJECTS (Displayed First at Top)
  { id: 'autom', title: 'AUTOM Automotive CGI', cat: 'cgi', tag: 'CGI & 3D', role: 'Automotive CGI', tools: 'Full vehicle reveal, dynamic lighting', desc: 'Automotive CGI — Full vehicle reveal with dynamic lighting', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784881545/AUTOM_ym8ltz.mp4', featured: true },
  { id: 'perfume', title: 'Oura Fragrance Commercial', cat: 'commercial', tag: 'AI Commercial', role: 'AI Commercial', tools: 'Macro detail, cinematic grade', desc: 'Luxury fragrance film — Macro detail + cinematic grade', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532508/perfume_ad_d5urml.mp4', featured: true },
  { id: 'sonix', title: 'Sonix Smartwatch Reveal', cat: 'ugc', tag: 'UGC / Social', role: 'UGC / Social', tools: 'Hook-first 9:16 format, paid social', desc: 'UGC social ad — Hook-first 9:16 format for paid social', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784531745/SONIX_vwu5qm.mp4', featured: true },
  { id: 'realestate', title: 'Architectural Real Estate CGI', cat: 'cgi', tag: 'CGI & 3D', role: 'CGI & 3D Walkthrough', tools: 'Architectural render, luxury reveal', desc: 'Architectural CGI walkthrough — Luxury property reveal', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784531684/raw1111_snia7k.mp4', featured: true },
  { id: 'beverage', title: 'Sprite Beverage Spec', cat: 'product', tag: 'Product Film', role: 'Product Spec Film', tools: 'Liquid simulation, macro detail', desc: 'Product spec film — Liquid simulation + macro detail', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532504/sprite_ad_fsjxlj.mp4', featured: true },
  { id: 'saas', title: 'HR SaaS Dashboard Visual', cat: 'product', tag: 'Product Film', role: 'SaaS Interface Animation', tools: 'UI motion, dashboard showcase', desc: 'SaaS interface animation — Dashboard feature showcase', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784533025/hr_add_mpsskk.mp4', featured: true },

  // COMPLETE CATALOG PROJECTS (Remaining Portfolio Items)
  { id: '1', title: 'Automotive Spec Film', cat: 'cgi', tag: 'CGI & 3D', role: 'Concept, direction', tools: 'AI generation, After Effects', desc: 'A cinematic automotive concept built around dark moody lighting and precision metallic curves.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532520/car_seat_ad_crqofg.mp4' },
  { id: '4', title: 'Ond Onde Fragrance', cat: 'commercial', tag: 'AI Commercial', role: 'Luxury fragrance ad', tools: 'Micro-particles, smoke FX', desc: 'Luxury fragrance ad focusing on micro-particles, smoke effects, and premium gold-black assets.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784531651/ond_onde_pf_ad_lpn5ub.mp4' },
  { id: '5', title: 'Aura Glow Spec', cat: 'cgi', tag: 'CGI & 3D', role: 'Studio lighting exploration', tools: 'Macro cosmetics texture', desc: 'High-contrast studio lighting exploration with macro cosmetics texture and glowing embers.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784531826/afe_vuephf.mp4' },
  { id: '6', title: 'Buly Skincare Kid', cat: 'commercial', tag: 'AI Commercial', role: 'Soft-toned commercial', tools: 'AI art direction', desc: 'Soft-toned commercial balancing clean aesthetics with products for delicate skin.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784531854/buly_child_vid_dgn3on.mp4' },
  { id: '7', title: 'ByteFlow Hosting', cat: 'ugc', tag: 'UGC / Social', role: 'UGC social ad', tools: 'AI voice, subtitles', desc: 'Dynamic, text-captioned UGC social ad highlighting modern SaaS hosting speed.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784531991/hosting_ad_tw5wah.mp4' },
  { id: '8', title: 'Mushroom Gummies Ad', cat: 'ugc', tag: 'UGC / Social', role: 'High-energy social ad', tools: 'Fast cuts, overlay hooks', desc: 'Fun, high-energy UGC ad with fast cuts, overlays, and direct hook messaging.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532024/mashroom_gummis_ad_svnawu.mp4' },
  { id: '9', title: 'RedBull Energy Ad', cat: 'commercial', tag: 'AI Commercial', role: 'Commercial spot', tools: 'Motion graphics, liquid FX', desc: 'Fast-paced commercial ad blending dynamic motion graphics with beverage CGI.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532058/redbull_ad3_yhfpe6.mp4' },
  { id: '10', title: 'Pure Shilajit Ad', cat: 'ugc', tag: 'UGC / Social', role: 'Wellness UGC ad', tools: 'Captions, product placement', desc: 'Wellness UGC social ad showcasing product application and clean text formatting.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532090/shilajit_ad_ekglrd.mp4' },
  { id: '11', title: 'Shilajit Promo', cat: 'commercial', tag: 'AI Commercial', role: 'Commercial promo', tools: 'Amber lighting, particle FX', desc: 'Dark, premium commercial highlighting raw texture, amber lighting, and product benefits.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532095/shilajit_promo_m4a04r.mp4' },
  { id: '12', title: 'Teacupu Matcha Ad', cat: 'ugc', tag: 'UGC / Social', role: 'Organic social ad', tools: 'Voiceover, pacing', desc: 'Organic green-themed UGC social campaign focusing on visual taste and pacing.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532144/teacupu_ad_w7edtu.mp4' },
  { id: '13', title: 'CGI Visual Loop', cat: 'cgi', tag: 'CGI & 3D', role: 'CGI simulation', tools: 'Refraction, morphing 3D', desc: 'Looping CGI simulation exploring light reflections and dynamic morphing spheres.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532151/0606_ymwwmb.mp4' },
  { id: '14', title: 'Black Friday Promo', cat: 'commercial', tag: 'AI Commercial', role: 'Kinetic promo', tools: 'Typography, orange grade', desc: 'High-contrast commercial promo with bold orange styling and kinetic typography.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532173/black_friday_ad_rx149h.mp4' },
  { id: '15', title: 'Baby Skincare Ad', cat: 'ugc', tag: 'UGC / Social', role: 'Skincare UGC', tools: 'Soft lighting, macro detail', desc: 'Soft-lit UGC social ad highlighting organic components and soothing application.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532218/baby_product_ad_lcy64n.mp4' },
  { id: '16', title: 'Avatar Visual Concept', cat: 'cgi', tag: 'CGI & 3D', role: '3D character render', tools: 'Subsurface scattering, cosmic atmosphere', desc: '3D character render studying skin lighting and ambient cosmic atmosphere.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532227/avatar_vid_mxednh.mp4' },
  { id: '17', title: 'Redmi Buds Ad', cat: 'commercial', tag: 'AI Commercial', role: 'Tech commercial', tools: 'Product explosion, sound design', desc: 'Modern tech commercial showcasing audio performance, fit, and noise-cancelling tech.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532289/in_redmib_ecxq2i.mp4' },
  { id: '18', title: 'Magnesium Drops Ad', cat: 'ugc', tag: 'UGC / Social', role: 'Supplement social ad', tools: 'AI presenter, captions', desc: 'Direct-to-camera UGC social ad discussing supplement benefits and active lifestyle.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532317/magnesio_ad_mzhwzw.mp4' },
  { id: '19', title: 'TikTok Shop Ad', cat: 'ugc', tag: 'UGC / Social', role: 'E-commerce social ad', tools: 'Interactive overlays, subtitles', desc: 'Highly interactive social-first UGC ad with visual tags, subtitles, and price overlays.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532373/toktok_shop_ad_nur1a2.mp4' },
  { id: '20', title: 'Freebies Promo', cat: 'commercial', tag: 'AI Commercial', role: 'Lifestyle commercial', tools: 'Bundle showcase, bright color', desc: 'Bright, lifestyle commercial film focused on product bundles and rewards.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532440/frebies_with_product_ad_xh6itc.mp4' },
  { id: '23', title: 'Face Wash Social Ad', cat: 'ugc', tag: 'UGC / Social', role: 'Foam texture ad', tools: 'Water splash FX, macro detail', desc: 'Skincare social ad showcasing texture foam, water splash, and usage instructions.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532513/wash_product_ad_qljycf.mp4' },
  { id: '24', title: 'Hulk Concept Ad', cat: 'cgi', tag: 'CGI & 3D', role: 'Dark CGI concept', tools: 'Particle physics, heavy impact', desc: 'Dark CGI motion concept exploring weight, impact, and particle physics.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532524/paliment_vid_hulk_sgvhwn.mp4' },
  { id: '25', title: 'Visa Card Ad', cat: 'commercial', tag: 'AI Commercial', role: 'Fintech commercial', tools: 'Sliding UI, minimal style', desc: 'Sleek, minimalist payment-card commercial with sliding transitions and UI graphics.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532531/visa_cnsl_ad_mfmjke.mp4' },
  { id: '26', title: 'Hemoo Him Ad', cat: 'ugc', tag: 'UGC / Social', role: 'Grooming UGC ad', tools: 'Fast hook, text overlay', desc: 'Grooming UGC ad designed to capture attention in the first 3 seconds of scrolling.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532534/hemoo_him_ad_qptkya.mp4' },
  { id: '27', title: 'Smoothie Green Ad', cat: 'commercial', tag: 'AI Commercial', role: 'Health commercial', tools: 'Fresh ingredient FX', desc: 'Clean, light commercial focused on fresh ingredients and healthy energy.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532557/smothi_green_ad_h5wma3.mp4' },
  { id: '28', title: 'Ethnic Kitchen Ad', cat: 'ugc', tag: 'UGC / Social', role: 'Food social ad', tools: 'Recipe shots, voiceover', desc: 'Food UGC ad showcasing recipe preparation, close macro shots, and voiceover.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532560/ethnikichen_pv65pm.mp4' },
  { id: '29', title: 'Air Filter CGI', cat: 'cgi', tag: 'CGI & 3D', role: '3D filter animation', tools: 'Particle flow, glass breakdown', desc: '3D CGI film showing air particles passing through multi-stage filter systems.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532595/air_filer_add_majrpn.mp4' },
  { id: '30', title: 'Dressing Room Promo', cat: 'commercial', tag: 'AI Commercial', role: 'Fashion promo', tools: 'Lighting overlays, fabric movement', desc: 'High-contrast fashion commercial showcasing lighting overlays and fabric movements.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532607/dressing_add_td7ndl.mp4' },
  { id: '31', title: 'Churaili Ad', cat: 'ugc', tag: 'UGC / Social', role: 'Social media ad', tools: 'Visual overlays, captions', desc: 'Churaili concept social ad with visual overlays and dynamic subtitle templates.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532611/churaili_ad_izpqty.mp4' },
  { id: '32', title: 'Fat Loss System', cat: 'ugc', tag: 'UGC / Social', role: 'Fitness UGC ad', tools: 'Before/after overlay', desc: 'Before/after lifestyle UGC detailing fitness progress and nutrition guides.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532704/fat_lose_add_dl9ahb.mp4' },
  { id: '36', title: 'Luxury Jewelry CGI', cat: 'cgi', tag: 'CGI & 3D', role: 'Jewelry spec film', tools: 'Liquid metal, diamond refraction', desc: 'Exquisite jewelry spec film, demonstrating liquid metals and shining diamond refractions.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784533279/jeulary_add_cgtj3d.mp4' },
  { id: '37', title: 'Smart Kitchen CGI', cat: 'cgi', tag: 'CGI & 3D', role: 'Architectural CGI', tools: 'Lighting design, interior render', desc: 'Architectural CGI showing automated kitchen setups and modern lighting designs.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784533353/kitchen_add_btixan.mp4' },
  { id: '38', title: 'Peptoid Bottle Ad', cat: 'product', tag: 'Product Film', role: 'Bottle visualizer', tools: 'Studio lighting, 3D label', desc: '3D product visualization showcasing label graphics, material textures, and studio lighting.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784534534/peptoid_add_s1y3ov.mp4' },
  { id: '39', title: 'Speaker CGI Reveal', cat: 'cgi', tag: 'CGI & 3D', role: 'Audio spec film', tools: 'Soundwave simulation, mesh explosion', desc: 'Premium audio speaker launch animation featuring expanding sound waves and meshes.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784534738/speeker_add_p7e6ct.mp4' },
  { id: '40', title: 'Book Title Concept', cat: 'commercial', tag: 'AI Commercial', role: 'Book trailer', tools: 'Leather texture, gold foil', desc: 'Cinematic book release trailer, detailing leather binding textures and gold foil lettering.', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784534838/book_title_ikyp4q.mp4' }
];

// ===========================
// RENDER PORTFOLIO GRID
// ===========================
const projectsEl = document.getElementById('projects');
let isExpanded = false;

function renderGallery(filter = 'all') {
  if (!projectsEl) return;
  projectsEl.innerHTML = '';

  data.forEach((p, idx) => {
    const isFeatured = !!p.featured;
    const isVisible = filter === 'all' ? (isExpanded || isFeatured) : (p.cat === filter);

    const card = document.createElement('div');
    card.className = `card reveal ${!isVisible ? 'hidden-card' : ''}`;
    card.style.display = isVisible ? 'flex' : 'none';
    card.dataset.category = p.cat;
    card.tabIndex = 0;
    card.setAttribute('data-cursor', '');
    card.setAttribute('aria-label', `Watch ${p.title}`);

    const posterUrl = p.url.replace(/\.mp4$/, '.jpg').replace('/video/upload/', '/video/upload/so_2,c_fill,w_640,h_360,q_auto,f_jpg/');

    card.innerHTML = `
      <div class="card-media">
        <video muted loop playsinline preload="metadata" poster="${posterUrl}">
          <source src="${p.url}" type="video/mp4" />
        </video>
      </div>
      <div class="card-info">
        <span class="tag">${p.tag}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>
    `;

    const videoEl = card.querySelector('video');

    card.addEventListener('mouseenter', () => {
      if (videoEl) videoEl.play().catch(() => {});
    });

    card.addEventListener('mouseleave', () => {
      if (videoEl) {
        videoEl.pause();
        videoEl.currentTime = 0;
      }
    });

    card.addEventListener('click', () => openCase(p));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCase(p);
      }
    });

    projectsEl.appendChild(card);
  });
}

if (projectsEl) {
  renderGallery();
}

// Toggle All 40+ Projects Button Handler
const toggleBtn = document.getElementById('toggleAllProjects');
if (toggleBtn) {
  toggleBtn.onclick = () => {
    isExpanded = !isExpanded;
    toggleBtn.textContent = isExpanded ? 'Show Featured 6 ↑' : 'Show All 40+ Projects ↓';
    const activeFilter = document.querySelector('.filter.active')?.dataset.filter || 'all';
    renderGallery(activeFilter);
  };
}

// Filter Tabs Handler
document.querySelectorAll('.filter').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.filter').forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    if (f !== 'all') isExpanded = true;
    renderGallery(f);
  };
});

// ===========================
// SCROLL REVEAL (Repeated Entry/Exit)
// ===========================
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
    } else {
      // Reset animation when element leaves the screen
      e.target.classList.remove('in');
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up, .reveal-scale')
  .forEach(x => revealObs.observe(x));

// ===========================
// HEADER SCROLL & PROGRESS
// ===========================
const headerEl = document.getElementById('header');
const progressEl = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const sy = window.scrollY;
  headerEl.classList.toggle('scrolled', sy > 18);
  if (progressEl) {
    const h = document.documentElement,
          b = document.body,
          sh = 'scrollHeight';
    const pct = sy / (h[sh] - h.clientHeight) * 100;
    progressEl.style.width = pct + '%';
  }
}, { passive: true });

// ===========================
// MOBILE NAV
// ===========================
const hambEl = document.getElementById('hamb');
const navlinksEl = document.getElementById('navlinks');
hambEl.onclick = () => {
  const isOpen = navlinksEl.classList.toggle('open');
  hambEl.setAttribute('aria-expanded', isOpen);
  hambEl.textContent = isOpen ? '✕' : '☰';
};
navlinksEl.querySelectorAll('a').forEach(a => a.onclick = () => {
  navlinksEl.classList.remove('open');
  hambEl.textContent = '☰';
  hambEl.setAttribute('aria-expanded', 'false');
});

// ===========================
// EMAIL MODAL
// ===========================
const emailOverlay = document.getElementById('emailModalOverlay');

function openEmailModal() {
  emailOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('mf-name').focus();
}
function closeEmailModal() {
  emailOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('openEmailModal').addEventListener('click', openEmailModal);
const openBtn2 = document.getElementById('openEmailModal2');
if (openBtn2) openBtn2.addEventListener('click', openEmailModal);
document.getElementById('emailModalClose').addEventListener('click', closeEmailModal);
document.getElementById('emailModalClose2').addEventListener('click', closeEmailModal);
emailOverlay.addEventListener('click', e => { if(e.target === emailOverlay) closeEmailModal(); });
document.addEventListener('keydown', e => { if(e.key==='Escape' && emailOverlay.classList.contains('open')) closeEmailModal(); });

// Modal form submission
document.getElementById('modalForm').onsubmit = async (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  await handleFormSubmit(f, 'modalFormStatus', 'modalSubmitBtn');
};

// ===========================
// CONTACT FORM SUBMISSION
// ===========================
document.getElementById('contactForm').onsubmit = async (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  await handleFormSubmit(f, 'formStatus', 'submitBtn');
};

async function handleFormSubmit(formData, statusId, btnId) {
  const statusEl = document.getElementById(statusId);
  const submitEl = document.getElementById(btnId);

  // --- Collect values ---
  const name     = (formData.get('name')     || '').trim();
  const brand    = (formData.get('brand')    || formData.get('company') || '').trim();
  const email    = (formData.get('email')    || '').trim();
  const service  = (formData.get('service')  || '').trim();
  const budget   = (formData.get('budget')   || '').trim();
  const timeline = (formData.get('timeline') || '').trim();
  const brief    = (formData.get('brief')    || '').trim();

  // --- Client-side Validation ---
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name) {
    statusEl.textContent = '⚠ Please enter your name.';
    statusEl.style.color = 'var(--accent)';
    return;
  }
  if (!email || !emailRegex.test(email)) {
    statusEl.textContent = '⚠ Please enter a valid email address.';
    statusEl.style.color = 'var(--accent)';
    return;
  }
  if (!brief) {
    statusEl.textContent = '⚠ Please write a short project brief.';
    statusEl.style.color = 'var(--accent)';
    return;
  }

  // --- UI: loading state ---
  statusEl.textContent = '⏳ Saving your brief…';
  statusEl.style.color = 'var(--soft)';
  if (submitEl) { submitEl.disabled = true; submitEl.style.opacity = '.6'; }

  let dbSaved = false;

  // --- Supabase save (with retry once) ---
  const tryInsert = async () => {
    if (!supabaseClient) return false;
    try {
      const { error } = await supabaseClient
        .from('contact_messages')
        .insert([{ name, brand, email, service, budget, timeline, brief, created_at: new Date().toISOString() }]);
      if (error) { console.warn('Supabase error:', error.message); return false; }
      return true;
    } catch (err) {
      console.warn('Supabase exception:', err);
      return false;
    }
  };

  dbSaved = await tryInsert();
  // Retry once if Supabase client was still loading
  if (!dbSaved && !supabaseClient) {
    await new Promise(r => setTimeout(r, 800));
    tryInitSupabase();
    await new Promise(r => setTimeout(r, 600));
    dbSaved = await tryInsert();
  }

  // --- Build pre-filled mailto ---
  const timelineLabels = {
    immediate:'Immediate (< 2 weeks)',
    one_month:'Within 1 month',
    one_two_months:'1–2 months',
    flexible:'Flexible'
  };
  const timelineText = timelineLabels[timeline] || timeline;

  const subject = encodeURIComponent(`Project inquiry from ${brand || name}`);
  const body = encodeURIComponent(
    `Hello Mudassar,\n\nProject brief from ${name}:\n\n` +
    `— Name: ${name}\n` +
    `— Company: ${brand || 'N/A'}\n` +
    `— Email: ${email}\n` +
    `— Service: ${service || 'N/A'}\n` +
    `— Budget: ${budget || 'N/A'}\n` +
    `— Timeline: ${timelineText || 'N/A'}\n\n` +
    `Project Brief:\n${brief}\n\n` +
    `Regards,\n${name}`
  );

  // --- Final UI feedback + open email ---
  setTimeout(() => {
    if (submitEl) { submitEl.disabled = false; submitEl.style.opacity = '1'; }
    if (dbSaved) {
      statusEl.textContent = '✓ Brief saved to database! Opening your email app…';
      statusEl.style.color = 'var(--ok)';
    } else {
      statusEl.textContent = '✓ Opening your email app with your brief…';
      statusEl.style.color = 'var(--soft)';
    }
    window.location.href = `mailto:banmance5@gmail.com?subject=${subject}&body=${body}`;
  }, 900);
}

// ===========================
// SMOOTH CURSOR
// ===========================
if (!isTouch) {
  const cur = document.getElementById('cursor');
  let cx = innerWidth/2, cy = innerHeight/2, tx = cx, ty = cy;
  window.addEventListener('mousemove', e => { tx=e.clientX; ty=e.clientY; }, { passive:true });
  (function loop() {
    cx += (tx-cx) * .25;
    cy += (ty-cy) * .25;
    cur.style.left = cx + 'px';
    cur.style.top  = cy + 'px';
    requestAnimationFrame(loop);
  })();
  document.addEventListener('mouseover', e => { if(e.target.closest('[data-cursor]')) cur.classList.add('big'); });
  document.addEventListener('mouseout',  e => { if(e.target.closest('[data-cursor]')) cur.classList.remove('big'); });
}
