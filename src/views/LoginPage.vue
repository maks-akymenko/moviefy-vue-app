<template>
  <div class="login section">
    <h3 class="is-size-3 has-text-centered has-text-white-ter has-text-weight-bold" v-if="alreadySignedIn">
      It seems that you are already signed in. 
      Go to 
      <router-link to="/movies">take a look at popular movies</router-link>
      or
      <router-link to="/personal-cabinet">to your personal cabinet</router-link>
    </h3>
    <login v-else view="page"></login>
  </div>
</template>

<script>
import firebase from 'firebase'

import Login from '../components/Navbar/Login'

export default {
  name: 'login-page',
  components: {
    Login
  },
  computed: {
    alreadySignedIn () {
      return firebase.auth().currentUser !==null
    }
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
    a {
      color: whitesmoke;
      text-align: center;
      text-decoration: underline;
      &:hover {
        color: #209cee;
      }
    }
  }
</style>
