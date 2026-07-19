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
// PROJECT DATA
// ===========================
const data = [
  {id:'1209488036',title:'AUTOM',cat:'motion',label:'Automotive CGI',role:'Concept, direction, generation, edit',tools:'AI generation, After Effects, Resolve',desc:'A luxury automotive concept built around controlled reflections, dramatic camera movement and a restrained night grade.',x:'72%',y:'22%',c:'oklch(52% .12 250)',layout:'feature'},
  {id:'1209488035',title:'NEXUS',cat:'motion',label:'3D Product Film',role:'Concept, CGI direction, animation, edit',tools:'AI generation, 3D CGI, After Effects',desc:'A smartwatch reveal using precise metallic detail and futuristic product language to make engineering feel desirable.',x:'50%',y:'35%',c:'oklch(58% .14 235)',layout:'side'},
  {id:'1209489530',title:'PERFUME',cat:'product',label:'Luxury Commercial',role:'Concept, art direction, generation, edit',tools:'AI generation, particle FX, Resolve',desc:'A fragrance film shaped by smoke, liquid and macro texture, designed to communicate mood before product detail.',x:'74%',y:'24%',c:'oklch(63% .13 345)',layout:''},
  {id:'1209489528',title:'SONIX',cat:'ugc',label:'UGC Social Ad',role:'Hook, script, AI talent, edit',tools:'AI talent, voice, CapCut',desc:'A social-first UGC concept with direct opening language, natural delivery and caption-led pacing.',x:'76%',y:'24%',c:'oklch(64% .13 45)',layout:''},
  {id:'1209488038',title:'CREAMI',cat:'product',label:'Skincare Product Film',role:'Concept, art direction, generation, edit',tools:'AI generation, After Effects, Resolve',desc:'A clean skincare film balancing fresh texture, soft studio light and product-focused macro detail.',x:'28%',y:'28%',c:'oklch(76% .08 145)',layout:'side'},
  {id:'1209489529',title:'REALSTATE',cat:'motion',label:'Real Estate CGI',role:'Concept, visual direction, generation, edit',tools:'AI generation, arch viz, Resolve',desc:'A real estate concept that sells atmosphere and space through warm light, calm motion and deliberate detail.',x:'30%',y:'22%',c:'oklch(70% .07 72)',layout:'feature'},
  {id:'1209488037',title:'BEVRAGE',cat:'product',label:'Beverage Product Film',role:'Concept, liquid direction, generation, edit',tools:'AI generation, liquid FX, Resolve',desc:'A tactile beverage film using amber light, close detail and energetic liquid motion for a premium product reveal.',x:'26%',y:'20%',c:'oklch(67% .13 62)',layout:'archive'},
  {id:'1209489531',title:'SAAS',cat:'motion',label:'SaaS Product Visual',role:'Concept, UI motion, generation, edit',tools:'AI generation, UI motion, After Effects',desc:'A SaaS visual story combining interface motion and device scenes to turn software benefits into something concrete.',x:'76%',y:'26%',c:'oklch(60% .12 225)',layout:'archive'}
];

// ===========================
// TESTIMONIALS DATA (22 entries)
// ===========================
const testimonialsData = [
  { name:'Sarah K.', role:'Marketing Director', company:'AuraGlow', text:'Three UGC variations in 48 hours, and our CTR jumped 340%. The AI workflow is genuinely next-level.', rating:5, cat:'Performance Creative' },
  { name:'Marcus R.', role:'Founder', company:'Nomad Kit', text:'Finally someone who gets that AI video is about the idea, not the tech. The product film lifted our conversion by 28%.', rating:5, cat:'Product Storytelling' },
  { name:'Emma J.', role:'Head of Brand', company:'ByteFlow', text:'The 3D motion system he built for our SaaS dashboard became our entire brand identity. Clean, fast, perfectly on-brief.', rating:5, cat:'Motion Systems' },
  { name:'Liam H.', role:'Head of Growth', company:'Apex Drinks', text:'Hook CTR went from 1.8% to 6.2% on our main product line. Incredible execution and creative insights throughout.', rating:5, cat:'Performance Creative' },
  { name:'Sophia V.', role:'Creative Lead', company:'Velo Athletics', text:'Stunning visual fidelity and ultra-fast turnarounds. We got our high-res social edits in under 48 hours — remarkable.', rating:5, cat:'Performance Creative' },
  { name:'Arjun K.', role:'CMO', company:'Solas Energy', text:'The AI commercials look incredibly premium — no mass-produced feel whatsoever. A game changer for our digital ads.', rating:5, cat:'Product Storytelling' },
  { name:'Chloe M.', role:'Growth Marketer', company:'Zenith Sleep', text:'We scaled our ad spend by 3x after implementing the hook variations he generated. Highly responsive and creative.', rating:5, cat:'Performance Creative' },
  { name:'David P.', role:'Director of Brand', company:'Lumina Tech', text:'His understanding of lighting and pacing in motion graphics is second to none. Extremely polished and professional assets.', rating:5, cat:'Motion Systems' },
  { name:'Emily W.', role:'Co-founder', company:'Kora Skincare', text:'A premium aesthetic that stands out in a crowded market. Very impressed by the art direction and careful tone.', rating:5, cat:'Product Storytelling' },
  { name:'Robert T.', role:'Creative Director', company:'Orbit Tech', text:'Excellent communication and perfect alignment with our brand guidelines. Flawless 3D execution on every deliverable.', rating:5, cat:'Motion Systems' },
  { name:'Isabella L.', role:'Marketing Director', company:'Haven Properties', text:'The real estate CGI loops elevated our luxury property listings significantly. Exceptional response from high-end clients.', rating:5, cat:'Motion Systems' },
  { name:'Nathan J.', role:'Ad Buyer', company:'FlexFit', text:'He engineered ad hooks that captured attention within the first 2 seconds. Our CPA dropped significantly across campaigns.', rating:5, cat:'Performance Creative' },
  { name:'Olivia S.', role:'Creative Producer', company:'Echo Media', text:'Smooth collaboration, direct edits, and top-tier sound design integration. A true professional to work with.', rating:5, cat:'Motion Systems' },
  { name:'James B.', role:'Founder', company:'Horizon Gear', text:'Our Kickstarter campaign reached its goal in 3 days thanks to his high-fidelity product launch video. Transformative.', rating:5, cat:'Product Storytelling' },
  { name:'Mia R.', role:'E-commerce Director', company:'Shift Apparel', text:'His UGC style ads look authentic but feel high-end. Exactly what modern direct-to-consumer brands need in 2025.', rating:5, cat:'Performance Creative' },
  { name:'Ethan G.', role:'Brand Manager', company:'Bubble & Co', text:'Top-class CGI. The liquid simulation for our carbonated water launch was flawless, clean, and incredibly appealing.', rating:5, cat:'Motion Systems' },
  { name:'Ava P.', role:'VP Product', company:'CloudSync', text:'The SaaS interface animation looks fluid and makes complex dashboard features easy to grasp for new users.', rating:5, cat:'Motion Systems' },
  { name:'Lucas D.', role:'Media Buyer', company:'Bloom Digital', text:'We saw a 45% reduction in CPA when we launched his video ads. Responsive, sharp, and delivered precisely on time.', rating:5, cat:'Performance Creative' },
  { name:'Zoe K.', role:'Director', company:'Volt Motors', text:'He brought our vision to life with dramatic camera movements and a gorgeous night grade. Simply outstanding work.', rating:5, cat:'Product Storytelling' },
  { name:'Daniel C.', role:'Content Lead', company:'Neo Fin', text:'Outstanding motion graphics work. He created a full library of reusable assets for our social campaigns.', rating:5, cat:'Motion Systems' },
  { name:'Grace T.', role:'Founder', company:'NextLevel AI', text:'The AI-driven talent looks incredibly natural. Saved us thousands in traditional studio production costs.', rating:5, cat:'Performance Creative' },
  { name:'Alexander F.', role:'Head of Marketing', company:'Purely', text:'Highly responsive and deeply knowledgeable about the craft. The final outputs exceeded all of our expectations.', rating:5, cat:'Product Storytelling' }
];

// ===========================
// RENDER PROJECTS
// ===========================
const projectsEl = document.getElementById('projects');
let expanded = false, activeProject = null, hoverTimer;
const isTouch = matchMedia('(hover:none)').matches;

data.forEach(p => {
  const el = document.createElement('article');
  el.className = `project ${p.layout==='feature'?'feature':p.layout==='side'?'side':p.layout==='archive'?'archive':''} reveal`;
  el.dataset.cat = p.cat;
  el.dataset.id = p.id;
  el.tabIndex = 0;
  el.setAttribute('data-cursor','');
  el.setAttribute('aria-label',`Watch ${p.title}`);
  el.innerHTML = `
    <div class="poster fallback" data-mark="${p.title}" style="--x:${p.x};--y:${p.y};--c:${p.c}"></div>
    <div class="preview"></div>
    <div class="skeleton"></div>
    <div class="shade"></div>
    <span class="pill">${p.label}</span>
    <span class="tapcue">Tap to open</span>
    <div class="project-meta">
      <div><h3>${p.title}</h3><p>Independent concept</p></div>
      <span class="play">▶</span>
    </div>`;
  projectsEl.appendChild(el);

  // Lazy load Vimeo poster via IntersectionObserver
  const posterObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadPoster(el, p);
        posterObs.unobserve(el);
      }
    });
  }, { rootMargin:'200px' });
  posterObs.observe(el);

  if (!isTouch) {
    el.addEventListener('mouseenter', () => { hoverTimer = setTimeout(() => startPreview(el,p), 200); });
    el.addEventListener('mouseleave', () => { clearTimeout(hoverTimer); stopPreview(el); });
  }
  el.addEventListener('click', () => openCase(p));
  el.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){e.preventDefault();openCase(p);} });
});

async function loadPoster(el, p) {
  try {
    const r = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${p.id}&width=1280`);
    if (!r.ok) throw 0;
    const j = await r.json();
    const poster = el.querySelector('.poster');
    poster.style.backgroundImage = `url('${j.thumbnail_url}')`;
    poster.classList.remove('fallback');
  } catch(e) {}
}

function startPreview(el, p) {
  if (activeProject && activeProject !== el) stopPreview(activeProject);
  activeProject = el;
  el.classList.add('loading');
  el.querySelector('.preview').innerHTML = `<iframe src="https://player.vimeo.com/video/${p.id}?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&dnt=1" allow="autoplay; fullscreen; picture-in-picture" title="${p.title} preview" loading="lazy"></iframe>`;
  setTimeout(() => { el.classList.remove('loading'); el.classList.add('playing'); }, 500);
}

function stopPreview(el) {
  if (!el) return;
  el.classList.remove('playing','loading');
  setTimeout(() => { const x = el.querySelector('.preview'); if(x) x.innerHTML=''; }, 280);
  if (activeProject === el) activeProject = null;
}

// ===========================
// CASE STUDY DIALOG
// ===========================
const caseDialog = document.getElementById('caseDialog');
const caseFrame  = document.getElementById('caseFrame');

function openCase(p) {
  if (activeProject) stopPreview(activeProject);
  document.getElementById('caseLabel').textContent = p.label;
  document.getElementById('caseTitle').textContent = p.title;
  document.getElementById('caseDesc').textContent  = p.desc;
  document.getElementById('caseRole').textContent  = p.role;
  document.getElementById('caseTools').textContent = p.tools;
  caseFrame.src = `https://player.vimeo.com/video/${p.id}?autoplay=1&muted=0&controls=1&title=0&byline=0&portrait=0&dnt=1`;
  caseDialog.showModal();
}

function closeCase() { caseDialog.close(); caseFrame.src=''; }
document.getElementById('caseClose').onclick = closeCase;
caseDialog.addEventListener('click', e => { if(e.target===caseDialog) closeCase(); });
caseDialog.addEventListener('close', () => caseFrame.src='');

// ===========================
// WORK FILTERS & SHOW MORE
// ===========================
document.getElementById('more').onclick = function() {
  expanded = !expanded;
  document.querySelectorAll('.project.archive').forEach(x => x.classList.toggle('show', expanded));
  this.textContent = expanded ? 'Show featured 6' : 'View all 8 projects';
  document.getElementById('count').textContent = expanded ? '08 projects' : '06 featured / 08 total';
};

document.querySelectorAll('.filter').forEach(btn => btn.onclick = () => {
  document.querySelectorAll('.filter').forEach(x => x.classList.remove('active'));
  btn.classList.add('active');
  const f = btn.dataset.filter;
  document.querySelectorAll('.project').forEach(el => {
    const archived = el.classList.contains('archive') && !expanded;
    const match = f==='all' || el.dataset.cat===f;
    el.style.display = match && !archived ? 'block' : 'none';
  });
  const n = data.filter(p => f==='all' || p.cat===f).length;
  document.getElementById('count').textContent = `${String(n).padStart(2,'0')} project${n===1?'':'s'}`;
});

// ===========================
// TESTIMONIALS MARQUEE (3 rows)
// ===========================
(function initTestimonials() {
  const avatarGradients = [
    'linear-gradient(135deg,#ff6e40,#e04a1f)',
    'linear-gradient(135deg,#3b82f6,#1d4ed8)',
    'linear-gradient(135deg,#ec4899,#be185d)',
    'linear-gradient(135deg,#10b981,#047857)',
    'linear-gradient(135deg,#f59e0b,#b45309)',
    'linear-gradient(135deg,#6366f1,#4338ca)',
    'linear-gradient(135deg,#14b8a6,#0f766e)'
  ];

  function initials(name) { return name.split(' ').map(n=>n[0]).join(''); }

  function cardHTML(t, idx) {
    const grad = avatarGradients[idx % avatarGradients.length];
    const stars = '★'.repeat(t.rating);
    return `<figure class="quote" tabindex="0" aria-label="Testimonial from ${t.name}">
      <div class="tst-header-meta">
        <span class="tst-cat">${t.cat}</span>
        <span class="tst-stars" aria-label="${t.rating} stars">${stars}</span>
      </div>
      <p>"${t.text}"</p>
      <footer>
        <div class="avatar" style="background:${grad}" aria-hidden="true">${initials(t.name)}</div>
        <div>
          <cite>${t.name}</cite>
          <small>${t.role}, ${t.company}</small>
        </div>
      </footer>
    </figure>`;
  }

  // Split 22 testimonials into 3 groups
  const g1 = testimonialsData.slice(0, 8);
  const g2 = testimonialsData.slice(8, 16);
  const g3 = testimonialsData.slice(16);

  function populateTracks(trackId, dupId, group, offset) {
    const html = group.map((t,i) => cardHTML(t, i + offset)).join('');
    document.getElementById(trackId).innerHTML = html;
    document.getElementById(dupId).innerHTML  = html;
  }

  populateTracks('tstTrack1', 'tstTrack1B', g1, 0);
  populateTracks('tstTrack2', 'tstTrack2B', g2, 8);
  populateTracks('tstTrack3', 'tstTrack3B', g3, 16);
})();

// ===========================
// HERO VIDEO (deferred load)
// ===========================
window.addEventListener('load', () => {
  setTimeout(() => {
    const m = document.getElementById('heroMedia');
    if (m && m.dataset.src) {
      m.innerHTML = `<iframe src="${m.dataset.src}" allow="autoplay; fullscreen; picture-in-picture" title="Showreel background" loading="lazy"></iframe>`;
      document.getElementById('hero').classList.add('playing');
    }
  }, 1400);
});

// ===========================
// SCROLL REVEAL
// ===========================
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObs.unobserve(e.target);
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
    statusEl.style.color = '#f87171';
    return;
  }
  if (!email || !emailRegex.test(email)) {
    statusEl.textContent = '⚠ Please enter a valid email address.';
    statusEl.style.color = '#f87171';
    return;
  }
  if (!brief) {
    statusEl.textContent = '⚠ Please write a short project brief.';
    statusEl.style.color = '#f87171';
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
