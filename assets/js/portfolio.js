// ===========================
// PORTFOLIO VIDEOS DATA (40 items)
// ===========================
const videos = [
  { id: '1', title: 'Automotive Spec Film', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532520/car_seat_ad_crqofg.mp4', cat: 'motion', desc: 'A cinematic automotive concept built around dark moody lighting, precision metallic curves, and reflections.' },
  { id: '2', title: 'Sonix Smartwatch Reveal', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784531745/SONIX_vwu5qm.mp4', cat: 'motion', desc: 'Futuristic product reveal highlighting high-end engineering detail, matte titanium surfaces, and UI screens.' },
  { id: '3', title: 'Raw Visual Concept', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784531684/raw1111_snia7k.mp4', cat: 'motion', desc: 'Abstract visual experiment studying light refraction through textured glass and metallic meshes.' },
  { id: '4', title: 'Ond Onde Fragrance', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784531651/ond_onde_pf_ad_lpn5ub.mp4', cat: 'commercial', desc: 'Luxury fragrance ad focusing on micro-particles, smoke effects, and premium gold-black assets.' },
  { id: '5', title: 'Aura Glow Spec', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784531826/afe_vuephf.mp4', cat: 'motion', desc: 'High-contrast studio lighting exploration with macro cosmetics texture and glowing embers.' },
  { id: '6', title: 'Buly Skincare Kid', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784531854/buly_child_vid_dgn3on.mp4', cat: 'commercial', desc: 'Soft-toned commercial balancing clean aesthetics with products for delicate skin.' },
  { id: '7', title: 'ByteFlow Hosting', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784531991/hosting_ad_tw5wah.mp4', cat: 'ugc', desc: 'Dynamic, text-captioned UGC social ad highlighting modern SaaS hosting speed.' },
  { id: '8', title: 'Mushroom Gummies Ad', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532024/mashroom_gummis_ad_svnawu.mp4', cat: 'ugc', desc: 'Fun, high-energy UGC ad with fast cuts, overlays, and direct hook messaging.' },
  { id: '9', title: 'RedBull Energy Ad', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532058/redbull_ad3_yhfpe6.mp4', cat: 'commercial', desc: 'Fast-paced commercial ad blending dynamic motion graphics with beverage CGI.' },
  { id: '10', title: 'Pure Shilajit Ad', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532090/shilajit_ad_ekglrd.mp4', cat: 'ugc', desc: 'Wellness UGC social ad showcasing product application and clean text formatting.' },
  { id: '11', title: 'Shilajit Promo', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532095/shilajit_promo_m4a04r.mp4', cat: 'commercial', desc: 'Dark, premium commercial highlighting raw texture, amber lighting, and product benefits.' },
  { id: '12', title: 'Teacupu Matcha Ad', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532144/teacupu_ad_w7edtu.mp4', cat: 'ugc', desc: 'Organic green-themed UGC social campaign focusing on visual taste and pacing.' },
  { id: '13', title: 'CGI Visual Loop', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532151/0606_ymwwmb.mp4', cat: 'motion', desc: 'Looping CGI simulation exploring light reflections and dynamic morphing spheres.' },
  { id: '14', title: 'Black Friday Promo', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532173/black_friday_ad_rx149h.mp4', cat: 'commercial', desc: 'High-contrast commercial promo with bold orange styling and kinetic typography.' },
  { id: '15', title: 'Baby Skincare Ad', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532218/baby_product_ad_lcy64n.mp4', cat: 'ugc', desc: 'Soft-lit UGC social ad highlighting organic components and soothing application.' },
  { id: '16', title: 'Avatar Visual Concept', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532227/avatar_vid_mxednh.mp4', cat: 'motion', desc: '3D character render studying skin lighting and ambient cosmic atmosphere.' },
  { id: '17', title: 'Redmi Buds Ad', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532289/in_redmib_ecxq2i.mp4', cat: 'commercial', desc: 'Modern tech commercial showcasing audio performance, fit, and noise-cancelling tech.' },
  { id: '18', title: 'Magnesium Drops Ad', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532317/magnesio_ad_mzhwzw.mp4', cat: 'ugc', desc: 'Direct-to-camera UGC social ad discussing supplement benefits and active lifestyle.' },
  { id: '19', title: 'TikTok Shop Ad', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532373/toktok_shop_ad_nur1a2.mp4', cat: 'ugc', desc: 'Highly interactive social-first UGC ad with visual tags, subtitles, and price overlays.' },
  { id: '20', title: 'Freebies Promo', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532440/frebies_with_product_ad_xh6itc.mp4', cat: 'commercial', desc: 'Bright, lifestyle commercial film focused on product bundles and rewards.' },
  { id: '21', title: 'Sprite Refresh Ad', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532504/sprite_ad_fsjxlj.mp4', cat: 'commercial', desc: 'High-speed liquid splash commercial focusing on carbonation and green-yellow aesthetics.' },
  { id: '22', title: 'Oura Perfume Ad', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532508/perfume_ad_d5urml.mp4', cat: 'commercial', desc: 'Atmospheric product commercial focused on luxury packaging, shadow-play, and glass curves.' },
  { id: '23', title: 'Face Wash Social Ad', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532513/wash_product_ad_qljycf.mp4', cat: 'ugc', desc: 'Skincare social ad showcasing texture foam, water splash, and usage instructions.' },
  { id: '24', title: 'Hulk Concept Ad', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532524/paliment_vid_hulk_sgvhwn.mp4', cat: 'motion', desc: 'Dark CGI motion concept exploring weight, impact, and particle physics.' },
  { id: '25', title: 'Visa Card Ad', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532531/visa_cnsl_ad_mfmjke.mp4', cat: 'commercial', desc: 'Sleek, minimalist payment-card commercial with sliding transitions and UI graphics.' },
  { id: '26', title: 'Hemoo Him Ad', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532534/hemoo_him_ad_qptkya.mp4', cat: 'ugc', desc: 'Grooming UGC ad designed to capture attention in the first 3 seconds of scrolling.' },
  { id: '27', title: 'Smoothie Green Ad', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532557/smothi_green_ad_h5wma3.mp4', cat: 'commercial', desc: 'Clean, light commercial focused on fresh ingredients and healthy energy.' },
  { id: '28', title: 'Ethnic Kitchen Ad', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532560/ethnikichen_pv65pm.mp4', cat: 'ugc', desc: 'Food UGC ad showcasing recipe preparation, close macro shots, and voiceover.' },
  { id: '29', title: 'Air Filter CGI', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532595/air_filer_add_majrpn.mp4', cat: 'motion', desc: '3D CGI film showing air particles passing through multi-stage filter systems.' },
  { id: '30', title: 'Dressing Room Promo', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532607/dressing_add_td7ndl.mp4', cat: 'commercial', desc: 'High-contrast fashion commercial showcasing lighting overlays and fabric movements.' },
  { id: '31', title: 'Churaili Ad', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532611/churaili_ad_izpqty.mp4', cat: 'ugc', desc: 'Fast-paced UGC social ad with visual overlays and dynamic subtitles.' },
  { id: '32', title: 'Fat Loss System', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532704/fat_lose_add_dl9ahb.mp4', cat: 'ugc', desc: 'Before/after lifestyle UGC detailing fitness progress and nutrition guides.' },
  { id: '33', title: 'Fat Loss System II', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532813/fat_lose_add2_zu4ega.mp4', cat: 'ugc', desc: 'Secondary social-ad campaign for fat loss, focused on simple meal prep.' },
  { id: '34', title: 'Fat Loss System III', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784532897/fat_lose_add3_t2wbtq.mp4', cat: 'ugc', desc: 'Third variation in social-ad campaign, testing client hooks and overlays.' },
  { id: '35', title: 'HR Dashboard Concept', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784533025/hr_add_mpsskk.mp4', cat: 'motion', desc: 'Dynamic interface animation and device CGI for an enterprise SaaS platform.' },
  { id: '36', title: 'Luxury Jewelry CGI', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784533279/jeulary_add_cgtj3d.mp4', cat: 'motion', desc: 'Exquisite jewelry spec film, demonstrating liquid metals and shining diamond refractions.' },
  { id: '37', title: 'Smart Kitchen CGI', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784533353/kitchen_add_btixan.mp4', cat: 'motion', desc: 'Architectural CGI showing automated kitchen setups and modern lighting designs.' },
  { id: '38', title: 'Peptoid Bottle Ad', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784534534/peptoid_add_s1y3ov.mp4', cat: 'motion', desc: '3D product visualization showcasing label graphics, material textures, and studio lighting.' },
  { id: '39', title: 'Speaker CGI Reveal', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784534738/speeker_add_p7e6ct.mp4', cat: 'motion', desc: 'Premium audio speaker launch animation featuring expanding sound waves and meshes.' },
  { id: '40', title: 'Book Title Concept', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784534838/book_title_ikyp4q.mp4', cat: 'commercial', desc: 'Cinematic book release trailer, detailing leather binding textures and gold foil lettering.' }
];

// Helper to generate optimized Cloudinary thumbnails
function getCloudinaryThumb(videoUrl) {
  let thumb = videoUrl.replace(/\.mp4$/, '.jpg');
  return thumb.replace('/video/upload/', '/video/upload/so_auto,c_fill,w_520,h_300,q_auto,f_auto/');
}

// ===========================
// INITIALIZE 3D ROTATING RING
// ===========================
const ringTrack = document.getElementById('ringTrack');
let activeCategory = 'all';

// Select 12 items for the 3D ring (curated from all videos)
function getRingVideos() {
  const filtered = videos.filter(v => activeCategory === 'all' || v.cat === activeCategory);
  // Take up to 12 items
  return filtered.slice(0, 12);
}

function renderRing() {
  if (!ringTrack) return;
  ringTrack.innerHTML = '';
  
  const ringVideos = getRingVideos();
  const total = ringVideos.length;
  if (!total) {
    ringTrack.innerHTML = '<div style="color:var(--soft);text-align:center;grid-column:1/-1">No videos available in this category.</div>';
    return;
  }

  // Calculate layout parameters
  // Desktop radius is around 480px, mobile drops to 230px
  const isMobile = window.innerWidth < 768;
  const radius = isMobile ? 240 : 480;

  ringVideos.forEach((v, index) => {
    const angle = (360 / total) * index;
    const card = document.createElement('div');
    card.className = 'ring-card';
    card.setAttribute('data-id', v.id);
    card.setAttribute('data-cursor', '');
    
    // Set 3D positions
    card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;

    const thumbUrl = getCloudinaryThumb(v.url);

    card.innerHTML = `
      <div class="ring-card-inner">
        <img class="ring-card-thumb" src="${thumbUrl}" alt="${v.title}" loading="lazy">
        <div class="ring-card-preview"></div>
        <div class="ring-card-meta">
          <span class="badge-mini">${v.cat === 'motion' ? 'CGI & Motion' : v.cat === 'commercial' ? 'Commercial' : 'UGC Ad'}</span>
          <h3>${v.title}</h3>
        </div>
      </div>
    `;

    // Click handler (ignores click if drag occurred)
    card.addEventListener('click', (e) => {
      if (isDraggingRing) return;
      openLightbox(v);
    });

    // Hover previews
    card.addEventListener('mouseenter', () => {
      if (isDraggingRing) return;
      const preview = card.querySelector('.ring-card-preview');
      if (preview) {
        preview.innerHTML = `<video src="${v.url}" autoplay loop muted playsinline class="video-preview-stream"></video>`;
        preview.style.opacity = '1';
      }
    });

    card.addEventListener('mouseleave', () => {
      const preview = card.querySelector('.ring-card-preview');
      if (preview) {
        preview.style.opacity = '0';
        setTimeout(() => { preview.innerHTML = ''; }, 300);
      }
    });

    ringTrack.appendChild(card);
  });
}

// ===========================
// 3D RING PHYSICS & DRAGGING
// ===========================
let isDraggingRing = false;
let startX = 0;
let currentRotationY = 0;
let targetRotationY = 0;
let autoSpinSpeed = 0.08; // Degree increment per frame
let lastMoveTime = 0;
let velocity = 0;
let isHoveringRing = false;

const ringContainer = document.getElementById('ringContainer');
if (ringContainer) {
  // Desktop Drag
  ringContainer.addEventListener('mousedown', e => {
    isDraggingRing = true;
    startX = e.clientX;
    velocity = 0;
    autoSpinSpeed = 0;
  });

  window.addEventListener('mousemove', e => {
    if (!isDraggingRing) return;
    const dx = e.clientX - startX;
    startX = e.clientX;
    targetRotationY += dx * 0.18; // Sensivity scale
    velocity = dx * 0.18;
  });

  window.addEventListener('mouseup', () => {
    if (!isDraggingRing) return;
    // Keep velocity for inertia slide
    isDraggingRing = false;
    autoSpinSpeed = isHoveringRing ? 0 : 0.08;
  });

  // Touch Swipe (Mobile)
  ringContainer.addEventListener('touchstart', e => {
    isDraggingRing = true;
    startX = e.touches[0].clientX;
    velocity = 0;
    autoSpinSpeed = 0;
  }, { passive: true });

  ringContainer.addEventListener('touchmove', e => {
    if (!isDraggingRing) return;
    const dx = e.touches[0].clientX - startX;
    startX = e.touches[0].clientX;
    targetRotationY += dx * 0.18;
    velocity = dx * 0.18;
  }, { passive: true });

  ringContainer.addEventListener('touchend', () => {
    isDraggingRing = false;
    autoSpinSpeed = 0.08;
  });

  // Slow down when hovering
  ringContainer.addEventListener('mouseenter', () => {
    isHoveringRing = true;
    if (!isDraggingRing) autoSpinSpeed = 0.02;
  });
  ringContainer.addEventListener('mouseleave', () => {
    isHoveringRing = false;
    if (!isDraggingRing) autoSpinSpeed = 0.08;
  });
}

// Main physics render loop
function spinLoop() {
  if (!isDraggingRing) {
    // Apply auto spin
    targetRotationY += autoSpinSpeed;
    
    // Apply inertia slide if any velocity remains
    if (Math.abs(velocity) > 0.02) {
      targetRotationY += velocity;
      velocity *= 0.94; // friction coefficient
    }
  }

  // Smooth lerp interpolation
  currentRotationY += (targetRotationY - currentRotationY) * 0.08;
  
  if (ringTrack) {
    ringTrack.style.transform = `rotateY(${currentRotationY}deg)`;
  }
  requestAnimationFrame(spinLoop);
}

// Start physics loop on load
if (ringTrack) {
  requestAnimationFrame(spinLoop);
}

// ===========================
// GRID GALLERY & FILTERS
// ===========================
const gridContainer = document.getElementById('gridContainer');
const searchInput = document.getElementById('searchBar');
const filterButtons = document.querySelectorAll('.filter-pill');

let activeGridFilter = 'all';
let searchQuery = '';

function renderGrid() {
  if (!gridContainer) return;
  gridContainer.innerHTML = '';

  const filtered = videos.filter(v => {
    const matchFilter = activeGridFilter === 'all' || v.cat === activeGridFilter;
    const matchSearch = !searchQuery || 
      v.title.toLowerCase().includes(searchQuery) || 
      v.desc.toLowerCase().includes(searchQuery);
    return matchFilter && matchSearch;
  });

  if (!filtered.length) {
    gridContainer.innerHTML = `
      <div class="empty-state">
        <h3>No videos match your search</h3>
        <p>Try checking your spelling or selecting another category.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(v => {
    const card = document.createElement('article');
    card.className = 'grid-card reveal-up in';
    card.setAttribute('data-cursor', '');

    const thumb = getCloudinaryThumb(v.url);

    card.innerHTML = `
      <div class="grid-card-media">
        <img src="${thumb}" alt="${v.title}" loading="lazy">
        <div class="grid-card-preview"></div>
        <span class="badge-mini absolute">${v.cat === 'motion' ? 'CGI & Motion' : v.cat === 'commercial' ? 'Commercial' : 'UGC Ad'}</span>
      </div>
      <div class="grid-card-info">
        <h3>${v.title}</h3>
        <p>${v.desc}</p>
      </div>
    `;

    // Click opens Lightbox
    card.addEventListener('click', () => openLightbox(v));

    // Hover loops preview
    card.addEventListener('mouseenter', () => {
      const preview = card.querySelector('.grid-card-preview');
      if (preview) {
        preview.innerHTML = `<video src="${v.url}" autoplay loop muted playsinline></video>`;
        preview.style.opacity = '1';
      }
    });

    card.addEventListener('mouseleave', () => {
      const preview = card.querySelector('.grid-card-preview');
      if (preview) {
        preview.style.opacity = '0';
        setTimeout(() => { preview.innerHTML = ''; }, 300);
      }
    });

    gridContainer.appendChild(card);
  });
}

// Bind search input
if (searchInput) {
  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderGrid();
  });
}

// Bind category filter pills
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const cat = btn.dataset.category;
    activeCategory = cat;
    activeGridFilter = cat;

    // Smoothly re-render both elements
    if (ringTrack) {
      ringTrack.style.opacity = '0';
      setTimeout(() => {
        renderRing();
        ringTrack.style.opacity = '1';
      }, 350);
    }
    renderGrid();
  });
});

// ===========================
// CINEMATIC LIGHTBOX / MODAL
// ===========================
const lightbox = document.getElementById('videoLightbox');
const lightboxVideo = document.getElementById('lightboxVideo');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');

function openLightbox(v) {
  if (!lightbox || !lightboxVideo) return;
  lightboxTitle.textContent = v.title;
  lightboxDesc.textContent = v.desc;
  lightboxVideo.src = v.url;
  lightboxVideo.load();
  
  lightbox.classList.add('open');
  lightboxVideo.play().catch(err => console.log('Autoplay blocked:', err));

  // Disable page scroll
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox || !lightboxVideo) return;
  lightbox.classList.remove('open');
  lightboxVideo.pause();
  lightboxVideo.src = '';
  
  // Re-enable page scroll
  document.body.style.overflow = '';
}

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}
if (lightbox) {
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

// ===========================
// BOOTSTRAP INITIALIZATION
// ===========================
window.addEventListener('resize', () => {
  // Re-render ring positions on resize to keep radius responsive
  renderRing();
});

// Load resources on document ready
document.addEventListener('DOMContentLoaded', () => {
  renderRing();
  renderGrid();
});

// ===========================
// REPEATED SCROLL REVEALS
// ===========================
const revealElements = document.querySelectorAll('.reveal, .reveal-up');
const obsOptions = { threshold: 0.05, rootMargin: '0px 0px -40px 0px' };

const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
    } else {
      e.target.classList.remove('in');
    }
  });
}, obsOptions);

revealElements.forEach(el => obs.observe(el));
