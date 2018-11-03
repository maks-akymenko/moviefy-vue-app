<template>
  <div class="popular-movies section">
    <section class="container is-fluid">
      <div class="sorting">
        <genre-choice :items="genresToSearch">Choose a genre</genre-choice>
        <movie-sorting></movie-sorting>
      </div>
        <notifications group="login"/>
        <notifications group="notLoggedIn"/>
        <notifications group="registration"/>
        <movies 
        v-if="popularMovies "
        :results="popularMovies" 
        title="Popular movies"
        :page="page"
        :total-pages="totalPages"
        :loading="loading"
        pagination-route-name="popular-movies"
        >
        </movies>
        <notifications group="logout"/>
    </section>
  </div>
</template>

<script>
import to from 'await-to-js';
import { mapGetters } from 'vuex'
import Movies from './Movies'
import GenreChoice from '../components/GenreChoice'
import MovieSorting from '../components/MovieSorting'

const { getGenre } = mapGetters('movies', ['getGenre'])

export default {
  name: 'popular-movies',
  components: {
    Movies,
    GenreChoice,
    MovieSorting
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
      // we wait until id's will come from store to prevent error
      if (this.$store.state.movies.genresIds.length){
        return this.$store.state.movies.genresIds
          .map(this.getGenre)
          .filter(Boolean)
      }
    }
  },
  methods: {
    async fetchPopularMovies (page) {
      this.loading = true
      const [error, response] = await to(this.$store.dispatch('movies/getPopularMovies', page))

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
    this.$store.dispatch('movies/getMoviesGenres'),
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
  .vue-notification {
    padding: 20px;
    margin: 0 5px 5px;

    font-size: 16px;
    font-weight: 700;

    color: whitesmoke;
    background: #4a4a4a;
    border-left: 5px solid #4a4a4a;
  }
</style>
