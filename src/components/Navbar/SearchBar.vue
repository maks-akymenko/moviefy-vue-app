<template>
  <div class="autocomplete">
    <input class="input is-medium is-rounded" v-model="searchedMovie" @input="onSearch(searchedMovie)" 
    
    type="text"
    placeholder="Search for movies"
    :class="{'is-loading': loading}"
    >
    <ul v-if="needToOpen" class="results">
      <li v-for="movie in results" :key="movie.id">
        <router-link :to="movieLink(movie.id)">
        {{ movie.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import to from 'await-to-js';

export default {
  data () {
    return {
      results: [],
      needToOpen: false,
      loading: false,
      searchedMovie: ''
    }
  },
  methods: {
    async onSearch(query) {
      if (this.searchedMovie.trim().length > 0) {
        this.needToOpen = true
        this.loading = true
      const [error, response] = await to(this.$store.dispatch('getMovieSearchResults', query))

      if (error) throw error
      if (response) {
        this.results = response.results
        console.log(this.results)
      }
      this.loading = false
      }
    },
  movieLink (id) {
      return {
        path: `/movies/${id}`
      }
    },
  }
}
</script>

<style lang="scss">
  .autocomplete {
    position: relative;
    .results {
      position: absolute;
      width: 100%;
      height: 250px;
      border: 1px solid white;
    }
  }
</style>
