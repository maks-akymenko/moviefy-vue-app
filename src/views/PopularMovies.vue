<template>
  <div class="popular-movies section">
    <navbar class="container"></navbar>
    <section class="container is-fluid">
      <div class="sorting">
        <genre-choice :items="genresToSearch">Choose a genre</genre-choice>
        <movie-sorting></movie-sorting>
      </div>

        <movies 
        :results="popularMovies" 
        title="Popular movies"
        :page="page"
        :total-pages="totalPages"
        :loading="loading"
        pagination-route-name="popular-movies"
        >
        </movies>
        
    </section>
  </div>
</template>

<script>
import to from 'await-to-js';
import { mapGetters } from 'vuex'
import Movies from './Movies'
import GenreChoice from '../components/GenreChoice'
import MovieSorting from '../components/MovieSorting'
import Navbar from '../components/Navbar/Navbar'

const { getGenre } = mapGetters(['getGenre'])

export default {
  name: 'popular-movies',
  components: {
    Movies,
    GenreChoice,
    MovieSorting,
    Navbar
  },
  props: {
    page: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      popularMovies: [],
      loading: false,
      totalPages: Number.POSITIVE_INFINITY
    }
  },
  computed: {
    getGenre,
    genresToSearch () {
      return this.$store.state.movies.genresIds
        .map(this.getGenre)
        .filter(Boolean)
    }
  },
  methods: {
    async fetchPopularMovies (page) {
      this.loading = true
      const [error, response] = await to(this.$store.dispatch('getPopularMovies', page))

      if (error) throw error
      if (response) {
        this.popularMovies = response.results
        this.totalPages = response.total_pages
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
    await Promise.all([
    this.$store.dispatch('getMoviesGenres'),
    this.fetchPopularMovies(this.page)
    ])
  }
}
</script>

<style lang="scss">
  .sorting {
    display: flex;
    justify-content: center;
  }
</style>
