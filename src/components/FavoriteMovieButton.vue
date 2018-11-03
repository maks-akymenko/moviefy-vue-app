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
import firebase from 'firebase'

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
      return this.$store.getters['movies/isMovieFavorite'](this.movieId)
    },
    isUserLoggedIn () {
      return firebase.auth().currentUser !== null
    }
  },
  methods: {
    toggleActive () {
      if (this.isUserLoggedIn) {
        this.$store.dispatch('movies/selectFavoriteMovie', { movieId: this.movieId, favorite: !this.active })
      } else {
        this.$notify({
            group: 'notLoggedIn',
            type: 'error',
            duration: 1000,
            text: 'To add movies to favorite you need to be logged in'
          });
      }
    }
  }
}
</script>

<style>

</style>
