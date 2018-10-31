<template>
  <div class="header">
    <logo size="medium" path="/">
      Moviefy
    </logo>
    <div class="header__right">
      <router-link tag="button" to="/favorite" class="button is-warning is-rounded">
        Favorite Movies
      </router-link>
      <search-bar></search-bar>
    </div>
  </div>  
</template>

<script>
import Logo from './Logo'
import SearchBar from './SearchBar'
import LogButton from './LogButton'

export default {
  components: {
    Logo,
    SearchBar,
    LogButton,
  }
}
</script>

<style lang="scss">
  .header {
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__right {
      display: flex;
      align-items: center;
    }
  }
</style>
