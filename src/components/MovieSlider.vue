<template>
  <div>
    <carousel :items="6" :loop="true" :dots="false" v-if="similarMovies" class="movie-slider">
      <simple-movie-card 
        v-for="movie in similarMovies" 
        :movie="movie" 
        :key="movie.id">
      </simple-movie-card>
    </carousel>
  </div>
</template>

<script>
import Carousel from 'vue-owl-carousel'
import SimpleMovieCard from './SimpleMovieCard'
export default {
  components: {
    Carousel,
    SimpleMovieCard
  },
  props: {
    similarMovies: {
      type: Array, 
      required: true
    }
  }
}
</script>

<style lang="scss">
  .movie-slider {
    z-index: 100;
  }
</style>
