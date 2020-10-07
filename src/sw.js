import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

registerRoute(
  ({ request }) => request.destination === 'script'
                  || request.destination === 'style'
                  || request.destination === 'image'
                  || request.destination === 'document'
                  || request.destination === 'font',
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
  }),
);
