var version = "0.1.4";
var cacheName = "dmitriykorneev-" + version;

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache
        .addAll(["/index.html", "/css/style.min.css", "/fonts/font.ttf"])
        .then(function() {
          self.skipWaiting();
        });
    })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches
      .open(cacheName)
      .then(function(cache) {
        cache.match(event.request, { ignoreSearch: true });
      })
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
