import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\assets\\bootstrap.init.scss'

import '..\\assets\\style.scss'

import _6f6c098b from '..\\layouts\\default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"htmlAttrs":{"lang":"tr"},"title":"İstifa Et","meta":[{"charset":"utf-8"},{"httpEquiv":"content-type","content":"text\u002Fhtml; charset=utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, shrink-to-fit=no"},{"hid":"description","name":"description","content":"İstifa Etmek Hiç Bu Kadar Kolay Olmamıştı"},{"name":"keywords","content":"istifaet, istifa etmek, istifa"},{"name":"robots","content":"index, follow"},{"name":"google-site-verification","content":"kVZaG6_0Y81sGWz8XjXkydiL-EiOsbu9N12nU6xBe8o"},{"name":"msapplication-TileColor","content":"#121212"},{"name":"msapplication-TileImage","content":"\u002Fimg\u002Ficons\u002Fms-icon-144x144.png"},{"name":"theme-color","content":"#121212"},{"itemprop":"name","content":"İstifa Et"},{"itemprop":"description","content":"İstifa Etmek Hiç Bu Kadar Kolay Olmamıştı"},{"itemprop":"image","content":"http:\u002F\u002Fwww.istifaet.org\u002Fcdn\u002Fimg\u002Flogo\u002Flogo-social-media.png"},{"name":"twitter:card","content":"summary_large_image"},{"name":"twitter:site","content":"@istifaet"},{"name":"twitter:title","content":"İstifa Et"},{"name":"twitter:description","content":"İstifa Etmek Hiç Bu Kadar Kolay Olmamıştı"},{"name":"twitter:image:src","content":"http:\u002F\u002Fwww.istifaet.org\u002Fcdn\u002Fimg\u002Flogo\u002Flogo-social-media.png"},{"property":"og:title","content":"İstifa Et"},{"property":"og:type","content":"article"},{"property":"og:url","content":"http:\u002F\u002Fwww.istifaet.org\u002F"},{"property":"og:locale","content":"tr_TR"},{"property":"og:image","content":"http:\u002F\u002Fwww.istifaet.org\u002Fcdn\u002Fimg\u002Flogo\u002Flogo-social-media.png"},{"property":"og:description","content":"İstifa Etmek Hiç Bu Kadar Kolay Olmamıştı"},{"property":"og:site_name","content":"İstifa Et"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"İstifa Et"},{"hid":"author","name":"author","content":"Kenan Yıldız"}],"link":[{"rel":"canonical","href":"http:\u002F\u002Fwww.istifaet.org"},{"rel":"apple-touch-icon","sizes":"57x57","href":"\u002Fimg\u002Ficons\u002Fapple-icon-57x57.png"},{"rel":"apple-touch-icon","sizes":"60x60","href":"\u002Fimg\u002Ficons\u002Fapple-icon-60x60.png"},{"rel":"apple-touch-icon","sizes":"72x72","href":"\u002Fimg\u002Ficons\u002Fapple-icon-72x72.png"},{"rel":"apple-touch-icon","sizes":"76x76","href":"\u002Fimg\u002Ficons\u002Fapple-icon-76x76.png"},{"rel":"apple-touch-icon","sizes":"114x114","href":"\u002Fimg\u002Ficons\u002Fapple-icon-114x114.png"},{"rel":"apple-touch-icon","sizes":"120x120","href":"\u002Fimg\u002Ficons\u002Fapple-icon-120x120.png"},{"rel":"apple-touch-icon","sizes":"144x144","href":"\u002Fimg\u002Ficons\u002Fapple-icon-144x144.png"},{"rel":"apple-touch-icon","sizes":"152x152","href":"\u002Fimg\u002Ficons\u002Fapple-icon-152x152.png"},{"rel":"apple-touch-icon","sizes":"180x180","href":"\u002Fimg\u002Ficons\u002Fapple-icon-180x180.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"192x192","href":"\u002Fimg\u002Ficons\u002Fandroid-icon-192x192.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"144x144","href":"\u002Fimg\u002Ficons\u002Fandroid-icon-144x144.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"96x96","href":"\u002Fimg\u002Ficons\u002Fandroid-icon-96x96.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"72x72","href":"\u002Fimg\u002Ficons\u002Fandroid-icon-72x72.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"48x48","href":"\u002Fimg\u002Ficons\u002Fandroid-icon-48x48.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"36x36","href":"\u002Fimg\u002Ficons\u002Fandroid-icon-36x36.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"96x96","href":"\u002Fimg\u002Ficons\u002Ffavicon-96x96.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"32x32","href":"\u002Fimg\u002Ficons\u002Ffavicon-32x32.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"16x16","href":"\u002Fimg\u002Ficons\u002Ffavicon-16x16.png"},{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Fimg\u002Ficons\u002Ffavicon.ico"},{"rel":"manifest","href":"\u002Fmanifest.json"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Montserrat:400,700&amp;subset=latin-ext"},{"rel":"shortcut icon","href":"img\u002Ficons\u002Fandroid-icon-36x36.png"}],"script":[{"type":"application\u002Fld+json","innerHTML":"{\"@context\":\"http:\u002F\u002Fschema.org\",\"@type\":\"WebSite\",\"name\":\"İstifa Et\",\"url\":\"http:\u002F\u002Fwww.istifaet.org\",\"image\":\"http:\u002F\u002Fwww.istifaet.org\u002Fcdn\u002Fimg\u002Flogo\u002Flogo-social-media.png\"}"}],"style":[]},

  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  methods: {
    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
