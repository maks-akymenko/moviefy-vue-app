<template>
  <div>
    <router-link class="movie__link-wrapper" :to="{ path: `/movies/${movie.id}`}">
      <img class="movie__poster" :src="posterPath(movie.poster_path)" :alt="movie.title">
      </router-link>
      <h2 class="movie__title">{{ movie.title }}</h2>
      <p class="movie__overview">{{ movie.overview}}</p>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    }
  },
  methods: {
    posterPath (path) {
      return 'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + path
    }
  },
}
</script>

<style>

</style>
