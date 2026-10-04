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
// COMPLETE VIDEO CATALOG (44+ Projects)
// ===========================
const data = [
  // NEW TOP FEATURED & CATALOG PROJECTS
  { id: 'in_jewelry', title: 'Oura Fine Jewelry Spec', cat: 'cgi', tag: 'CGI & 3D', role: '3D Jewelry Visual Direction', tools: 'Macro gemstone lighting, gold metal shaders', desc: 'Luxury jewelry CGI — gemstone reflections & liquid gold physics', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1786337211/inshallah_gigu_vgpnp3.mp4', featured: true },
  { id: 'in_earrings', title: 'Luxe Earrings Showcase', cat: 'product', tag: 'Product Film', role: 'Product Spec Film', tools: 'Macro optics, soft studio lighting', desc: 'High-contrast jewelry spec film — diamond brilliance & macro detail', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1786337203/in_earrings_rov1qv.mp4', featured: true },
  { id: 'in_pilgrim', title: 'Pilgrim Skincare Commercial', cat: 'commercial', tag: 'AI Commercial', role: 'Commercial Art Direction', tools: 'AI generation, serum texture FX', desc: 'Clean skincare commercial — organic serum flow & glowing skin tone', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1786337178/pilgiram_dpppdx.mp4', featured: true },
  { id: 'in_cleanser', title: 'Hydrating Cleanser Ad', cat: 'product', tag: 'Product Film', role: 'Product Spec Film', tools: 'Water splash FX, macro foam texture', desc: 'Tactile skincare ad — water splash FX & micro-foam texture detail', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1786337171/in_claiser_g4abty.mp4', featured: true },
  { id: 'in_atarajada', title: 'Atarajada Perfume Ad', cat: 'commercial', tag: 'AI Commercial', role: 'Commercial Spot', tools: 'Atmospheric smoke, gold bottle render', desc: 'Atmospheric fragrance film — moody shadows & golden glass reflections', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1786337161/in_atarajada_itz4n0.mp4', featured: true },
  { id: 'in_fanta', title: 'Fanta Soda Refresh CGI', cat: 'product', tag: 'Product Film', role: 'Beverage CGI Film', tools: 'Liquid condensation, carbonation FX', desc: 'Tactile beverage spec film — icy condensation & high-speed splash FX', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1786337149/fanta_can99_yamwth.mp4', featured: true },
  { id: 'in_tajmahal', title: 'Taj Mahal Arch Viz CGI', cat: 'cgi', tag: 'CGI & 3D', role: 'Architectural CGI', tools: 'Marble shaders, atmospheric fog', desc: 'Architectural CGI showcase — marble reflections & sunrise lighting', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1786337134/inshallah_tajmahal_cfqqta.mp4', featured: true },
  { id: 'in_1stcut', title: 'Cinematic First Cut', cat: 'commercial', tag: 'AI Commercial', role: 'Visual Direction Reel', tools: 'Pacing, color grade, kinetic transition', desc: 'Dynamic motion reel — fast-cut transitions & premium color grade', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1786337152/in_1st_cut_rmcjkd.mp4' },
  { id: 'in_stb', title: 'Stb Creative Promo', cat: 'commercial', tag: 'AI Commercial', role: 'Brand Commercial', tools: 'Cinematic camera, lighting FX', desc: 'Cinematic brand commercial — dramatic lighting & bold camera flow', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1786337132/inshallah_stb_a70g2w.mp4' },
  { id: 'in_797', title: '797 Tech Visualizer', cat: 'cgi', tag: 'CGI & 3D', role: '3D Visualizer', tools: 'Metallic shaders, neon studio light', desc: 'Futuristic 3D tech reveal — metallic geometry & glowing neon accents', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1786337112/in_797_t1jvku.mp4' },
  { id: 'in_cheeta', title: 'Cheetah Motion Study', cat: 'cgi', tag: 'CGI & 3D', role: 'CGI Motion Study', tools: 'Fur simulation, high-speed camera', desc: 'High-speed CGI motion study — dynamic fur simulation & action pacing', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1786337105/in_cheeta_vrnvqf.mp4' },
  { id: 'in_reel78', title: 'Social Hook Performance Reel', cat: 'ugc', tag: 'UGC / Social', role: 'Paid Social Creative', tools: 'Hook-first captions, 9:16 format', desc: 'High-converting social ad compilation — hook-first pacing & captions', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1786337102/in_reel_7..8_ydoy1l.mp4' },
  { id: 'burger_ad', title: 'Gourmet Burger Commercial', cat: 'product', tag: 'Product Film', role: 'Commercial Food Direction', tools: 'Flame-grilled texture, macro sauce FX', desc: 'Tactile food commercial — flame-grilled texture & macro sauce detail', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784888307/burger_ads_miya36.mp4', featured: true },
  { id: 'fashion_reel', title: 'Luxe Fashion Commercial', cat: 'commercial', tag: 'AI Commercial', role: 'Fashion Film Direction', tools: 'Dynamic studio lighting, fabric movement', desc: 'High-contrast fashion film — dynamic lighting & fabric movement', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784887768/full_fasion_ijd2so.mp4', featured: true },
  { id: 'shoe_product', title: 'Apex Sneaker Reveal', cat: 'cgi', tag: 'CGI & 3D', role: '3D Footwear Spec Film', tools: 'Sole geometry, material shader', desc: '3D footwear spec film — sole grip geometry & material shaders', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784888111/shoe_product_ktxomt.mp4', featured: true },
  { id: 'fiverr_gig', title: 'Creative Motion Showcase', cat: 'commercial', tag: 'AI Commercial', role: 'Visual Direction Reel', tools: 'Kinetic typography, motion design compilation', desc: 'Fast-paced motion design compilation & brand visual direction', url: 'https://res.cloudinary.com/dbjvyvjs6/video/upload/v1784531942/fiverr_gig_3_vrc6wj.mp4', featured: true },
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
// Click-to-play cards. No autoplay anywhere: posters load first
// (fast), video element is created only when the user clicks.
// ===========================
const projectsEl = document.getElementById('projects');
function pauseAllCards(except) {
  document.querySelectorAll('#projects video').forEach(v => {
    if (v !== except) v.pause();
  });
}
function renderGallery(filter = 'all') {
  if (!projectsEl) return;
  pauseAllCards(null);
  projectsEl.innerHTML = '';

  data.forEach(p => {
    const isFeatured = !!p.featured;
    const isVisible = filter === 'all' ? isFeatured : (p.cat === filter);

    if (!isVisible) return;

    const card = document.createElement('div');
    card.className = 'card in';
    card.dataset.category = p.cat;
    card.tabIndex = 0;
    card.setAttribute('aria-label', `Play ${p.title}`);

    const posterUrl = p.url.replace(/\.mp4$/, '.jpg').replace('/video/upload/', '/video/upload/so_2,c_fill,w_640,h_360,q_auto,f_jpg/');

    card.innerHTML = `
      <div class="card-media">
        <img class="card-poster" src="${posterUrl}" alt="${p.title}" loading="lazy" width="640" height="360">
        <button class="play-btn" aria-label="Play ${p.title}" tabindex="-1">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>
        </button>
      </div>
      <div class="card-info">
        <span class="tag">${p.tag}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>
    `;

    const mediaBox = card.querySelector('.card-media');
    let videoEl = null;

    function togglePlay() {
      if (!videoEl) {
        videoEl = document.createElement('video');
        videoEl.setAttribute('playsinline', '');
        videoEl.setAttribute('preload', 'metadata');
        videoEl.controls = true;
        videoEl.poster = posterUrl;
        videoEl.className = 'card-video';
        const src = document.createElement('source');
        src.src = p.url;
        src.type = 'video/mp4';
        videoEl.appendChild(src);
        mediaBox.insertBefore(videoEl, mediaBox.firstChild);
        mediaBox.classList.add('has-video');
        videoEl.addEventListener('pause', () => mediaBox.classList.remove('is-playing'));
        videoEl.addEventListener('play', () => mediaBox.classList.add('is-playing'));
      }
      if (videoEl.paused) {
        pauseAllCards(videoEl);
        videoEl.play().catch(() => {});
      } else {
        videoEl.pause();
      }
    }

    mediaBox.addEventListener('click', togglePlay);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    });

    projectsEl.appendChild(card);
  });
}

if (projectsEl) {
  renderGallery();
}

// Filter Tabs Handler
document.querySelectorAll('.filter').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.filter').forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
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
// WHATSAPP BRIEF GENERATOR
// ===========================
function handleWhatsAppBrief(e) {
  if (e) e.preventDefault();
  const pkg = document.getElementById('wa-package')?.value || '';
  const brand = document.getElementById('wa-brand')?.value || '';
  const name = document.getElementById('wa-name')?.value || '';
  const timeline = document.getElementById('wa-timeline')?.value || '';
  const goal = document.getElementById('wa-goal')?.value || '';

  let message = `Hi Mudassar,\n\nI want to discuss a video project for my brand.\n\n`;
  if (name) message += `*Name:* ${name}\n`;
  if (brand) message += `*Brand/Product:* ${brand}\n`;
  if (pkg) message += `*Selected Package:* ${pkg}\n`;
  if (timeline) message += `*Target Timeline:* ${timeline}\n`;
  if (goal) message += `*Project Goal:* ${goal}\n`;

  const waUrl = `https://wa.me/923481321775?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank', 'noopener');
}
window.handleWhatsAppBrief = handleWhatsAppBrief;

// ===========================
// SMOOTH CURSOR (fine pointers only)
// ===========================
const finePointer = window.matchMedia('(pointer:fine)').matches;
if (finePointer) {
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
