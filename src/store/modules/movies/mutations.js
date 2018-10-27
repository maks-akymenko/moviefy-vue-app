const mutations = {
  'SET_MOVIE_GENRES_MAP' (state, data) {
    state.genresMap = data
  },

  'SET_MOVIE_GENRES_IDS' (state, data) {
    state.genresIds = data
  },
  'SELECT_FAVORITE_MOVIE' (state, data) {
    let { movieId, favorite } = data

    let favoriteMovieIndex = state.favoriteMoviesId.indexOf(movieId)

    if (favorite && favoriteMovieIndex === -1) {
      state.favoriteMoviesId.push(movieId)
    } else if (!favorite && favoriteMovieIndex !== -1) {
      state.favoriteMoviesId.splice(favoriteMovieIndex, 1)
    }
  }
}

export default mutations
