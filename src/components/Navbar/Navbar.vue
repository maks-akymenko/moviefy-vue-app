<template>
  <div class="header">
    <logo size="medium" path="/">
      Moviefy
    </logo>
    <div class="is-flex">
      <search-bar></search-bar>
      <user @click="showModal = true"></user>
      <modal v-if="showModal" :show="showModal" @close="showModal = false">
        <div slot="body">
          <login></login>
        </div>
        <h3 slot="header">Log in to your personal cabinet</h3>
      </modal>
    </div>
  </div>  
</template>

<script>
import Logo from './Logo'
import SearchBar from './SearchBar'
import User from './User'
import Modal from './Modal'
import Login from './Login'

export default {
  components: {
    Logo,
    SearchBar,
    User,
    Modal,
    Login
  },
  data () {
    return {
      showModal: false
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
