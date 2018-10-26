<template>
<div>
  <button class="genre button is-warning is-rounded is-small" v-for="genre in getGenres" :key="Math.random() * genre.id">
    {{ genre.name }}
  </button>
</div>
</template>

<script>
export default {
  props: {
    genres: {
      type: Array,
      required: true
    }
  },
  computed: {
    getGenres () {
      return this.genres.map(genre => this.$store.getters.getGenre(genre))
    },
  }
}
</script>

<style style="scss ">
  .genre {
    margin: 0.3rem;
  }
</style>
