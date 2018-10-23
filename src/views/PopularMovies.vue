<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    Welcome to the Moviefy
  </div>
</template>

<script>
import{ getPopularMovies } from '../services/api'

export default {
  name: 'popular-movies',
  data () {
    return {
      movies: []
    }
  },
  async created () {
    try {
      const response = await getPopularMovies()
      this.movies = response.data.results
    }
    catch (err) {
      console.log(err)
    }
  }
}
</script>