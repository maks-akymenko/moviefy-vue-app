<template>
  <div class="login section">
    <h3 class="title is-size-2 has-text-centered has-text-white-ter">Sign Up</h3>
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
        <button @click="signUp" class="login__button button is-large">Sign in</button>
      </div>
    </div>
    <p class="title is-size-5 has-text-centered has-text-white-ter">Remembered that had one ?
      <router-link to="/login">
        Go back to login page :)
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
  name: 'signup',
  methods: {
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log('your acoount has been created')
        })
        .catch(error => {
          alert('Oops' + error.message)
        })
    }
  }
}
</script>

<style lang="scss">
  .login {
    width: 450px;
    margin: 0 auto;
    &__button {
      margin-top: 1rem;
    }
  }
</style>
