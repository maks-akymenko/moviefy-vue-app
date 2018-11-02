<template>
  <div class="login section">
    <login view="page"></login>
  </div>
</template>

<script>
import firebase from 'firebase'

import Login from '../components/Navbar/Login'

export default {
  name: 'login-page',
  components: {
    Login
  }
}
</script>

<style lang="scss">
  .login {
    width: 500px;
    margin: 0 auto;
    &__button {
      margin-top: 1rem;
    }
  }
</style>
