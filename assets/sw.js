const cacheName = "pragyanpath-v1";
const assetsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/assets/js/chess.js",
  "/assets/images/logo.png",
  "/assets/images/icon-192.png",
  "/assets/images/icon-512.png"
];

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(assetsToCache))
  );
});

// Activate Service Worker
self.addEventListener("activate", (event) => {
  console.log("Service Worker activated");
});

// Fetch cached files
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
