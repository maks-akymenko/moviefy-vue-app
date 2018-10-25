<template>
    <router-link class="logo" tag="span" :to="path">
      <a :class="classList">
        <slot></slot>
      </a>
    </router-link>
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
        return ['small', 'medium'].indexOf(size) !== -1
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
    z-index: 10;
    a {
      font-weight: 700;
      text-decoration: none;
      padding: 5px 10px;
      border: 1px solid hsl(48, 100%, 67%);
      border-radius: 10px;
      color: hsl(48, 100%, 67%);
      transition: color 0.3s;
      &:hover {
        color: hsl(48, 57%, 54%);
      }
    }
    &__link--small {
      font-size: 24px;
    }
    &__link--medium {
      font-size: 45px;
    }
  }
</style>
