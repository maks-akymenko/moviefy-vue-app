<template>
  <section>
    <transition name="fade-right">
      <dropdown v-show="opened" class="app-search">
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
    </transition>
    <search-icon @click="openAndFocus"></search-icon>
  </section>
</template>

<script>
import to from 'await-to-js';
import { Dropdown, DropdownItem } from 'buefy/dist/components/dropdown'
import SearchIcon from '../icons/SearchIcon'

export default {
  components: {
    Dropdown,
    DropdownItem,
    SearchIcon
  },
  data () {
    return {
      opened: false,
      loading: false,
      searchInput: '',
      searchResults: [],
      searchError: null
    }
  },
  methods: {
    closeAndClearInput () {
      this.opened = false
      this.searchInput = ''
    },
    openAndFocus () {
      if (this.opened) {
        this.opened = false  
      } else {
        this.opened = true
        // Cause element will be focused after DOM has been rendered
        // and then we simulate click to open dropdown list
        // that's how buefy dropdown behaves
        this.$nextTick(() => {
          this.$refs.searchInput.focus()
          this.$refs.searchInput.click()
        })
      }
    },
    async handleSearchInput() {
      let query = event.target.value

      if (query !== '') {
        this.loading = true
        const [error, searchResults] = await to(
          this.$store.dispatch('movies/getMovieSearchResults', query)
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
    margin-right: 1rem;
    &__movie-title{
      color: #4a4a4a;
      display: block;
    }
  }
  .fade-right-enter-active {
    transition: all .4s ease;
  }
.fade-right-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
.fade-right-enter, .fade-right-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
