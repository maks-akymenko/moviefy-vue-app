<template>
  <div class="popular-movies section">
    <section class="container is-fluid">
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
import Movies from './Movies'

export default {
  name: 'popular-movies',
  components: {
    Movies
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

</style>
