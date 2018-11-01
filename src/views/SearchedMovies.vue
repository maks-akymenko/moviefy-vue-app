<template>
  <div class="movies-search section">
    <section class="container is-fluid">
      <section class="filter-section">
        <div class="
          filter-section__inner field
          is-grouped is-grouped-multiline"
        >
          <h2 class="
            control title is-4
            has-text-white-ter
            has-text-weight-bold"
          >Selected genres: </h2>
          
          <template v-if="genresToSearch.length">
            <div
              class="control"
              v-for="genre in genresToSearch"
              :key="genre.id"
            >
              <span class="tag is-warning is-small">
                {{ genre.name }}
                <button
                  class="delete is-small"
                  @click="removeGenreFromSearch(genre)"
                />
              </span>
            </div>
          </template>
          <div v-else class="control">
            <span class="tag is-warning is-small">All</span>
          </div>
        </div>
      </section>

        <movies 
        :results="filteredMovies" 
        title="Your search results:"
        :page="page"
        :total-pages="totalPages"
        :loading="loading"
        pagination-route-name="movies-search"
        >
        </movies>
        
    </section>
  </div>
</template>

<script>
import to from 'await-to-js';
import Movies from './Movies'
import { mapGetters } from 'vuex'

const { getGenre } = mapGetters(['getGenre'])

export default {
  components: {
    Movies
  },
  name: 'searched-movies',
  props: {
    page: {
      type: Number,
      default: 1
    },
    genresIds: {
      type: Array,
      required: false
    }
  },
  data () {
    return {
      filteredMovies: [],
      loading: false,
      totalPages: Number.POSITIVE_INFINITY,
      error: null
    }
  },
  computed: {
    getGenre,
    genresToSearch () {
      return this.genresIds
        .map(this.getGenre)
        .filter(Boolean)
    }
  },
  watch: {
    page () {
      this.getMoviesListForCurrentPageAndFilters()
    },
    genresIds () {
      this.getMoviesListForCurrentPageAndFilters()
    }
  },
  async created () {
    await Promise.all([
      this.$store.dispatch('getMoviesGenres'),
      this.getMoviesListForCurrentPageAndFilters()
    ])
  },
  methods: {
    async getMoviesListForCurrentPageAndFilters () {
      return this.getMoviesList({
        page: this.page,
        with_genres: this.genresIds.toString()
      })
    },
    async getMoviesList (params) {
      this.loading = true
      let [error, results] = await to(this.$store.dispatch('getMoviesWithFiltering', params))
      this.loading = false
      this.error = error
      if (results) {
        this.totalPages = results.total_pages
        this.filteredMovies = results.results
      }
    },
    removeGenreFromSearch (genre) {
      console.log(this.$route)
      let route = this.$route
      let genresIds = this.genresIds.filter(id => id !== genre.id)
      this.$router.push({
        name: route.name,
        query: {
          ...route.query,
          page: '1',
          with_genres: String(genresIds)
        }
      })
    }
  }
}
</script>

<style>

</style>
