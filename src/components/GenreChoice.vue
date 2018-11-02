<template>
  <div class="
  genre-choice
  select 
  is-rounded 
  is-small"
  v-if="items"
  >
    <select v-model="value">
      <option>
        <slot></slot>
      </option>
      <option 
        v-for="item in items" 
        :value="item.id"
        :key="item.id" 
      >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 'Choose a genre'
    }
  },
  props: {
    items: {
      type: Array,
      required: false
    }
  },
  methods: {
    showMoviesOfThisGenre (genreId) {
      let genre = Number(genreId)
      this.$router.push({
          name: 'movies-search',
          query: { with_genres: String(genre) }
      })
    }
  },
  watch: {
    value (newValue) {
      this.showMoviesOfThisGenre(newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
  .genre-choice {
    margin: 0 1rem  ;
  }
</style>
