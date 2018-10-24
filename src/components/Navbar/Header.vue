<template>
  <div class="header">
    <logo size="medium" path="/">
      Moviefy
    </logo>
    <div class="is-flex">
      <search-bar></search-bar>
      <log-button>Log in</log-button>
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

<style>
  .header {
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
