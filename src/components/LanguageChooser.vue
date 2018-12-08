<template>
  <div class="d-flex justify-content-end">
    <ul class="nav">
      <li class="nav-item" v-for="(lang, index) in languages" :key="index">
        <a href class="nav-link font-weight-normal text-white" @click.prevent="select($event, lang.code)">
          <img :src="require(`../assets/img/${lang.code}.png`)" :alt="lang.name">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'LanguageChooser',
  data () {
    return {
      lang: Vue.config.lang,
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
    select (e, code) {
      this.$i18n.locale = code
      localStorage.setItem('locale', code)
      this.setHtmlAttr()
    },
    setHtmlAttr () {
      document.getElementsByTagName('html')[0].setAttribute('lang', this.$i18n.locale)
    }
  },
  created () {
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
