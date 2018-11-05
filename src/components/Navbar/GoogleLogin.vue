<template>
    <div class="google-login has-text-centered">
    <button class="button is-rounded is-medium has-background-danger has-text-white-ter" @click="signInWithGoogle">Sign in with google</button>
    </div>
</template>

<script>  
import firebase from 'firebase'
export default {
  methods: {
    signInWithGoogle () {
      const googleProvider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
          this.$store.commit('user/SET_USER', result.user)
          this.$emit('close')
        })
      }
    }
  }
</script>

<style>

</style>
