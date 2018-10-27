import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  favoriteMoviesId: [],
  genresIds: [],
  genresMap: {}
}

export default {
  getters,
  state,
  mutations,
  actions
}
