<template>
  <span>
    <font-awesome-icon
    :icon="searchIcon"
    class="search-icon"
    size="3x"
    v-bind="$attrs"
    v-on="$listeners"
    />
  </span>
</template>

<script>

import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default {
  data() {
    return {
      searchIcon: faSearch
    }
  },
}
</script>

<style lang="scss">
  .search-icon {
    color: whitesmoke;
    cursor: pointer;
    transition: transform 0.33s;
    &:hover {
      transform: scale(1.1);
    };
  }
</style>



