<template>
  <div>
    <router-view :to="movieLink">
      <img :src="posterPath" alt="">
    </router-view>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed: {
    movieLink () {
      return {
        path: `/movies/${this.movie.id}`
      }
    },
    posterPath () {
      return this.movie.poster_path 
        ? 'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + this.movie.poster_path
        : ''
    },
    created () {
      console.log(this.movie)
    }
  },
}
</script>

<style lang="scss">

</style>
