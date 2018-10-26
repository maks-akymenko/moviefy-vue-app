const getters = {
  getGenre: state => genreId => {
    return state.genresMap[genreId]
  }
}

export default getters
