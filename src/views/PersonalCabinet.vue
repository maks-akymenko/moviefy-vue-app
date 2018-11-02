<template>
  <div class="personal-cabinet container">
    <navbar></navbar>
    <h1 class="title is-size-1">Welcome to your personal cabinet</h1>
  </div>
</template>

<script>
import Navbar from '../components/Navbar/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
  .personal-cabinet {
    min-height: 100vh;
  }
</style>
