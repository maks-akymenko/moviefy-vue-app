<template>
  <div id="app" class="has-background-black-bis">
    <!-- we use key="$route.fullPath" here because if we want to route to the same component, e.g. 
    from one movie page to a new one, we want our page to rerender  -->
    <transition name="fade">
      <router-view :key="$route.fullPath"/>
    </transition>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss">
  #app {
    min-height: 100vh;
  }
  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
