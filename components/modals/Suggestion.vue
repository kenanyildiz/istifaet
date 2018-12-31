<i18n>
  {
    "en": {
      "you_can_help_us_by_writing_your_opinions_suggestions_or_complaints": "You can help us by writing your opinions / suggestions and complaints.",
      "opinions_suggestions_or_complaints": "Opinions / Suggestions or Complaints",
      "subject": "Subject",
      "message": "Message",
      "send": "Send",
      "reset_form": "Reset Form",
      "thanks_for_what_we_need_to_reach_our_development_it_can_be_used_as_soon_as_possible": "Thanks for what we need to reach our development, it can be used as soon as possible."
    },
    "tr": {
      "you_can_help_us_by_writing_your_opinions_suggestions_or_complaints": "Görüş/Öneri ve şikayetlerinizi yazarak bizlere yardımcı olabilirsiniz.",
      "opinions_suggestions_or_complaints": "Görüş / Öneri veya Şikayetleriniz",
      "subject": "Konu",
      "message": "Mesajınız",
      "send": "Gönder",
      "reset_form": "Formu Temizle",
      "thanks_for_what_we_need_to_reach_our_development_it_can_be_used_as_soon_as_possible": "Gelişimimize katkıda bulunduğunuz için teşekkür ederiz, en kısa sürede değerlendirmeye alacağız."
    }
  }
</i18n>
<template>
  <div>
    <b-modal
      id="suggestionModal"
      v-model="isDisplay"
      :hide-header-close="true"
      :title="$t('opinions_suggestions_or_complaints')"
      :header-bg-variant="modalOpts.headerBgVariant"
      :header-text-variant="modalOpts.headerTextVariant"
      :body-bg-variant="modalOpts.bodyBgVariant"
      :body-text-variant="modalOpts.bodyTextVariant"
      :footer-bg-variant="modalOpts.footerBgVariant"
      size="lg"
      :footer-text-variant="modalOpts.footerTextVariant"
      @hide="modalDisplayChanged($event, { name: 'suggestionModalOpt', display: false, contentType: null })">
      <form
        id="suggestionForm"
        ref="suggestionForm"
        @reset="model = {}"
        @submit.prevent="checkForm($event, { name: 'suggestionModalOpt', display: false, contentType: null })">
        <div class="container pt-3 pb-3">
          <p>{{ $t('you_can_help_us_by_writing_your_opinions_suggestions_or_complaints') }}</p>
          <div class="form-group">
            <label for="full_name">{{ $t("fullname") }}</label>
            <input
              id="full_name"
              v-model.trim="model.full_name"
              :placeholder="$t('fullname')"
              type="text"
              class="form-control"
              name="full_name">
          </div>
          <div class="form-group">
            <label for="email">{{ $t("e_mail") }}</label>
            <input
              id="email"
              v-model.trim="model.email"
              :placeholder="$t('e_mail')"
              type="email"
              class="form-control"
              name="email"
              required>
          </div>
          <div class="form-group">
            <label for="subject_type">{{ $t("subject") }}</label>
            <select
              id="subject_type"
              v-model="model.selectedSubjectType"
              class="custom-select"
              name="subject_type"
              required>
              <option
                v-for="(subjectType, index) in subjectTypes"
                :value="subjectType.value"
                :key="index">
                {{ subjectType.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">{{ $t("message") }}</label>
            <textarea
              id="message"
              v-model.trim="model.message"
              :placeholder="$t('message')"
              class="form-control"
              name="message"
              minlength="10"
              maxlength="1000"
              required/>
          </div>
          <button
            class="btn btn-custom btn-outline-dark mr-2"
            type="submit">{{ $t("send") }}</button>
          <button
            class="btn btn-custom btn-outline-danger"
            type="reset">{{ $t("reset_form") }}</button>
        </div>
      </form>
      <div
        slot="modal-footer"
        class="w-100 text-right">
        <b-btn
          variant="custom btn-outline-dark"
          data-dismiss="modal"
          @click.prevent="modalDisplayChanged($event, { name: 'suggestionModalOpt', display: false, contentType: null })">
          {{ $t("close") }}
        </b-btn>
      </div>
    </b-modal>
    <loader v-if="isLoading"/>
  </div>
</template>

<script>
import Loader from '@/Components/Loader'

export default {
  name: 'Suggestion',
  components: {
    Loader
  },
  props: {
    display: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isLoading: false,
      isDisplay: this.display,
      suggestionSuccessText: ''
    }
  },
  computed: {
    modalOpts: {
      get() {
        return this.$store.getters.modalOpts
      }
    },
    subjectTypes: {
      get() {
        return [
          {
            name: this.$i18n.t('opinion_suggestion'),
            value: 1
          },
          {
            name: this.$i18n.t('complaint'),
            value: 2
          },
          {
            name: this.$i18n.t('other'),
            value: 3
          }
        ]
      }
    },
    model: {
      get() {
        return this.$store.getters.suggestionModel
      },
      set() {
        this.$store.dispatch('resetSuggestionModel')
      }
    }
  },
  methods: {
    checkForm($event, $modal) {
      this.modalDisplayChanged($event, {
        contentType: 'success',
        messages: this.$i18n.t(
          'thanks_for_what_we_need_to_reach_our_development_it_can_be_used_as_soon_as_possible'
        ),
        display: true,
        name: 'messagesModalOpt',
        type: 'suggestion',
        goBack: false,
        previous: null
      })
    },
    modalDisplayChanged($event, $modal) {
      this.$store.dispatch('modalOptsChange', $modal)

      if (!$event.hasOwnProperty('keepAlive')) {
        this.resetSuggestionModel()
      }
    },
    resetSuggestionModel() {
      this.$store.dispatch('resetSuggestionModel')
    }
  }
}
</script>
