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
        <div class="has-text-centered" v-else slot="body">
          <router-link tag="span" to="closeModalAndGoToCabinet">
            <a class="button is-warning is-rounded is-large m-2">
              Go to personal cabinet
            </a>
          </router-link>
          <logout @close="closeModalAndLogOutUser"></logout>
        </div>
        <h3 slot="header">{{ !currentUser ? 'Sign In' : '' }}</h3>
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
    },
    closeModalAndGoToCabinet () {
      this.showModal = false
      return { path: '/personal-cabinet' }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/all';
  .m-2 {
    margin: 2rem 0;
  }
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
