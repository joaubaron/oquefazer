const CACHE = 'oquefazer-v3';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/icone.png',
  '/splash.png',
  '/manifest.json',
  '/style.css',  // se separar CSS
];

// Instalando e cacheando arquivos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

// Ativando e limpando caches antigos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE) return caches.delete(key);
      }))
    ).then(() => self.clients.claim())
  );
});

// Interceptando requisições
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        // opcional: atualizar cache
        return caches.open(CACHE).then(cache => {
          cache.put(e.request, res.clone());
          return res;
        });
      })
      .catch(() => caches.match(e.request))
  );
});