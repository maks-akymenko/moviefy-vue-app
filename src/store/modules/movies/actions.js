import { getPopularMovies, getMoviesGenres } from '../../../services/api'
import { normalizeArray } from '../../utils'
import to from 'await-to-js'

const actions = {
  async getPopularMovies ({ commit }, page) {
    const [error, response] = await to(getPopularMovies({ page }))
    if (error) throw error
    if (response) return response.data
  },
  async getMoviesGenres ({ commit }) {
    const [error, response] = await to(getMoviesGenres())

    if (error) throw error
    if (response) {
      const genres = response.data.genres

      const normalized = normalizeArray(genres)

      commit('SET_MOVIE_GENRES_MAP', normalized.entities.map)
      commit('SET_MOVIE_GENRES_IDS', normalized.result.array)
    }
  }
}

export default actions
