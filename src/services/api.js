import axios from 'axios'
import * as constants from '../shared/constants'

const axiosMovieDB = axios.create({
  baseURL: constants.BASE_URL,
  params: {
    api_key: constants.API_KEY
  }
})

export function getPopularMovies (params) {
  return axiosMovieDB('3/movie/popular', { params })
}

export function getMovie (movieId) {
  return axiosMovieDB(`3/movie/${movieId}`)
}