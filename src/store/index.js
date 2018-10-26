import Vue from 'vue'
import Vuex from 'vuex'

import movies from './modules/movies'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  modules: {
    movies
  },
  mutations: {},
  actions: {}
})

export default store
