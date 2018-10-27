const getters = {
  getGenre (state) {
    return genreId => state.genresMap[genreId]
  },
  isMovieFavorite (state) {
    return (moviedId) => state.favoriteMoviesId.includes(moviedId)
  }
}

export default getters
