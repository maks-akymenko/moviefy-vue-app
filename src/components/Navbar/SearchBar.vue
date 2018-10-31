<template>
  <section>
    <dropdown class="app-search">
      <input
        class="input is-medium is-rounded"
        slot="trigger"
        placeholder="Type movie name..."
        ref="searchInput"
        v-model="searchInput"
        @input="handleSearchInput"
      />

      <dropdown-item
      v-if="searchError"
      custom class="app-search__info">
      Ooops, something went wrong :(
      </dropdown-item>

      <dropdown-item
      v-else-if="loading"
      custom class="app-search__info"
      >
      We are searching for the movies...
      </dropdown-item>

      <dropdown-item
      v-else-if="searchInput === ''"
      custom class="app-search__info"
      >
      Type something to see results
      </dropdown-item>

      <dropdown-item
      v-else-if="!searchResults || !searchResults.length"
      custom class="app-search__info"
      >
      We could not find anything :(
      </dropdown-item>

      <template v-else-if="searchResults">
         <dropdown-item
          v-for="result in searchResults.slice(0, 10)"
          :key="result.id"
          class="app-search__result"
          :title="`${result.title}`"
        >
          <router-link
            :to="moviePath(result.id)"
            class="app-search__movie-title">
            {{ result.title }}
          
          </router-link>
        </dropdown-item>
      </template>
    </dropdown>
  </section>
</template>

<script>
import to from 'await-to-js';
import { Dropdown, DropdownItem } from 'buefy/dist/components/dropdown'

export default {
  components: {
    Dropdown,
    DropdownItem
  },
  data () {
    return {
      loading: false,
      searchInput: '',
      searchResults: [],
      searchError: null
    }
  },
  methods: {
    async handleSearchInput() {
      let query = event.target.value

      if (query !== '') {
        this.loading = true
        const [error, searchResults] = await to(
          this.$store.dispatch('getMovieSearchResults', query)
        )
        this.loading = false
        this.searchError = error
        this.searchResults = searchResults 
          ? searchResults.results
          : []
      } else {
        this.searchError = null
        this.searchResults = []
        }
      },
    moviePath (id) {
      return `/movies/${id}`
      }
    },
    watch: {
      $route () {
        this.searchInput = ''
      }
    }
  }
</script>

<style lang="scss">
  .app-search {
    &__movie-title{
      color: #4a4a4a;
      display: block;
    }
  }
</style>
