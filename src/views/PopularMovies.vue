<template>
  <div class="movies" >
    <single-movie 
      v-if="movies" 
      class="movie" 
      v-for="movie in movies" 
      :movie="movie" 
      :key="movie.id">
    </single-movie>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import{ getPopularMovies } from '../services/api'
import SingleMovie from '../components/SingleMovie'

export default {
  name: 'popular-movies',
  components: {
    SingleMovie
  },
  data () {
    return {
      movies: [],
      error: null,
    }
  },
  async created () {
    try {
      const response = await getPopularMovies()
      this.movies = response.data.results
    }
    catch (err) {
      this.error = err
    }
  }
}
</script>

<style lang="scss">
.movies {
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  .movie {
    flex: 1 0 30%;
    padding: 20px;
    box-sizing: border-box;
    &__link-wrapper {
      color: white;
    }
    &__poster {
      border-radius: 5px;
    }
    &__title {
      font-size: 36px;
    }
  }
}
</style>
