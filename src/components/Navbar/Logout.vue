<template>
  <div class="has-text-centered">
    <button @click="logout" class="button is-large is-rounded is-info">
      Log out
    </button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  methods: {
    logout () {
      firebase.auth().signOut()
        .then(() => {
          this.$store.commit('user/SET_USER', null)
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
        group: 'logout',
        type: 'success',
        duration: 1000,
        text: 'You were successfully logged out of application'
      });
    }
  }
}
</script>

<style lang="scss">
</style>
