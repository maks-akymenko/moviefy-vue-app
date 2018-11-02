<template>
  <span>
    <font-awesome-icon
    :icon="userIcon"
    size="3x"
    class="user-icon"
    v-bind="$attrs"
    v-on="$listeners"
    />
  </span>
</template>

<script>

import { faUser } from '@fortawesome/free-solid-svg-icons'

export default {
  data() {
    return {
      userIcon: faUser
    }
  },
}
</script>

<style lang="scss">
  .user-icon {
    cursor: pointer;
    transition: color 0.33s;
    &:hover {
      color: whitesmoke;
    }
  }
</style>



