<template>
  <font-awesome-icon
  :icon="heartIcon"
  size="3x"
  class="movie-heart__icon"
  />
</template>

<script>

import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default {
  data() {
    return {
      heartIcon: faHeart
    }
  }
}
</script>

<style lang="scss">
  .movie-heart {
    &__icon {
      color: grey;
      cursor: pointer;
    }
  }
</style>



