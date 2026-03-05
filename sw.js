// ⚠️ Atualize CACHE_VERSION a cada deploy (ex: 1.0.0 → 1.1.0)
const CACHE_VERSION = '1.0.1';
const CACHE_NAME = `oquefazer-v${CACHE_VERSION}`;

const STATIC_ASSETS = [
'./',
'./index.html',
'./manifest.json',
'./icone.png',
'./icone512.png',
'./fundo.jpg',
'./splash.png',
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
.catch(() =>
caches.match(event.request)
.then(cached => cached || caches.match('./offline.html'))
)
);
return;
}
// Outros arquivos → Cache First
event.respondWith(
caches.match(event.request)
.then(response => response || fetch(event.request))
);
});
