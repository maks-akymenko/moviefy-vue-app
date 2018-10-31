// import { removeRepeatedCommas } from '../../../shared/utils/textAndDateUtils'

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
//   moviesGenresToSearch (state, getters, { route }) {
//     return route.name === 'searched-movies'
//       ? removeRepeatedCommas(route.query.withGenres)
//         .split(',')
//         .filter(Boolean)
//         .map(Number)
//       : []
//   }
}

export default getters
