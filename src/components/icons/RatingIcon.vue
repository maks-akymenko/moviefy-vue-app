<template>
  <font-awesome-icon
  :icon="starIcon"
  size="3x"
  class="movie-rating__icon"
  />
</template>

<script>

import { faStar } from '@fortawesome/free-solid-svg-icons'

export default {
  data() {
    return {
      starIcon: faStar
    }
  }
}
</script>


