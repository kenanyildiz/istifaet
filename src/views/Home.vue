<template>
  <div class="home">
    <app-header></app-header>
    <petition-type></petition-type>
    <resignation-form></resignation-form>
    <app-footer></app-footer>
    <portal-target name="home" multiple></portal-target>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
import ResignationForm from '../components/ResignationForm'
import AppFooter from '../components/AppFooter'
import PetitionType from '../components/PetitionType'

export default {
  name: 'Home',
  components: {
    AppHeader,
    PetitionType,
    ResignationForm,
    AppFooter
  },
  data () {
    return {
      title: process.env.VUE_APP_TITLE
    }
  }
}
</script>

<style scoped>

</style>
