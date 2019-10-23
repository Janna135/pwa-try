if ("function" === typeof importScripts) {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js"
  );
  /* global workbox */
  if (workbox) {
    console.log("Workbox is loaded");
    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([]);

    /* custom cache rules*/
    workbox.routing.registerNavigationRoute("/index.html", {
      blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/]
    });

    /* safe images in cache */
    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg)$/,
      workbox.strategies.cacheFirst({
        cacheName: "images",
        plugins: [
          //set expiration time and limit count of saved items
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
          })
        ]
      }),
      console.log("images")
    );

    // add eventlistener on service worker
    self.addEventListener("install", () => {
      const channel = new BroadcastChannel("service-worker-channel");
      // with the broadcast channel the cache can be updated without the
      // necessity to close all windows to get the new content
      channel.postMessage({ promptToReload: true });
      console.log("installed");
    });
  } else {
    console.log("Workbox could not be loaded. No Offline support");
  }

  /* js cache */
  workbox.routing.registerRoute(
    /\.(?:js)$/,
    workbox.strategies.cacheFirst({
      cacheName: "js",
      plugins: [new workbox.broadcastUpdate.Plugin("js", "workbox-channel-js")]
    }),
    console.log("js")
  );

  // with the expiration plugin you can decide how many (maxEntries) items
  // you want to save for how long (maxAgeSeconds)
  new workbox.expiration.Plugin(
    (maxEntries = 20),
    (maxAgeSeconds = 24 * 60 * 60) //save for one Day
  );
}
