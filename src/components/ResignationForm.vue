<i18n>
  {
    "en": {
      "fill_the_petition_form": "Fill The Petition Form",
      "company_name": "Company Name",
      "starting_date": "Starting Date",
      "leaving_date": "Leaving Date",
      "petition_date": "Petition Date",
      "create_petition": "Create Petition"
    },
    "tr": {
      "fill_the_petition_form": "Dilekçe Formunu Doldurunuz",
      "company_name": "Şirket İsmi",
      "starting_date": "Başlama Tarihi",
      "leaving_date": "Ayrılma Tarihi",
      "petition_date": "Dilekçe Tarihi",
      "create_petition": "Dilekçe Oluştur"
    }
  }
</i18n>
<template>
  <form ref="resignationForm" id="resignationForm" @submit.prevent="checkForm">
    <section ref="petition-form-section" id="petition-form-section" class="py-5">
      <div class="container h-100">
        <div class="d-table w-100 h-100">
          <div class="d-table-cell align-middle">
            <h4 class="text-uppercase text-dark h2 mb-5 text-center">
             {{ $t("fill_the_petition_form") }}
            </h4>
            <div class="row">
              <div class="col-lg">
                <div class="form-group">
                  <label for="full_name" class="font-weight-bold text-uppercase">{{ $t("fullname") }}</label>
                  <input type="text" class="form-control form-control-lg" id="full_name" v-model.trim="model.full_name" name="full_name" :placeholder="$t('fullname')" autocomplete="on" required>
                </div>
                <div class="form-group">
                  <label for="email" class="font-weight-bold text-uppercase">{{ $t("e_mail") }}</label>
                  <input type="email" class="form-control form-control-lg" id="email" v-model.trim="model.email" name="email" :placeholder="$t('e_mail')" autocomplete="off" required>
                </div>
                <div class="form-group">
                  <label for="company_name" class="font-weight-bold text-uppercase">{{ $t("company_name") }}</label>
                  <input type="text" class="form-control form-control-lg" id="company_name" v-model.trim="model.company_name" name="company_name" :placeholder="$t('company_name')" autocomplete="off" required>
                </div>
              </div>
              <div class="col-lg">
                <div class="form-group">
                  <label for="start_date" class="font-weight-bold text-uppercase">{{ $t("starting_date") }}</label>
                  <datepicker id="start_date"
                              name="start_date"
                              :placeholder="$t('starting_date')"
                              input-class="form-control form-control-lg"
                              :format="dateOptions.date_format"
                              :language="dateOptions.tr"
                              v-model.trim="model.start_date"
                              :full-month-name="dateOptions.isFullMonthName"
                              :monday-first="dateOptions.isMondayFirst"
                              :bootstrap-styling="dateOptions.bootstrapStyling"
                              :required="dateOptions.isStartDateRequired">
                  </datepicker>
                </div>
                <div class="form-group">
                  <label for="end_date" class="font-weight-bold text-uppercase">{{ $t("leaving_date") }}</label>
                  <datepicker id="end_date"
                              name="end_date"
                              :placeholder="$t('leaving_date')"
                              input-class="form-control form-control-lg"
                              :format="dateOptions.date_format"
                              :language="dateOptions.tr"
                              v-model.trim="model.end_date"
                              :full-month-name="dateOptions.isFullMonthName"
                              :monday-first="dateOptions.isMondayFirst"
                              :bootstrap-styling="dateOptions.bootstrapStyling"
                              :required="dateOptions.isEndDateRequired">
                  </datepicker>
                </div>
                <div class="form-group">
                  <label for="petition_date" class="font-weight-bold text-uppercase">{{ $t("petition_date") }}</label>
                  <datepicker id="petition_date"
                              name="petition_date"
                              :placeholder="$t('petition_date')"
                              input-class="form-control form-control-lg"
                              :format="dateOptions.date_format"
                              :language="dateOptions.tr"
                              v-model.trim="model.petition_date"
                              :full-month-name="dateOptions.isFullMonthName"
                              :monday-first="dateOptions.isMondayFirst"
                              :bootstrap-styling="dateOptions.bootstrapStyling"
                              :required="dateOptions.isPetitionDateRequired">
                  </datepicker>
                </div>
              </div>
            </div>
            <div class="mt-5 form-group text-center">
              <button class="btn btn-custom btn-outline-dark submit-btn" type="submit">
                {{ $t("create_petition") }}
              </button>
              <a class="text-dark" data-toggle="modal" data-target="#messageModal" id="openMessageModalBtn" hidden></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <portal v-if="modalOpts.name === 'petitionModalOpt' && modalOpts.display" to="home">
      <petition :display="modalOpts.display"></petition>
    </portal>
    <loader v-if="isLoading"></loader>
  </form>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { tr } from 'vuejs-datepicker/dist/locale'
import Loader from '../components/Loader'
import Petition from './../components/modals/Petition'

export default {
  name: 'ResignationForm',
  components: {
    Datepicker,
    Loader,
    Petition
  },
  data () {
    return {
      isLoading: false,
      dateOptions: {
        isFullMonthName: true,
        isMondayFirst: true,
        isPetitionDateRequired: true,
        isEndDateRequired: true,
        isStartDateRequired: true,
        tr: tr,
        bootstrapStyling: true,
        date_format: 'dd/MM/yyyy'
      }
    }
  },
  methods: {
    checkForm ($event) {
      this.modalDisplayChanged($event, { name: 'petitionModalOpt', display: true })
    },
    modalDisplayChanged ($event, $modal) {
      this.$store.dispatch('modalOptsChange', $modal)
    }
  },
  computed: {
    modalOpts: {
      get () {
        return this.$store.getters.modalOpts
      }
    },
    petition_type () {
      return this.$store.getters.petitionType
    },
    model: {
      get () {
        return this.$store.getters.resignationModel
      },
      set () {
        this.$store.dispatch('resetResignationModel')
      }
    }
  }
}
</script>
