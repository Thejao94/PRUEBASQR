self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("qr-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "icon-192.png",
        "icon-512.png",
        "html5-qrcode.min.js"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => {
      return resp || fetch(e.request);
    })
  );
});