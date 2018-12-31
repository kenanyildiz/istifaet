<i18n>
  {
    "tr": {
      "petition_type_1_print_first": "<strong>{start_date}</strong>&nbsp;tarihi itibariyle başlamış olduğum görevimden&nbsp;<strong>{end_date}</strong> itibariyle ayrılıyorum. İstifamın kabulünü ve gereğinin yapılmasını arz ederim.",
      "petition_type_1_print_second": "Şirketinizde çalıştığım sürenin hem kariyerim, hem de kişisel ve profesyonel gelişimim açısından çok faydalı ve verimli olduğunu belirterek teşekkürlerimi iletiyorum. Çalıştığım süre içerisinde ben de şirkete olumlu katkılarda bulunmayı başardığımı umuyorum.",
      "petition_type_1_print_third": "Saygılarımla,<br />Ad Soyad: {full_name}<br />İmza:",

      "petition_type_2_print_first": "<strong>{start_date}</strong>&nbsp;tarihinden bu yana firmanızda calışmaktayım. Kişisel sebeplerden dolayı kendi isteğimle&nbsp;<strong>{end_date}</strong>&nbsp;tarihinden itibaren işten ayrılmak istiyorum. İşyerinden ayrılışımda tarafıma ödenmesi gereken tüm sosyal hak ve güvencelerimin ödenerek ayrılışımın yapılması hususunda;",
      "petition_type_2_print_second": "Gereğini arz ederim.",
      "petition_type_2_print_third": "Ad Soyad: {full_name}<br />İmza:"
    },
    "en": {
      "petition_type_1_print_first": "As of&nbsp;<strong>{start_date}</strong>,&nbsp;I have started my duty as of&nbsp;<strong>{end_date}</strong>. I would like to accept and demand my resignation.",
      "petition_type_1_print_second": "I would like to thank you for the fact that the time I have worked in your company is very beneficial and efficient in terms of both my career and personal and professional development. I hope that I have succeeded in making a positive contribution to the company during my work.",
      "petition_type_1_print_third": "Yours truly,<br />Fullname: {full_name}<br />Signature:",

      "petition_type_2_print_first": "I have been working in your company since&nbsp;<strong>{start_date}</strong>. For personal reasons, I would like to leave my job voluntarily from&nbsp;<strong>{end_date}</strong>. All social rights and guarantees that should be paid to my party when I leave the workplace are paid;",
      "petition_type_2_print_second": "I offer you what you need.",
      "petition_type_2_print_third": "Yours truly,<br />Fullname: {full_name}:<br />Signature:"
    }
  }
</i18n>
<template>
  <div id="printPetition">
    <!-- START - STANDART PETITION -->
    <div class="container" v-if="petition_type == 1">
      <p class="text-right">{{ $t('date') }}: {{ petitionDate }}</p>
      <p class="text-center">{{ company_name }}</p>
      <p>&nbsp;</p>
      <p v-html="$t('petition_type_1_print_first', { 'start_date': startDate, 'end_date': endDate })"></p>
      <p v-html="$t('petition_type_1_print_second')"></p>
      <p v-html="$t('petition_type_1_print_third', { 'full_name': full_name })"></p>
    </div>
    <!-- END - STANDART PETITION -->
    <!-- START - COMPANY OWED YOU -->
    <div class="container" v-else>
      <p class="text-right">{{ $t('date') }}: {{ petitionDate }}</p>
      <p class="text-center">{{ company_name }}</p>
      <p>&nbsp;</p>
      <p v-html="$t('petition_type_2_print_first', { 'start_date': startDate, 'end_date': endDate })"></p>
      <p v-html="$t('petition_type_2_print_second')"></p>
      <p v-html="$t('petition_type_2_print_third', { 'full_name': full_name })"></p>
    </div>
    <!-- END - COMPANY OWED YOU -->
  </div>
</template>

<script>
export default {
  name: 'PetitionPrint',
  props: ['full_name', 'company_name', 'start_date', 'end_date', 'petition_date', 'printable', 'petition_type'],
  data () {
    return {
      isPrintable: this.printable,
      locale: this.$i18n.locale
    }
  },
  methods: {
    getFormatedDate ($date) {
      return (typeof $date === 'object') ? this.$moment(String($date)).format('DD/MM/YYYY') : (typeof $date === 'string') ? $date : ''
    }
  },
  computed: {
    startDate () {
      return this.getFormatedDate(this.start_date)
    },
    endDate () {
      return this.getFormatedDate(this.end_date)
    },
    petitionDate () {
      return this.getFormatedDate(this.petition_date)
    }
  },
  created () {
    if (this.isPrintable) {
      setTimeout(() => {
        let $style = '@page { size: auto; margin: 0mm } ' +
          'body { background-color: #FFF; margin: 10mm } ' +
          '.text-right { text-align: right } ' +
          '.text-center { text-align: center }'
        printJS({ printable: 'printPetition', type: 'html', style: $style })
      }, 500)
    }
  }
}
</script>

<style scoped>

</style>
