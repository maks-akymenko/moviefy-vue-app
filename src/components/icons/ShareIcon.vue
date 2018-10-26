<template>
  <font-awesome-icon
  :icon="shareIcon"
  size="3x"
  class="movie-share__icon"
  />
</template>

<script>

import { faShare } from '@fortawesome/free-solid-svg-icons'

export default {
  data() {
    return {
      shareIcon: faShare
    }
  }
}
</script>

<style lang="scss">
  .movie-share {
    &__icon {
      color: grey;
      cursor: pointer;
    }
  }
</style>

