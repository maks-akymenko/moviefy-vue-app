<template>
  <div class="header">
    <logo size="medium" path="/">
      Moviefy
    </logo>
      <router-link tag="button" to="/movies-favorite" class="button is-warning is-medium is-rounded">
        Favorite Movies ❤
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
@import '~bulma/sass/utilities/all';

  .header {
    padding: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  @include mobile  {
    flex-direction: column;
    height: 30vh;
    justify-content: space-around; 
    }    
  }
</style>
