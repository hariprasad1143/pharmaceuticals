(global => {
  'use strict';

  // Load the sw-tookbox library.
  importScripts('/sw/sw-toolbox.js');

  // Turn on debug logging, visible in the Developer Tools' console.
  global.toolbox.options.debug = true;


// *** End of auto-included sw-toolbox code. ***


// Runtime cache configuration, using the sw-toolbox library.
  var staticAssetsScriptCacheName = 'staticAssetsScriptCacheName'
  var staticAssetsCacheName = 'staticAssetsCacheName'
  var staticSrcAssetsCacheName = 'staticSrcAssetsCacheName'
  var collabAssetCacheName = 'collabAssetsCacheName'

  // toolbox.precache([
  //   'www/js/app.js'
  // ]);

  // skip for now
  // toolbox.router.get("/", toolbox.networkFirst, {});

  toolbox.router.get("/sw/*", toolbox.fastest, {
      cache: {
          name: staticAssetsScriptCacheName,
          maxEntries: 200
      }
  });
  toolbox.router.get("/global/(.*)", toolbox.fastest, {
      cache: {
          name: staticAssetsScriptCacheName,
          maxEntries: 200
      }
  });
  toolbox.router.get("/static/js/(.*)", toolbox.fastest, {
    cache: {
      name: staticAssetsScriptCacheName,
      maxEntries: 200
    }
  });
  toolbox.router.get("/static/css/(.*)", toolbox.fastest, {
    cache: {
      name: staticAssetsScriptCacheName,
      maxEntries: 200
    }
  });

  toolbox.router.get("/static/(.*)", toolbox.cacheFirst, {
    cache: {
      name: staticAssetsCacheName,
      maxEntries: 200
    }
  });
  // The route for any requests from the googleapis origin
  toolbox.router.get('/(.*)', global.toolbox.cacheFirst, {
    cache: {
      name: staticSrcAssetsCacheName,
      maxEntries: 300
    },
    origin: /\.static-src\.com$/,
    // Set a timeout threshold of 2 seconds
    networkTimeoutSeconds: 2
  });

  // skipped for now
  // toolbox.router.get("/member/(.*)", toolbox.fastest, {
  //   cache: {
  //     name: collabAssetCacheName,
  //     maxEntries: 100
  //   }
  // });

  // By default, all requests that don't match our custom handler will use the toolbox.networkFirst
  // cache strategy, and their responses will be stored in the default cache.

  // Boilerplate to ensure our service worker takes control of the page as soon as possible.
  global.addEventListener('install', event => event.waitUntil(global.skipWaiting()));
  global.addEventListener('activate', event => event.waitUntil(global.clients.claim()));
})(self);
