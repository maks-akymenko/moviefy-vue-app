<template>
  <div id="app" class="has-background-black-bis">
    <div class="container">
      <navbar></navbar>
    </div>
    <router-view/>
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
