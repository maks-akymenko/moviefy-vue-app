<template>
  <div class="header">
    <logo size="medium" path="/">
      Moviefy
    </logo>
    <div class="is-flex">
      <search-bar></search-bar>
      <user :active="!!currentUser" @click="showModal = true"></user>
      <modal v-if="showModal" :show="showModal" @close="showModal = false">
        <div v-if="!currentUser" slot="body">
          <login type="popup" @close="closeModalAndLogInUser"></login>
        </div>
        <div v-else slot="body">
          <logout @close="closeModalAndLogOutUser"></logout>
        </div>
        <h3 slot="header">{{ !currentUser ? 'Sign In' : 'Sign out' }}</h3>
      </modal>
    </div>
  </div>  
</template>

<script>
import firebase from 'firebase'

import Logo from './Logo'
import SearchBar from './SearchBar'
import User from './User'
import Modal from './Modal'
import Login from './Login'
import Logout from './Logout'

export default {
  components: {
    Logo,
    SearchBar,
    User,
    Modal,
    Login,
    Logout
  },
  data () {
    return {
      showModal: false,
      currentUser: ''
    }
  },
  created () {
    if (firebase.auth().currentUser) {
      this.currentUser = firebase.auth().currentUser
    }
  },
  methods: {
    closeModalAndLogOutUser () {
      this.showModal = false
      this.currentUser = ''
    },
    closeModalAndLogInUser () {
      this.showModal = false
      this.currentUser = firebase.auth().currentUser
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/all';

  .header {
    padding: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  @include mobile  {
    flex-direction: column;
    height: 30vh;
    justify-content: space-around; 
    }
  }
</style>
