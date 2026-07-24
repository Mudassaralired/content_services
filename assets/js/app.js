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
// CURATED PORTFOLIO DATA (6 Items)
// ===========================
const data = [
  {
    id: 'autom',
    title: 'AUTOM',
    cat: 'cgi',
    tag: 'CGI & 3D',
    role: 'Automotive CGI',
    tools: 'Full vehicle reveal, dynamic lighting',
    desc: 'Automotive CGI — Full vehicle reveal with dynamic lighting',
    url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784881545/AUTOM_ym8ltz.mp4'
  },
  {
    id: 'perfume',
    title: 'PERFUME',
    cat: 'commercial',
    tag: 'AI Commercial',
    role: 'AI Commercial',
    tools: 'Macro detail, cinematic grade',
    desc: 'Luxury fragrance film — Macro detail + cinematic grade',
    url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532508/perfume_ad_d5urml.mp4'
  },
  {
    id: 'sonix',
    title: 'SONIX',
    cat: 'ugc',
    tag: 'UGC / Social',
    role: 'UGC / Social',
    tools: 'Hook-first 9:16 format, paid social',
    desc: 'UGC social ad — Hook-first 9:16 format for paid social',
    url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784531745/SONIX_vwu5qm.mp4'
  },
  {
    id: 'realestate',
    title: 'REAL ESTATE',
    cat: 'cgi',
    tag: 'CGI & 3D',
    role: 'CGI & 3D Walkthrough',
    tools: 'Architectural render, luxury reveal',
    desc: 'Architectural CGI walkthrough — Luxury property reveal',
    url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784531684/raw1111_snia7k.mp4'
  },
  {
    id: 'beverage',
    title: 'BEVERAGE',
    cat: 'product',
    tag: 'Product Film',
    role: 'Product Spec Film',
    tools: 'Liquid simulation, macro detail',
    desc: 'Product spec film — Liquid simulation + macro detail',
    url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532504/sprite_ad_fsjxlj.mp4'
  },
  {
    id: 'saas',
    title: 'SAAS',
    cat: 'product',
    tag: 'Product Film',
    role: 'SaaS Interface Animation',
    tools: 'UI motion, dashboard showcase',
    desc: 'SaaS interface animation — Dashboard feature showcase',
    url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784533025/hr_add_mpsskk.mp4'
  }
];

// ===========================
// RENDER PORTFOLIO GRID
// ===========================
const projectsEl = document.getElementById('projects');

if (projectsEl) {
  projectsEl.innerHTML = '';
  data.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card reveal';
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

// ===========================
// CASE STUDY DIALOG (LIGHTBOX)
// ===========================
const caseDialog = document.getElementById('caseDialog');
const caseVideo  = document.getElementById('caseVideo');

function openCase(p) {
  if (!caseDialog) return;
  document.getElementById('caseLabel').textContent = p.tag;
  document.getElementById('caseTitle').textContent = p.title;
  document.getElementById('caseDesc').textContent  = p.desc;
  document.getElementById('caseRole').textContent  = p.role;
  document.getElementById('caseTools').textContent = p.tools;
  if (caseVideo) {
    caseVideo.src = p.url;
    caseVideo.play().catch(() => {});
  }
  caseDialog.showModal();
}

function closeCase() {
  if (caseDialog) caseDialog.close();
  if (caseVideo) {
    caseVideo.pause();
    caseVideo.src = '';
  }
}

const caseCloseBtn = document.getElementById('caseClose');
if (caseCloseBtn) caseCloseBtn.onclick = closeCase;
if (caseDialog) {
  caseDialog.addEventListener('click', e => { if (e.target === caseDialog) closeCase(); });
  caseDialog.addEventListener('close', () => { if (caseVideo) { caseVideo.pause(); caseVideo.src = ''; } });
}

// ===========================
// WORK FILTERS
// ===========================
document.querySelectorAll('.filter').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.filter').forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.card').forEach(card => {
      const match = f === 'all' || card.dataset.category === f;
      card.style.display = match ? 'flex' : 'none';
    });
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
