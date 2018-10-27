<template>
  <heart-icon
    v-bind="$attrs"
    :active="active"
    :title="active
      ? 'Remove from favorites'
      : 'Add to favorites'
    "
    @click="toggleActive"
  ></heart-icon>
</template>

<script>

import HeartIcon from './icons/HeartIcon'
export default {
  components: {
    HeartIcon
  },
  props: {
    movieId: {
      type: Number,
      required: true
    }
  },
  computed: {
    active () {
      return this.$store.getters['isMovieFavorite'](this.movieId)
    }
  },
  methods: {
    toggleActive () {
      this.$store.dispatch('selectFavoriteMovie', { movieId: this.movieId, favorite: !this.active })
    }
  }
}
</script>

<style>

</style>
