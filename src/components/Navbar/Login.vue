<template>
  <div class="login"
  :class="['login-type--' + view]"
  >
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input v-model="email" class="input is-large" type="text" placeholder="Email">
      </div>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input v-model="password" class="input is-large" type="password" placeholder="Password">
      </div>
      <div class="has-text-centered">
        <button @click="login" class="login__button button is-large is-info is-rounded">Login</button>
      </div>
    </div>
    <p class="title is-size-6">You don't have an account ?
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
  props: {
    view: {
      type: String,
      default: 'popup',
      validator (view) {
        return ['page', 'popup'].indexOf(view) !== -1
      }
    }
  },
  name: 'login',
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.push('personal-cabinet')
          this.$emit('close')
          this.$notify({
            group: 'login',
            type: 'success',
            text: 'You were successfully logged in'
          });
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
    margin: 0 auto;
    &__button {
      margin-top: 1rem;
    }
    &-type--page {
      display: flex;
      flex-direction: column;
      height: 80vh;
      justify-content: center;
      label, p {
        color: whitesmoke;
      }
    }
    &-type--popup {
      label, p {
        color: #4a4a4a
      }
    }
  }
</style>
