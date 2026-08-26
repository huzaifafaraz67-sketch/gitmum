const CACHE_NAME = 'gitmum-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Let the browser handle standard network requests for GitHub MP4 files
  event.respondWith(fetch(event.request));
});
