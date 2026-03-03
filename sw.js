const CACHE_NAME = 'oquefazer-2026-0303-1417';

const STATIC_ASSETS = [
'./',
'./index.html',
'./manifest.json',
'./icone.png',
'./fundo.jpg'
];

// ===============================
// INSTALAÇÃO
// ===============================
self.addEventListener('install', event => {
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => cache.addAll(STATIC_ASSETS))
);
self.skipWaiting();
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

// HTML → Network First (para atualizar anúncios automaticamente)
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
.catch(() => caches.match(event.request))
);
return;
}

// Outros arquivos → Cache First
event.respondWith(
caches.match(event.request)
.then(response => response || fetch(event.request))
);
});
