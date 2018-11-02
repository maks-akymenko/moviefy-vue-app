<template>
  <div class="login section">
    <h3 class="title is-size-4 has-text-centered has-text-white-ter">Sign in</h3>
    <div class="field">
      <label class="label has-text-white-ter">Email</label>
      <div class="control">
        <input v-model="email" class="input is-large" type="text" placeholder="Email">
      </div>
    </div>
    <div class="field">
      <label class="label has-text-white-ter">Password</label>
      <div class="control">
        <input v-model="password" class="input is-large" type="password" placeholder="Password">
      </div>
      <div class="has-text-centered">
        <button @click="login" class="login__button button is-large">Login</button>
      </div>
    </div>
    <p class="title is-size-5 has-text-centered has-text-white-ter">You don't have an account ?
      <router-link to="/signup">
        Create one right now :)
      </router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  name: 'login',
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.replace('movies')
        })
        .catch(error => {
          alert('Oops.' + error.message)
        })
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
  }
</style>
