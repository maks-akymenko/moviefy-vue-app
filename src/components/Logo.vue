<template>
  <div class="logo">
    <router-link tag="span" :to="path">
      <a :class="classList">
        <slot></slot>
      </a>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String, 
      default: '/'
    },
    size: {
      type: String,
      default: 'medium',
      validator (size) {
        // The value must match one of these strings
        return ['small', 'medium', 'big'].indexOf(size) !== -1
      }
    }
  },
  computed: {
    classList () {
      return {
        ['logo__link--' + this.size]: true
      }
    }
  }
}
</script>

<style lang="scss">
  .logo {
    font-weight: 700;
    a {
      text-decoration: none;
    }
    &__link--small {
      font-size: 24px;
    }
    &__link--medium {
      font-size: 45px;
    }
    &__link--big {
      font-size: 65px;
    }
  }
</style>
