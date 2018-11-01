import axios from 'axios'
import * as constants from '../shared/constants'
const axiosMovieDB = axios.create({
  baseURL: constants.BASE_URL,
  params: {
    api_key: constants.API_KEY
  }
})

export function getPopularMovies (params) {
  return axiosMovieDB('3/movie/popular', {
    params
  })
}

export function getMovie (movieId) {
  return axiosMovieDB(`3/movie/${movieId}`)
}
// For later
// export function getMovieCredits (movieId) {
//   return axiosMovieDB(`3/movie/${movieId}/credits`)
// }

export function getMoviesGenres () {
  return axiosMovieDB('3/genre/movie/list')
}

export function getSimilarMovies (movieId) {
  return axiosMovieDB(`3/movie/${movieId}/similar`)
}

export function getMovieVideo (movieId) {
  return axiosMovieDB(`3/movie/${movieId}/videos`)
}

export function getMovieSearchResults (params) {
  return axiosMovieDB('3/search/movie', {
    params
  })
}

export function getMoviesWithFiltering (params) {
  return axiosMovieDB('3/discover/movie', {
    params
  })
}
