<template>
  <div class="login section">
    <form @submit.prevent="signUp">
      <h2 class="title is-size-1 has-text-centered has-text-white-ter">Create an account</h2>
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
          <button class="login__button button is-large is-info is-rounded" type="submit">Sign in</button>
        </div>
      </div>
      <p class="title is-size-6 has-text-centered has-text-white-ter">Remembered that had one ?
        <router-link to="/login">
          Go back to login page :)
        </router-link>
      </p>
    </form>
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
          this.$router.push('movies', () => {
            this.$notify({
              group: 'registration',
              type: 'success',
              duration: 2000,
              text: 'Thank you for registering. Enjoy :)'
            });
          })
        })
        .catch(error => {
          alert('Oops' + error.message)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    display: flex;
    flex-direction: column;
    height: 70vh;
    justify-content: center;
    width: 500px;
    margin: 0 auto;
    &__button {
      margin-top: 1rem;
    }
    a {
      color: whitesmoke;
      text-decoration: underline;
    }
  }
</style>
