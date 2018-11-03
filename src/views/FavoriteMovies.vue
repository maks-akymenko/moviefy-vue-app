<template>
  <div class="favorite-movies section">
    <section v-if="favoriteMoviesList.length" class="container is-fluid">
        <movies 
        :results="favoriteMoviesList" 
        :pagination="false"
        title="Favorite movies"
        :loading="loading"
        >
        </movies>
    </section>
    <section class="title is-size-2 has-text-centered has-text-white-ter" v-else>
      It seems, you didn't like any movies yet
    </section>
  </div>
</template>

<script>
import to from 'await-to-js';

import Movies from './Movies'

export default {
  components: {
    Movies
  },
  data () {
    return {
      favoriteMoviesList: [],
      loading: false
    }
  },
  props: {
    favoriteMovies: {
      type: Array,
      required: true
    }
  },
  async created () {
    await this.fetchMoviesFromId()
  },
  methods: {
    fetchMoviesFromId () {
      if (this.favoriteMovies.length) {
        this.loading = true
        this.favoriteMovies.map(movie => {
          this.$store
            .dispatch('movies/getMovie', movie)
            .then((result) => {
              this.favoriteMoviesList.push(result)
              this.loading = false
            })
            .catch((err) => {
              throw err
          });
        })
      }
    }
  },
  watch: {
    $route (to, from) {
      this.fetchMoviesFromId()
    }
  }
}
</script>
