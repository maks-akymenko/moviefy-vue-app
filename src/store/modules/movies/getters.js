const getters = {
  getGenre (state) {
    return genreId => state.genresMap[genreId]
  },
  isMovieFavorite (state) {
    return (moviedId) => state.favoriteMoviesId.includes(moviedId)
  },
  getFavoriteMovies (state) {
    return state.favoriteMoviesId
  },
  moviesGenresToSearch (state, getters, rootState) {
    // we check if we have with_genres query, because
    // when we sort, we dont look for genres
    return rootState.route.name === 'movies-search' &&
      rootState.route.query.with_genres
      ? rootState.route.query.with_genres
        .split(',')
        .filter(Boolean)
        .map(Number)
      : []
  }
}

export default getters
