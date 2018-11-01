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
    return rootState.route.name === 'movies-search'
      ? rootState.route.query.with_genres
        .split(',')
        .filter(Boolean)
        .map(Number)
      : []
  }
}

export default getters
