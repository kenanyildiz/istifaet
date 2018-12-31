<i18n>
  {
    "en": {
      "petition_status": "Petition Status"
    },
    "tr": {
      "petition_status": "Dilekçe Durumu"
    }
  }
</i18n>
<template>
  <b-modal
    id="messagesModal"
    v-model="isDisplay"
    :hide-header-close="true"
    :title="$t('petition_status')"
    :header-bg-variant="modalOpts.headerBgVariant"
    :header-text-variant="modalOpts.headerTextVariant"
    :body-bg-variant="modalOpts.bodyBgVariant"
    :body-text-variant="modalOpts.bodyTextVariant"
    :footer-bg-variant="modalOpts.footerBgVariant"
    size="md"
    :footer-text-variant="modalOpts.footerTextVariant"
    @hide="modalDisplayChanged($event, { name: 'messagesModalOpt', display: false, contentType: null })">
    <b-container fluid>
      <b-row class="text-left">
        <b-col>
          <!-- START - SUGGESTION SUCCESS MESSAGE -->
          <div
            v-if="contentType === 'success' && type === 'suggestion'"
            class="alert alert-success"
            role="alert">
            {{ content }}
          </div>
          <!-- END - SUGGESTION SUCCESS MESSAGE -->
        </b-col>
      </b-row>
    </b-container>
    <div
      slot="modal-footer"
      class="w-100 text-right">
      <b-btn
        variant="custom btn-outline-dark"
        data-dismiss="modal"
        @click.prevent="modalDisplayChanged($event, { name: 'messagesModalOpt', display: false, contentType: null })">
        {{ $t("close") }}
      </b-btn>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'SuccessMessages',
  props: {
    type: {
      type: String,
      required: true
    },
    contentType: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    display: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isDisplay: this.display
    }
  },
  computed: {
    modalOpts: {
      get() {
        return this.$store.getters.modalOpts
      }
    }
  },
  methods: {
    modalDisplayChanged($event, $modal) {
      this.$store.dispatch('modalOptsChange', $modal)
    }
  }
}
</script>

<style scoped>

</style>
