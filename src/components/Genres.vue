<template>
<div v-if="genres">
    <genre
    v-for="genre in getGenres"  
    :class="{
      'genre': true,
      [`genre__size--${size}`]: true
      }"
    size="small"
    :key="Math.random() * genre.id">
      {{ genre.name }}
    </genre>
</div>
</template>

<script>
import Genre from './Genre'
export default {
  components: {
    Genre
  },
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

<style lang="scss">
  .genre {
    margin: 0.3rem;
    &__size--small {
      // padding: 1rem;
    }
    &__size--big {
      padding: 10rem
    }
  }
</style>
