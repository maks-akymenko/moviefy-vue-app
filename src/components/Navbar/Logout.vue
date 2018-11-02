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
          if (this.$route.name !== 'popular-movies') {
            this.$router.push('popular-movies')
            this.closeAndNotify()
          } else {
            this.closeAndNotify()
          }
      })
    }
  },
  methods: {
    closeAndNotify () {
      this.$emit('close')
      this.$notify({
        group: 'logout',
        type: 'success',
        text: 'You were successfully logged out of application'
      });
    }
  }
}
</script>
