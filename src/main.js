// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'

import '../src/assets/bootstrap.init.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '../src/assets/style.css'

import BootstrapVue from 'bootstrap-vue'
import VueScrollTo from 'vue-scrollto'
import PortalVue from 'portal-vue'
import i18n from './i18n'
import VueHtmlToPaper from 'vue-html-to-paper'

Vue.use(VueHtmlToPaper, {
  name: '_blank',
  specs: [
    'fullscreen=no',
    'titlebar=no',
    'scrollbars=no'
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
    'https://unpkg.com/kidlat-css/css/kidlat.css'
  ]
})
Vue.use(i18n)
Vue.use(BootstrapVue)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
Vue.use(PortalVue)

Vue.config.productionTip = true

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
