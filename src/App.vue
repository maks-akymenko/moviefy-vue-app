<template>
  <div id="app">
    <div id="nav">
      <navigation></navigation>
      <router-link to="/">Home</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
 
</style>
