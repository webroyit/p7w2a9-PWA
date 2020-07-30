// Storage of the browser
const CACHE_NAME = 'version-1';
const urlsToCache = ['index.html', 'offline.html'];

const self = this;

// Install service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                // Add these files to cache
                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    // If there is no data, then it is offline
                    .catch(() => caches.match('offline.html'));
            })
    )
});

// Activate service worker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)){
                    // Remove old data
                    return caches.delete(cacheName);
                }
            })
        ))
    )
});