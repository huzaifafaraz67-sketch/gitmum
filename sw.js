const CACHE_NAME = 'gitmum-v1';
const MEDIA_CACHE = 'gitmum-media';

// Install event
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Fetch event
self.addEventListener('fetch', (event) => {
  // Let the browser handle standard requests normally
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
