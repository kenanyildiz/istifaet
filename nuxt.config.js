const pkg = require('./package')
import manifest from './static/manifest'

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'tr'
    },
    title: 'İstifa Et',
    meta: [
      { charset: 'utf-8' },
      { httpEquiv: 'content-type', content: 'text/html; charset=utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'İstifa Etmek Hiç Bu Kadar Kolay Olmamıştı' },
      { name: 'keywords', content: 'istifaet, istifa etmek, istifa' },
      { name: 'robots', content: 'index, follow' },
      { name: 'google-site-verification', content: 'kVZaG6_0Y81sGWz8XjXkydiL-EiOsbu9N12nU6xBe8o' },

      // Manifest
      { name: 'msapplication-TileColor', content: '#121212' },
      { name: 'msapplication-TileImage', content: '/img/icons/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#121212' },

      // Schema.org markup for Google+
      { itemprop: 'name', content: 'İstifa Et' },
      { itemprop: 'description', content: 'İstifa Etmek Hiç Bu Kadar Kolay Olmamıştı' },
      { itemprop: 'image', content: 'http://www.istifaet.org/cdn/img/logo/logo-social-media.png' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@istifaet' },
      { name: 'twitter:title', content: 'İstifa Et' },
      { name: 'twitter:description', content: 'İstifa Etmek Hiç Bu Kadar Kolay Olmamıştı' },
      { name: 'twitter:image:src', content: 'http://www.istifaet.org/cdn/img/logo/logo-social-media.png' },

      // Open Graph
      { property: 'og:title', content: 'İstifa Et' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: 'http://www.istifaet.org/' },
      { property: 'og:locale', content: 'tr_TR' },
      { property: 'og:image', content: 'http://www.istifaet.org/cdn/img/logo/logo-social-media.png' },
      { property: 'og:description', content: 'İstifa Etmek Hiç Bu Kadar Kolay Olmamıştı' },
      { property: 'og:site_name', content: 'İstifa Et' },
    ],
    link: [
      { rel: 'canonical', href: 'http://www.istifaet.org' },
      // Start: Favicon & Manifest
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/img/icons/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/img/icons/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/img/icons/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/img/icons/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/img/icons/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/img/icons/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/img/icons/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/img/icons/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/icons/apple-icon-180x180.png' },

      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/img/icons/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '144x144', href: '/img/icons/android-icon-144x144.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/img/icons/android-icon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '72x72', href: '/img/icons/android-icon-72x72.png' },
      { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/img/icons/android-icon-48x48.png' },
      { rel: 'icon', type: 'image/png', sizes: '36x36', href: '/img/icons/android-icon-36x36.png' },

      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/img/icons/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/icons/favicon-16x16.png' },

      { rel: "icon", type: "image/x-icon", href: "/img/icons/favicon.ico" },

      { rel: 'manifest', href: '/manifest.json' },
      // End: Favicon & Manifest

      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700&amp;subset=latin-ext' },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "WebSite",
          "name": "İstifa Et",
          "url": "http://www.istifaet.org",
          "image": "http://www.istifaet.org/cdn/img/logo/logo-social-media.png"
        })
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/bootstrap.init.scss',
    //'bootstrap-vue/dist/bootstrap-vue.css',
    '@/assets/style.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/print-js.js' },
    { src: '~plugins/i18n.js' },
    { src: '~plugins/vue-moment.js' },
    { src: '~plugins/vue-scrollto.js' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'portal-vue/nuxt',
    // Doc: https://bootstrap-vue.js.org/docs/
    ['bootstrap-vue/nuxt', {
      css: false
    }],
    ['nuxt-i18n', {
      vueI18nLoader: true,
      locales: ['tr', 'en'],
      defaultLocale: 'tr',
      strategy: 'prefix_except_default'
    }],
    ['@nuxtjs/pwa']
  ],

  router: {
    middleware: ['i18n']
  },

  manifest: manifest,

  generate: {
    routes: ['/', '/en']
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuejs-datepicker'],

    /*
   ** You can extend webpack config here
   */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
