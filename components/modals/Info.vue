<template>
  <b-modal
    id="infoModal"
    v-model="isDisplay"
    :hide-header-close="true"
    :title="$t('sample_petition')"
    :header-bg-variant="modalOpts.headerBgVariant"
    :header-text-variant="modalOpts.headerTextVariant"
    :body-bg-variant="modalOpts.bodyBgVariant"
    :body-text-variant="modalOpts.bodyTextVariant"
    :footer-bg-variant="modalOpts.footerBgVariant"
    size="lg"
    :footer-text-variant="modalOpts.footerTextVariant"
    @hide="modalDisplayChanged($event, { name: 'infoModalOpt', display: false, source: null })">
    <b-container fluid>
      <b-row>
        <b-col>
          <petition-print
            :printable="false"
            :petition_type="preview_petition_type"
            :full_name="model.full_name"
            :company_name="model.company_name"
            :start_date="model.start_date"
            :end_date="model.end_date"
            :petition_date="model.petition_date"/>
        </b-col>
      </b-row>
    </b-container>
    <div
      slot="modal-footer"
      class="w-100 text-right">
      <b-btn
        variant="custom btn-outline-dark"
        data-dismiss="modal"
        @click="modalDisplayChanged($event, { name: 'infoModalOpt', display: false, source: null })">
        {{ $t("close") }}
      </b-btn>
    </div>
  </b-modal>
</template>

<script>
import PetitionPrint from './../PetitionPrint'

export default {
  components: {
    PetitionPrint
  },
  props: {
    preview_petition_type: Number,
    display: {
      type: Boolean,
      default: false
    },
    index: Number
  },
  data() {
    return {
      isDisplay: this.display,
      model: {
        full_name: 'Şener Sunal',
        company_name: 'İstifa Et A.Ş.',
        start_date: '01/04/2018',
        end_date: '30/04/2018',
        petition_date: '15/04/2018'
      }
    }
  },
  computed: {
    petition_type() {
      return this.$store.getters.petitionType
    }
  },
  created() {
    this.modalOpts = this.$store.getters.modalOpts
  },
  methods: {
    modalDisplayChanged($event, $modal) {
      this.$store.dispatch('modalOptsChange', $modal)
    }
  }
}
</script>
