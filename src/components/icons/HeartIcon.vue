<template>
  <span>
    <font-awesome-icon
    :icon="heartIcon"
    size="3x"
    class="heart-icon"
    :data-active="active"
    v-bind="$attrs"
    v-on="$listeners"
    />
  </span>
</template>

<script>

import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default {
  data() {
    return {
      heartIcon: faHeart
    }
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'dark',
      validator (color) {
        return [
          'dark',
          'light'
        ].includes(color)
      }
    }
  }
}
</script>

<style lang="scss">
  .heart-icon {
    color: #363636;
    transition: color 250ms ease-in-out;
    &[data-active] {
      color: #FE5F55;
    }
  }
</style>



