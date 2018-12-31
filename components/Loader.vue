<i18n>
  {
    "en": {
      "please_wait": "Please wait.."
    },
    "tr": {
      "please_wait": "Lütfen Bekleyiniz..."
    }
  }
</i18n>
<template>
  <div id="fullPageLoader">
    <img src="../assets/img/loader.svg" alt="Lütfen Bekleyiniz...">
    <h6 class="text-uppercase" id="fullPageLoaderMessage">
      {{ $t("please_wait") }}
    </h6>
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss" scoped>
  #fullPageLoader {
    background: transparentize(white, .1);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    img {
      margin-bottom: 2rem;
    }
  }
</style>
