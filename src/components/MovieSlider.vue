<template>
    <carousel 
    :perPage="5"
    class="movies-slider">
      <slide v-for="movie in similarMovies" :key="movie.id">
        <router-link :to="movieLink(movie.id)">
          <img :src="posterPath(movie.poster_path)" :alt="movie.title">
        </router-link>
          <h3>{{ movie.title }}</h3>
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
    &__movie {
    }
  }
</style>
