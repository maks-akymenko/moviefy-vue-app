<template>
  <div class="popular-movies section">
    <section class="container is-fluid">
      <heading>Popular movies</heading>

      <pagination :current-page="page" :total-pages="totalPages" route-name="popular-movies"></pagination>
  
      <div class="columns is-multiline popular-movies__results" >
        <div type="cards" v-show="loading">Loading...</div>

        <div
        class="column is-12 is-half-desktop is-4-fullhd"
        v-for="movie in movies"
        :key="movie.id">

          <single-movie :movie="movie" />
        </div>
      </div>
      <pagination :current-page="page" :total-pages="totalPages" route-name="popular-movies"></pagination>
    </section>
  </div>
</template>

<script>
import SingleMovie from '../components/SingleMovie'
import Pagination from '../components/Pagination'
import Heading from '../components/Heading'
import{ getPopularMovies } from '../services/api'

import to from 'await-to-js';

export default {
  name: 'popular-movies',
  components: {
    SingleMovie,
    Pagination,
    Heading
  },
  props: {
    page: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      movies: [],
      loading: false,
      totalPages: 0
    }
  },
  methods: {
    async fetchPopularMovies (page) {
      this.loading = true
      const [error, response] = await to(getPopularMovies({ page }))
      if (error) throw error
      if (response) {
        this.movies = response.data.results
        this.totalPages = response.data.total_pages
      }
      this.loading = false
    }
  },
  watch: {
    page (newPage) {
      this.fetchPopularMovies(newPage)
    }
  },
  async created () {
    this.fetchPopularMovies(this.page)
  }
}
</script>

<style lang="scss">
  .popular-movies {
    &__results {
      min-height: 450px;
    }
  }
</style>
