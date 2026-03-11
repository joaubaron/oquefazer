// ⚠️ Atualize a versão a cada deploy
const CACHE_VERSION = '1.1.1037';
const CACHE_NAME = `oquefazer-${CACHE_VERSION}`;
const STATIC_ASSETS = [
'./',
'./index.html',
'./manifest.json',
'./icone.png',
'./icone512.png',
'./fundo.webp',
'./logo_anunciante.png',
'./offline.html'
];
// ===============================
// INSTALAÇÃO
// ===============================
self.addEventListener('install', event => {
event.waitUntil(
  caches.open(CACHE_NAME)
    .then(cache => cache.addAll(STATIC_ASSETS))
    .then(() => self.skipWaiting())  // ✅ só ativa após cache completo
);
});
// ===============================
// ATIVAÇÃO
// ===============================
self.addEventListener('activate', event => {
event.waitUntil(
  caches.keys().then(keys =>
    Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      })
    )
  )
);
self.clients.claim();
});
// ===============================
// FETCH
// ===============================
self.addEventListener('fetch', event => {
if (event.request.method !== 'GET') return;
const acceptHeader = event.request.headers.get('accept') || '';
// HTML → NETWORK FIRST
if (acceptHeader.includes('text/html')) {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, clone);
        });
        return response;
      })
      .catch(() =>
        caches.match(event.request)
          .then(cached => cached || caches.match('./offline.html'))
      )
  );
  return;
}
// OUTROS → CACHE FIRST
event.respondWith(
  caches.match(event.request)
    .then(response => {
      return response || fetch(event.request).catch(() => {});
    })
);
});
