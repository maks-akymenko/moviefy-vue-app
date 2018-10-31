<template>
  <div class="header">
    <logo size="medium" path="/">
      Moviefy
    </logo>
      <router-link tag="button" to="/favorite" class="button is-warning is-rounded">
        Favorite Movies
      </router-link>
    <div>
      <search-bar></search-bar>
    </div>
  </div>  
</template>

<script>
import Logo from './Logo'
import SearchBar from './SearchBar'

export default {
  components: {
    Logo,
    SearchBar,
  }
}
</script>

<style lang="scss">
  .header {
    padding: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
