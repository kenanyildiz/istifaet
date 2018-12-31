<i18n>
  {
    "en": {
      "choose_your_petition_type": "CHOOSE YOUR PETITION TYPE",
      "preview": "Preview"
    },
    "tr": {
      "choose_your_petition_type": "DİLEKÇENİ SEÇ",
      "preview": "Ön İzleme"
    }
  }
</i18n>
<template>
  <section id="petition-type-section" class="vh-100 mh-600px gradient-background gradient-background-5">
    <div class="container h-100">
      <div class="d-table w-100 h-100">
        <div class="d-table-cell align-middle text-center">
          <h4 class="text-uppercase h2 mb-5">
            {{ $t("choose_your_petition_type") }}
          </h4>
          <div class="row">
            <div class="col" v-for="(item, index) in options" :key="index">
              <div class="petition-type">
                <div class="icon-box d-none d-lg-block">
                  <img :src="require(`../assets/img/petition-type/petition-type-${index+1}.png`)" alt="Standart Dilekçe" class="img-fluid">
                </div>
                <h5 class="title text-uppercase h4">
                  {{ item.title }}
                </h5>
                <div class="preview-link">
                  <a class="text-dark" @click.self.stop.prevent="modalDisplayChanged($event, { name: 'infoModalOpt', display: true, index: index, source: getImgPath(index) })">
                    {{ $t("preview") }}
                  </a>
                </div>
                <b-form-radio-group :id="`petition_type_${index+1}`"
                  buttons="buttons"
                  @click="petitionTypeChanged"
                  @change="petitionTypeChanged"
                  button-variant="custom btn-outline-dark mt-3"
                  v-model="petition_type"
                  :options="[options[index]]"
                  name="petition_type" />
              </div>
            </div>
            <portal v-if="modalOpts.name === 'infoModalOpt' && modalOpts.display" to="home">
              <info
                :display="modalOpts.display"
                :index="modalOpts.index"
                :preview_petition_type="options[modalOpts.index].value">
              </info>
            </portal>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Info from '@/Components/modals/Info'
export default {
  name: 'PetitionType',
  data () {
    return {
      buttons: true
    }
  },
  components: {
    Info
  },
  methods: {
    getImgPath (index) {
      return require(`../assets/img/petition-type/petition-type-${index + 1}-preview.jpg`)
    },
    petitionTypeChanged () {
      this.$nextTick(() => {
        this.$scrollTo('#' + 'petition-form-section')
      })
    },
    modalDisplayChanged ($event, $modal) {
      this.$nextTick(() => {
        this.$store.dispatch('modalOptsChange', $modal)
      })
    }
  },
  computed: {
    options: {
      get () {
        return [
          { text: this.$i18n.t('choose_petition'), value: 1, isPreviewShow: false, title: this.$i18n.t('standart_petition') },
          { text: this.$i18n.t('choose_petition'), value: 2, isPreviewShow: false, title: this.$i18n.t('company_owed_you') }
        ]
      }
    },
    petition_type: {
      get () {
        return this.$store.state.petitionType
      },
      set (value) {
        this.$store.dispatch('petitionTypeChanged', value)
      }
    },
    modalOpts: {
      get () {
        return this.$store.getters.modalOpts
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .petition-type {
    .icon-box {
      margin-bottom: 2rem;
    }
  }
</style>
