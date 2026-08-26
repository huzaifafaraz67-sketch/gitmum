const CACHE_NAME = 'gitmum-v3-purge';

// Install Phase: Skip waiting immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate Phase: Find EVERY cache and kill it instantly
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          // Deletes all old caches without exception
          console.log('Purging old cache:', cache);
          return caches.delete(cache);
        })
      );
    }).then(() => {
      // Force control over all open tabs immediately
      return self.clients.claim();
    })
  );
});

// Fetch Phase: Network-first approach (always fetch fresh files)
self.addEventListener('fetch', (event) => {
  // Skip cross-origin or non-GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Cache the fresh copy on the fly
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Fallback to cache only if network fails completely (offline mode)
        return caches.match(event.request);
      })
  );
});
