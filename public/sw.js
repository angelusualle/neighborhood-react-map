//Caches skeleton of site.
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('restaurantReviewUdacityAJB').then(function(cache) {
        return cache.addAll([
          '/static/js/bundle.js',
          '/',
          '',
        ]);
      })
    );
});

//Serves skeleton of site even if offline
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});