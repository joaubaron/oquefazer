const CACHE = 'oquefazer-v2';
const FILES = ['/oquefazer/', '/oquefazer/index.html', '/oquefazer/icone.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
