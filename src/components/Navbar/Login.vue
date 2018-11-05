<template>
  <div class="login"
  :class="['login-type--' + view]"
  >
  <form @submit.prevent="login">
    <h2 v-if="view === 'page'" class="title is-size-1 has-text-centered has-text-white-ter">Log in</h2>
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
      <div class="control has-text-centered">
        <button type="submit" class="login__button button is-large is-info is-rounded">Login</button>
      </div>
    </div>
    <p class="title is-size-6">You don't have an account ?
      <router-link to="/signup">
        Create one right now :)
      </router-link>
    </p>
    <div class="title is-size-4 has-text-white-ter has-text-centered">Or</div>
     <google-login @close="closeAndNotify"></google-login>
  </form>
  </div>
</template>

<script>
import firebase from 'firebase'
import GoogleLogin from './GoogleLogin'
export default {
  components: {
    GoogleLogin
  },
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
          this.$store.commit('user/SET_USER', user.user)
          if (this.$route.name !== 'popular-movies') {
            this.$router.push('movies', () => this.closeAndNotify())
          } else {
            this.closeAndNotify()
          }
        })
        .catch(error => alert('Oops.' + error.message))
    },
    closeAndNotify () {
      this.$emit('close')
      this.$notify({
        group: 'login',
        type: 'success',
        duration: 1000,
        text: 'You were successfully logged in'
      });
    }
  },
  watch: {
    $route () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
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
      padding: 20px;
      label, p {
        color: #4a4a4a
      }
    }
  }
</style>
