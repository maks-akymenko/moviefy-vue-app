<template>
  <user-icon
  :class="{
    'user-icon': true,
    'active' : active
  }"
  v-bind="$attrs"
  :title="active ? 'Logged in' : 'Logged out' "
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
  },
  watch: {
    active (newState) {
      console.log(newState)
    }
  }
}
</script>

<style>
  .user-icon {
    margin-left: 2rem;
    cursor: pointer;
    color: whitesmoke;
  }
  .active {
    color: yellow;
  }
</style>
