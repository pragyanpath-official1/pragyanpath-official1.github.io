const CACHE_NAME = "pragyanpath-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/assets/css/style.css",
  "/assets/js/chess.js",
  "/assets/images/logo.png",
  "/assets/images/icon-192.png",
  "/assets/images/icon-512.png"
];

// Install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
