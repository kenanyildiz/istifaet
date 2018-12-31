<i18n>
  {
    "en": {
      "all_rights_reserved": "All Rights Reserved.",
      "copyright": "Copyright",
      "privacy_agreement": "Privacy Agreement",
      "cookie_policy": "Cookie Policy",
      "suggestions": "Suggestions"
    },
    "tr": {
      "all_rights_reserved": "Tüm Hakları Saklıdır.",
      "copyright": "Telif Hakları",
      "privacy_agreement": "Gizlilik Sözleşmesi",
      "cookie_policy": "Çerez Politikası",
      "suggestions": "Önerileriniz"
    }
  }
</i18n>
<template>
  <footer id="footer" class="bg-dark text-light py-5 text-center">
    <div class="container">
      <div id="footer-logo" class="mb-5">
        <img src="../assets/img/logo/logo-white.png" alt="İstifa Et" class="mb-3">
        <p class="small">
          {{ $t('copyright') }} &copy; İstifa Et 2018.
          {{ $t('all_rights_reserved') }}
        </p>
      </div>
      <div id="footer-menu">
        <ul class="list-inline m-0">
          <li class="list-inline-item">
            <a href="#" class="text-muted" v-b-modal="'privacyModal'" @click.stop.prevent="">
              {{ $t('privacy_agreement') }}
              <portal to="home">
                <privacy></privacy>
              </portal>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#" class="text-muted" v-b-modal="'cookieModal'" @click.stop.prevent="">
              {{ $t('cookie_policy') }}
              <portal to="home">
                <cookie></cookie>
              </portal>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#" class="text-muted" @click.prevent="modalDisplayChanged($event, { name: 'suggestionModalOpt', display: true, contentType: null })">
              {{ $t('suggestions') }}
              <portal v-if="modalOpts.display && modalOpts.name === 'suggestionModalOpt'" to="home" :order="1">
                <suggestion :display="modalOpts.display"></suggestion>
              </portal>

              <portal v-if="modalOpts.display && modalOpts.name === 'messagesModalOpt'" to="home" :order="2">
                <success-messages v-if="modalOpts.contentType === 'success'"
                  :display="modalOpts.display"
                  :type="modalOpts.type"
                  :content-type="modalOpts.contentType"
                  :content="modalOpts.messages">
                </success-messages>
                <error-messages v-if="modalOpts.contentType === 'error'"
                  :go-back="modalOpts.goBack"
                  :previous="modalOpts.previous"
                  :display="modalOpts.display"
                  :type="modalOpts.type"
                  :content-type="modalOpts.contentType"
                  :content="modalOpts.messages">
                </error-messages>
              </portal>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>

import Cookie from '@/Components/modals/Cookie'
import Privacy from '@/Components/modals/Privacy'
import Suggestion from '@/Components/modals/Suggestion'
import SuccessMessages from '@/Components/modals/SuccessMessages'

export default {
  name: 'AppFooter',
  components: {
    SuccessMessages,
    Cookie,
    Privacy,
    Suggestion
  },
  methods: {
    modalDisplayChanged ($event, $modal) {
      this.$store.dispatch('modalOptsChange', $modal)
    }
  },
  computed: {
    modalOpts: {
      get () {
        return this.$store.getters.modalOpts
      }
    }
  }
}
</script>

<style scoped>

</style>
