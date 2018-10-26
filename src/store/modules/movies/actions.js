import { getPopularMovies, getMoviesGenres } from '../../../services/api'
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
    if (response) console.log(response.data)
  }
}

export default actions
