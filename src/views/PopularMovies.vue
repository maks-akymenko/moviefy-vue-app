<template>
<div class="container">
  <pagination :current-page="page" route-name="popular-movies"></pagination>
  <h1 class="popular-movies__header">Popular movies</h1>
  <div v-if="loading">Loading...</div>
  <div v-else class="movies" >
    <single-movie 
      v-if="movies" 
      class="movie" 
      v-for="movie in movies" 
      :movie="movie" 
      :key="movie.id">
    </single-movie>
  </div>
</div>
</template>

<script>
import SingleMovie from '../components/SingleMovie'
import Pagination from '../components/Pagination'

import{ getPopularMovies } from '../services/api'

import to from 'await-to-js';

export default {
  name: 'popular-movies',
  components: {
    SingleMovie,
    Pagination
  },
  props: {
    page: Number,
    default: 1
  },
  data () {
    return {
      movies: [],
      error: null,
      loading: false
    }
  },
  async created () {
    this.loading = true
    const [error, response] = await to(getPopularMovies({ page: this.page}))
    if (response) this.movies = response.data.results
    if (error) throw error
    this.loading = false
    console.log(this.page)
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
