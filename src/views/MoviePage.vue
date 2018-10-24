<template>
  <div v-if="movie">
    <img :src="imagePath(movie.poster_path)" alt="">
    <h1>{{ movie.title }}</h1>

  </div>
</template>

<script>
import { getMovie } from '../services/api'

export default {
  name: 'movie',
  data () {
    return {
      movie: null,
      error: null,
    }
  },
  async created () {
    try {
      const response = await getMovie(this.$route.params.id)
      this.movie = response.data
      console.log(this.movie)
    }
    catch (error) {
      this.error = error
    }
  },
  methods: {
    imagePath (path) {
      return 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + path
    }
  }
}
</script>

<style>
</style>
