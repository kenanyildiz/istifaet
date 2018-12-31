<template>
  <div class="home">
    <app-header/>
    <petition-type/>
    <resignation-form/>
    <app-footer/>
    <portal-target
      name="home"
      multiple/>
  </div>
</template>

<script>
  import AppHeader from '@/Components/AppHeader'
  import ResignationForm from '@/Components/ResignationForm'
  import AppFooter from '@/Components/AppFooter'
  import PetitionType from '@/Components/PetitionType'

  export default {
    name: 'Index',
    components: {
      AppHeader,
      PetitionType,
      ResignationForm,
      AppFooter
    },
    data() {
      return {
        title: process.env.VUE_APP_TITLE
      }
    }
  }
</script>

<style scoped>
</style>
