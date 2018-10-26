<template>
<div>
  <button 
    v-if="genres" 
    class="genre button is-warning is-rounded is-small" 
    :class="[`genre__size--${size}`]"
    v-for="genre in getGenres" 
    :key="Math.random() * genre.id">
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
    },
    size: {
      type: String,
      default: 'small',
      validator (size) {
        return ['small', 'big'].indexOf(size) !== -1
      }
    }
  },
  computed: {
    getGenres () {
      return this.genres.map(id => this.$store.getters.getGenre(id))
    },
  }
}
</script>

<style style="scss ">
  .genre {
    margin: 0.3rem;
  }
</style>
