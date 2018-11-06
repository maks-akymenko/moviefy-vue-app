<template>
  <div class="personal-cabinet container section">
    <h1 class="title is-size-1 has-text-centered has-text-white-ter">Welcome to your personal cabinet</h1>
    <div class="columns is-multiline personal-cabinet__columns">
        <div class="personal-cabinet__options">
          <router-link to="/movies-favorite">Favorite movies</router-link>
        </div>
        <div class="personal-cabinet__options"><span>Search by genres</span></div>
        <div class="personal-cabinet__options"><span>Sort movies</span></div>
      </div>
    </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
  .personal-cabinet {
    min-height: 100vh;
    &__columns {
      justify-content: space-around;
      margin: 2rem 0;
    }
    &__options {
      width: 300px;
      height: 300px;
      background-color: whitesmoke;
      text-align: center;
    }
  }
</style>
