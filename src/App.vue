<template>
  <div id="app" class="has-background-black-bis">
    <div class="container">
      <navbar></navbar>
    </div>
    <!-- we use key="$route.fullPath" here because if we want to route to the same component, e.g. 
    from one movie page to a new one, we want our page to rerender  -->
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
</style>
