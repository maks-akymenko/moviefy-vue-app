import Vue from 'vue'
import Vuex from 'vuex'

import movies from './modules/movies'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  modules: {
    movies,
    user
  },
  mutations: {
    'INITIALIZE_STORE' (state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        )
      }
    }
  },
  actions: {}
})

// we are subscribing to the store updated.
// It triggers every time the store updates.
store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state))
})

export default store
