// Service Worker for Finance Manager PWA
const CACHE_NAME = 'finance-manager-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Network first for API calls (Apps Script)
  if (event.request.url.includes('script.google.com')) {
    event.respondWith(fetch(event.request));
    return;
  }
  // Default — network se le lo
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
