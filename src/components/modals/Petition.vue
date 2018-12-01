<template>
  <b-modal id="petitionModal" v-model="isDisplay"
           size="lg"
           @hide="modalDisplayChanged($event, { name: 'petitionModalOpt', display: false, source: null })"
           :hide-header-close="true"
           :centered="false"
           :hide-header="true"
           :body-bg-variant="modalOpts.bodyBgVariant"
           :body-text-variant="modalOpts.bodyTextVariant"
           :footer-bg-variant="modalOpts.footerBgVariant"
           :footer-text-variant="modalOpts.footerTextVariant">
    <b-container fluid>
      <b-row class="text-left">
        <b-col>
          <petition-print
            :printable="true"
            :petition_type="petition_type"
            :full_name="model.full_name"
            :company_name="model.company_name"
            :start_date="model.start_date"
            :end_date="model.end_date"
            :petition_date="model.petition_date">
          </petition-print>
        </b-col>
      </b-row>
    </b-container>
    <div slot="modal-footer" class="w-100 text-right">
      <b-btn variant="custom btn-outline-dark" data-dismiss="modal" @click="modalDisplayChanged($event, { name: 'petitionModalOpt', display: false })">
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
    display: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      modalOpts: null,
      isDisplay: this.display
    }
  },
  methods: {
    hideModal () {
      this.$refs.petitionModal.hide()
    },
    modalDisplayChanged ($event, $modal) {
      this.$store.dispatch('modalOptsChange', $modal)
    }
  },
  computed: {
    petition_type () {
      return this.$store.getters.petitionType
    },
    model: {
      get () {
        return this.$store.getters.resignationModel
      }
    }
  },
  created () {
    this.modalOpts = this.$store.getters.modalOpts
  }
}
</script>
