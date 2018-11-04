
const state = {
  user: null
}

const getters = {
  getUser (state) {
    return state.user
  },
  isUserLogged (state) {
    return state.user !== null
  }
}

const mutations = {
  SET_USER (state, user) {
    state.user = user
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}