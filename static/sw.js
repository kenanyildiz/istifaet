importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/074f6c2ae5a0ced51fe3.js",
    "revision": "d1f65ac646ecae3025fa885d33ec813d"
  },
  {
    "url": "/_nuxt/58c6e5518db14fc8e92f.js",
    "revision": "b46a0398970fd93f0549765e5db0b8ad"
  },
  {
    "url": "/_nuxt/828011ce2b39fa65102c.js",
    "revision": "1e5fe6b6deb039f97b59e932647eddf3"
  },
  {
    "url": "/_nuxt/90dcd8d4ac90d6cfe133.js",
    "revision": "b682187c03a43cc357cca9bb776becde"
  },
  {
    "url": "/_nuxt/a668676b3fc9fbec9ff1.js",
    "revision": "9b185d12c6436aa3dfba95bdef128238"
  },
  {
    "url": "/_nuxt/a716643cc81c36b8b606.js",
    "revision": "89c15ae0fd3bb73c18e716cded70b21f"
  },
  {
    "url": "/_nuxt/ae0fc00eb89a7d2fa220.js",
    "revision": "0de9bbc2e0e362981b3e620d38afac25"
  }
], {
  "cacheId": "istifaet",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
