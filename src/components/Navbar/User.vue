<template>
  <user-icon
  :class="{'active' : active}"
  v-bind="$attrs"
  v-on="$listeners"
  ></user-icon>
</template>

<script>
import UserIcon from '../icons/UserIcon'
export default {
  components: {
    UserIcon
  },
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
  .active {
    color: yellow;
  }
</style>
