<i18n>
  {
    "en": {
      "easiest_way_to_resign": "EASIEST WAY TO RESIGN",
      "choose_your_petition_fill_the_form_your_resign_petition_will_be_ready_to_download": "CHOOSE YOUR PETITION, FILL THE FORM, YOUR RESIGN PETITION WILL BE READY TO DOWNLOAD",
      "lets_begin": "LET'S BEGIN"
    },
    "tr": {
      "easiest_way_to_resign": "İSTİFA ETMEK HİÇ BU KADAR KOLAY OLMAMIŞTI",
      "choose_your_petition_fill_the_form_your_resign_petition_will_be_ready_to_download": "DİLEKÇENİ SEÇ, FORMU DOLDUR, İSTİFA DİLEKÇEN E-POSTA ADRESİNE GELSİN",
      "lets_begin": "ŞİMDİ BAŞLA"
    }
  }
</i18n>

<template>
  <header id="header" class="cover cover-fixed cover-1 vh-100 mh-600px">
    <div class="container h-100">
      <language-chooser></language-chooser>
      <h1 id="logo" title="İstifa Et">
        <a href="/">İstifa Et {{  $t("hello") }}</a>
      </h1>
      <div class="d-table w-100 h-100">
        <div class="d-table-cell align-middle text-center">
          <h2 class="text-uppercase text-white h1">
            {{ $t("easiest_way_to_resign") }}
          </h2>
          <h3 class="text-uppercase font-weight-normal text-white h6">
            {{ $t("choose_your_petition_fill_the_form_your_resign_petition_will_be_ready_to_download") }}
          </h3>
          <button type="button" class="btn btn-custom btn-outline-light mx-auto mt-5 text-uppercase" v-scroll-to="'#petition-type-section'">
           {{ $t("lets_begin") }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LanguageChooser from './LanguageChooser'
export default {
  name: 'AppHeader',
  components: {
    LanguageChooser
  }
}
</script>

<style lang="scss" scoped>
  #header {
    padding: 3rem 0;
  }
  #logo {
    display: block;
    width: 123px;
    height: 30px;
    margin: 0 auto 0;
    a {
      background: url(../assets/img/logo/logo-white.png);
      display: block;
      text-indent: -9999px;
      width: 100%;
      height: 100%;
      transition: ease-in-out .3s;
    }&:hover {
      opacity: .8;
    }
  }
</style>
