<template>
    <carousel 
    :perPage="8"
    class="movies-slider"
    >
      <slide class="movies-slider__movie-card" v-for="movie in similarMovies" :key="movie.id">
        <router-link :to="movieLink(movie.id)">
          <img :src="posterPath(movie.poster_path)" :alt="movie.title">
        </router-link>
          <h3 class="movies-slider__movie-title has-text-white-ter has-text-centered">{{ movie.title }}</h3>
      </slide>
    </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel, 
    Slide
  },
  props: {
    similarMovies: {
      type: Array, 
      required: true
    }
  },
  methods: {
    movieLink (id) {
      return {
        path: `/movies/${id}`
      }
    },
    posterPath (path) {
      return 'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + path
    },
  }
}
</script>

<style lang="scss">
  .movies-slider {
    &__movie-card {
      padding: 1rem 2rem 0 2rem;
    }
  }
</style>
