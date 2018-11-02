<template>
  <user-icon
  v-bind="$attrs"
  v-on="$listeners"
  ></user-icon>
</template>

<script>
import UserIcon from '../icons/UserIcon'
export default {
  components: {
    UserIcon
  }
}
</script>

<style>

</style>
