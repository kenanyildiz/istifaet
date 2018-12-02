import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    petitionType: 1,
    modalOpts: {
      headerBgVariant: 'light',
      headerTextVariant: 'dark',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'light',
      footerTextVariant: 'dark',

      name: 'messagesModalOpt',
      display: false,
      type: 'resignation',
      contentType: '',
      messages: {},
      goBack: false,
      previous: {}
    },
    resignationModel: {
      full_name: '',
      email: '',
      company_name: '',
      start_date: '',
      end_date: '',
      petition_date: ''
    },
    suggestionModel: {
      full_name: '',
      email: '',
      subject_type: '1',
      message: '',
      selectedSubjectType: 1
    }
  },
  mutations: {
    setPetitionType (state, petitionType) {
      state.petitionType = petitionType
    },
    setModalOpts (state, modalOpts) {
      state.modalOpts = modalOpts
    },
    setResignationModel (state, resignationModel) {
      state.resignationModel = resignationModel
    },
    setSuggestionModel (state, suggestionModel) {
      state.suggestionModel = suggestionModel
    }
  },
  actions: {
    petitionTypeChanged ({ commit }, petitionType) {
      commit('setPetitionType', petitionType)
    },
    modalOptsChange ({ commit, state }, modalOpts) {
      let $modalOpts = state.modalOpts
      Object.assign($modalOpts, $modalOpts, modalOpts)
      commit('setModalOpts', modalOpts)
    },
    resignationModelChanged ({ commit, state }, resignationModel) {
      let $resignationModel = state.resignationModel
      Object.assign($resignationModel, $resignationModel, resignationModel)
      commit('setResignationModel', resignationModel)
    },
    resetResignationModel ({ commit }) {
      commit('setResignationModel', {
        full_name: '',
        email: '',
        company_name: '',
        start_date: '',
        end_date: '',
        petition_date: ''
      })
    },
    suggestionModelChanged ({ commit, state }, suggestionModel) {
      let $suggestionModel = state.suggestionModel
      Object.assign($suggestionModel, $suggestionModel, suggestionModel)
      commit('setSuggestionModel', suggestionModel)
    },
    resetSuggestionModel ({ commit }) {
      commit('setSuggestionModel', {
        full_name: '',
        email: '',
        subject_type: '1',
        message: '',
        selectedSubjectType: 1
      })
    }
  },
  getters: {
    petitionTypes (state) {
      return state.petitionTypes
    },
    petitionType (state) {
      return state.petitionType
    },
    subjectTypes (state) {
      return state.subjectTypes
    },
    modalOpts (state) {
      return state.modalOpts
    },
    resignationModel (state) {
      return state.resignationModel
    },
    suggestionModel (state) {
      return state.suggestionModel
    }
  }
})
