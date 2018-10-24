<template>
  <div id="app" class="has-background-dark">
    <div class="container">
      <Header></Header>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
</style>
