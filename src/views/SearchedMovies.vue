<template>
  <div>
    Hello, i am page with similar genres
  </div>
</template>

<script>
import to from 'await-to-js';
export default {
  name: 'searched-movies',
  data () {
    return {
      searchedMovies: []
    }
  },
  created () {
    console.log(this.$route.params.genre)
    this.fetchMoviesWithSimilarGenre(this.$route.query.genreId, this.$route.params.genre)
  },
  methods: {
    async fetchMoviesWithSimilarGenre (id, name) {
      this.loading = true
      const [error, response] = await to(this.$store.dispatch('getSimilarGenres', id, name))

      if (error) throw error
      if (response) {
        this.searchedMovies = response.results
      }
      this.loading = false
    }
  }
}
</script>

<style>

</style>
