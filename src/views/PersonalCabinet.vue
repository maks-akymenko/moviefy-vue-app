<template>
  <div class="personal-cabinet container section">
    <h1 class="title is-size-1 has-text-centered has-text-white-ter">Welcome to your personal cabinet</h1>
        <div class="personal-cabinet__favorite-movies has-background-dark">
          <router-link
            class="has-text-white-ter"
            to="/movies-favorite">Favorite movies</router-link>
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
    &__favorite-movies {
      margin: 5rem auto 0 auto;
      display: flex;
      align-items: center;
      border-radius: 15px;
      box-shadow: rgba(0, 8px, 12px, 0.2);
      width: 300px;
      height: 300px;
      background-color: whitesmoke;
      justify-content: center;
      transition: transform 0.33s;
      a {
        font-size: 2rem;
        font-weight: bold;
      }
      &:hover {
        transform: translateY(-20px);
      }
    }
  }
</style>
