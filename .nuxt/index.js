import Vue from 'vue'
import Meta from 'vue-meta'
import { createRouter } from './router.js'
import NoSSR from './components/no-ssr.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtLink from './components/nuxt-link.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_swplugin_1e0d8aa7 from 'nuxt_plugin_swplugin_1e0d8aa7' // Source: ./sw.plugin.js (ssr: false)
import nuxt_plugin_nuxticons_bb5ff40c from 'nuxt_plugin_nuxticons_bb5ff40c' // Source: ./nuxt-icons.js
import nuxt_plugin_pluginseo_19654b74 from 'nuxt_plugin_pluginseo_19654b74' // Source: ./nuxt-i18n\\plugin.seo.js
import nuxt_plugin_pluginrouting_7e06552a from 'nuxt_plugin_pluginrouting_7e06552a' // Source: ./nuxt-i18n\\plugin.routing.js
import nuxt_plugin_pluginmain_6259f438 from 'nuxt_plugin_pluginmain_6259f438' // Source: ./nuxt-i18n\\plugin.main.js
import nuxt_plugin_bootstrapvue_68d76c3d from 'nuxt_plugin_bootstrapvue_68d76c3d' // Source: ./bootstrap-vue.js
import nuxt_plugin_portalvue_0d17c905 from 'nuxt_plugin_portalvue_0d17c905' // Source: ./portal-vue.js
import nuxt_plugin_printjs_3f80e8b7 from 'nuxt_plugin_printjs_3f80e8b7' // Source: ..\\plugins\\print-js.js
import nuxt_plugin_i18n_3032693c from 'nuxt_plugin_i18n_3032693c' // Source: ..\\plugins\\i18n.js
import nuxt_plugin_vuemoment_0941fc0e from 'nuxt_plugin_vuemoment_0941fc0e' // Source: ..\\plugins\\vue-moment.js
import nuxt_plugin_vuescrollto_2a1bb871 from 'nuxt_plugin_vuescrollto_2a1bb871' // Source: ..\\plugins\\vue-scrollto.js

// Component: <no-ssr>
Vue.component(NoSSR.name, NoSSR)

// Component: <nuxt-child>
Vue.component(NuxtChild.name, NuxtChild)

// Component: <nuxt-link>
Vue.component(NuxtLink.name, NuxtLink)

// Component: <nuxt>`
Vue.component(Nuxt.name, Nuxt)

// vue-meta configuration
Vue.use(Meta, {
  keyName: 'head', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-n-head', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-n-head-ssr', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'hid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    router,
    store,
    nuxt: {
      defaultTransition,
      transitions: [ defaultTransition ],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [ transitions ]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null
        app.context._errored = !!err
        err = err ? normalizeError(err) : null
        const nuxt = this.nuxt || this.$options.nuxt
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) ssrContext.nuxt.error = err
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    store,
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined
  })

  const inject = function (key, value) {
    if (!key) throw new Error('inject(key, value) has no key provided')
    if (typeof value === 'undefined') throw new Error('inject(key, value) has no value provided')
    key = '$' + key
    // Add into app
    app[key] = value

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) return
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Vue.prototype.hasOwnProperty(key)) {
        Object.defineProperty(Vue.prototype, key, {
          get() {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Plugin execution

  if (typeof nuxt_plugin_nuxticons_bb5ff40c === 'function') await nuxt_plugin_nuxticons_bb5ff40c(app.context, inject)
  if (typeof nuxt_plugin_pluginseo_19654b74 === 'function') await nuxt_plugin_pluginseo_19654b74(app.context, inject)
  if (typeof nuxt_plugin_pluginrouting_7e06552a === 'function') await nuxt_plugin_pluginrouting_7e06552a(app.context, inject)
  if (typeof nuxt_plugin_pluginmain_6259f438 === 'function') await nuxt_plugin_pluginmain_6259f438(app.context, inject)
  if (typeof nuxt_plugin_bootstrapvue_68d76c3d === 'function') await nuxt_plugin_bootstrapvue_68d76c3d(app.context, inject)
  if (typeof nuxt_plugin_portalvue_0d17c905 === 'function') await nuxt_plugin_portalvue_0d17c905(app.context, inject)
  if (typeof nuxt_plugin_printjs_3f80e8b7 === 'function') await nuxt_plugin_printjs_3f80e8b7(app.context, inject)
  if (typeof nuxt_plugin_i18n_3032693c === 'function') await nuxt_plugin_i18n_3032693c(app.context, inject)
  if (typeof nuxt_plugin_vuemoment_0941fc0e === 'function') await nuxt_plugin_vuemoment_0941fc0e(app.context, inject)
  if (typeof nuxt_plugin_vuescrollto_2a1bb871 === 'function') await nuxt_plugin_vuescrollto_2a1bb871(app.context, inject)

  if (process.client) {
    if (typeof nuxt_plugin_swplugin_1e0d8aa7 === 'function') await nuxt_plugin_swplugin_1e0d8aa7(app.context, inject)
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    store,
    router
  }
}

export { createApp, NuxtError }
