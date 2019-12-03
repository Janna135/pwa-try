if ("function" === typeof importScripts) {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
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

    // add eventlistener on service worker
    self.addEventListener("install", () => {
      const channel = new BroadcastChannel("service-worker-channel");
      // with the broadcast channel the cache can be updated without the
      // necessity to close all windows to get the new content
      channel.postMessage({ promptToReload: true });
      self.skipWaiting();
    });
  } else {
    console.log("Workbox could not be loaded. No Offline support");
  }

  // push notifications
  self.addEventListener("notificationclick", event => {
    const notification = event.notification;
    const action = event.action;
    if (action === "close") {
      notification.close();
    } else {
      event.waitUntil(
        clients.openWindow("https://pwa-try.jannalynn.now.sh/chocolate")
      );
    }
  });

  self.addEventListener("notificationclose", event => {
    const notification = event.notification;
    notification.close();
  });
}
