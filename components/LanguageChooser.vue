<template>
  <div class="d-flex justify-content-end">
    <ul class="nav">
      <li class="nav-item" v-for="(lang, index) in languages" :key="index">
        <nuxt-link :to="'/' + (lang.code === 'en' ? 'en' : '')" tag="a"
                   class="nav-link font-weight-normal text-white" exact>
          <img :src="require(`../assets/img/${lang.code}.png`)" :alt="lang.name">
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LanguageChooser',
  head(){
    return {
      htmlAttrs: {
        lang: this.current,
      },
    }
  },
  data () {
    return {
      current: this.$i18n.locale,
      languages: [
        {
          code: 'tr'
        },
        {
          code: 'en'
        }
      ]
    }
  },
  methods: {
    setHtmlAttr () {
      process.client && document.getElementsByTagName('html')[0].setAttribute('lang', this.$i18n.locale)
    }
  },
  beforeMount () {
    this.setHtmlAttr()
  }
}
</script>

<style scoped>
  .nav {
    margin-bottom: 0;
  }
  li {
    list-style: none;
    margin-left: 15px;
    display: inline-block;
  }
</style>
