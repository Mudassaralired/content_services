const CACHE_NAME = 'mudassar-portfolio-v1';
const ASSETS = [
  './',
  './index.html',
  './portfolio.html',
  './assets/css/style.css',
  './assets/css/portfolio.css',
  './assets/js/app.js',
  './assets/js/portfolio.js',
  './assets/brand/logo.svg'
];

// Install Event - Pre-cache core assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Stale-While-Revalidate pattern
self.addEventListener('fetch', e => {
  // Only intercept local GET requests (skip external API calls, Supabase dynamic data, and admin panel)
  const isLocalGet = e.request.method === 'GET' && e.request.url.startsWith(self.location.origin);
  const isDynamic = e.request.url.includes('admin.html') || e.request.url.includes('/assets/js/admin.js') || e.request.url.includes('/assets/css/admin.css');

  if (!isLocalGet || isDynamic) {
    return;
  }

  e.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(e.request).then(cachedResponse => {
        const fetchedResponse = fetch(e.request).then(networkResponse => {
          if (networkResponse.status === 200) {
            cache.put(e.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {
          // Fail silently on network drop, server will fall back to cached version if exists
        });
        return cachedResponse || fetchedResponse;
      });
    })
  );
});
