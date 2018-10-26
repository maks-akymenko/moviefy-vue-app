const mutations = {
  'SET_MOVIE_GENRES_MAP' (state, data) {
    state.genresMap = data
  },

  'SET_MOVIE_GENRES_IDS' (state, data) {
    state.genresIds = data
  }
}

export default mutations
