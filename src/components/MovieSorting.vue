<template>
  <div class="
  select 
  is-rounded 
  is-small"
  >
    <select v-model="value">
      <option>
        Sort movies by
      </option>
      <option 
        v-for="option in sortOptions" 
        :value="option.query"
        :key="option.query" 
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>

export default {
  data () {
    return {
      sortOptions: [
      {name: 'Popularity ↑',query: 'popularity.asc'},
      {name: 'Popularity↓', query: 'popularity.desc'},
      {name: 'Release date ↑', query: 'release_date.asc'},
      {name: 'Release date ↓', query: 'release_date.desc'},
      {name: 'Revenue ↑', query: 'revenue.asc'},
      {name: 'Revenue ↓', query: 'revenue.desc'},
      {name: 'Primary release date ↑', query: 'primary_release_date.asc'},
      {name: 'Primary release date ↓', query: 'primary_release_date.desc'},
      {name: 'Original title ↑', query: 'original_title.asc'},
      {name: 'Original title ↓', query: 'original_title.desc'},
      {name: 'Vote average ↑', query: 'vote_average.asc'},
      {name: 'Vote average ↓', query: 'vote_average.desc'},
      {name: 'Vote count ↑', query: 'vote_count.asc'},
      {name: 'Vote count ↓', query: 'vote_count.desc'}
      
      ],
      value: 'Sort movies by'
    }
  },
  methods: {
    showSortedMovies (query) {
      let sortParam = query
      this.$router.push({
          name: 'movies-search',
          query: { sort_by: sortParam }
      })
    }
  },
  watch: {
    value (newValue) {
      this.showSortedMovies(newValue)
    }
  }
}
</script>
