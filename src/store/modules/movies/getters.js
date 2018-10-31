const getters = {
  getGenre (state) {
    return genreId => state.genresMap[genreId]
  },
  isMovieFavorite (state) {
    return (moviedId) => state.favoriteMoviesId.includes(moviedId)
  },
  getFavoriteMovies (state) {
    return state.favoriteMoviesId
  }
}

export default getters
