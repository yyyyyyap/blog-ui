import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    headerContent: {
      category: '',
      maintitle: '',
      subtitle: '',
      date: ''
    }
  },
  mutations: {
    setHeader (state, payload) {
      state.headerContent.category = payload.category
      state.headerContent.maintitle = payload.maintitle
      state.headerContent.subtitle = payload.subtitle
      state.headerContent.date = payload.date
    }
  }
})

export default store
