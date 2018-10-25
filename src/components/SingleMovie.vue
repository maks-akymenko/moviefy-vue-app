<template>
  <div class="single-movie has-background-black">

    <router-link :to="movieLink">
      <img class="single-movie__poster" :src="posterPath" :alt="movie.title">
      </router-link>

      <div class="single-movie__info">
        <h2 class="single-movie__title title is-size-4 has-text-white-ter">{{ movie.title }}</h2>
        <span class="single-movie__release-data is-size-6 has-text-weight-bold has-text-white-ter">Release: 
          <span class="has-text-warning">{{movie.release_date | formatDate }}</span>
        </span>
        <div>Genres here</div>
        <p class="has-text-white-ter">{{ shortDescription }}</p>
      </div>
  </div>
</template>

<script>
import { truncate } from '../shared/utils/textUtils'

export default {
  filters: {
    formatDate (value) {
      if (!value) return ''
      return value
        .split('-')
        .sort((a, b) => a > b ? 1 : -1)
        .join('-')
    }
  },
  props: {
    movie: {
      type: Object,
      required: true,
    }
  },
  computed: {
    movieLink () {
      return {
        path: `/movies/${this.movie.id}`
      }
    },
    posterPath () {
      console.log(this.movie)
      return this.movie.poster_path 
      ? 'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + this.movie.poster_path
      : ''
    },
    shortDescription () {
      return truncate(this.movie.overview || '', 180)
    },
  },
}
</script>

<style lang="scss">
  $border-radius: 15px;

  .single-movie {
    padding: 10px;
    border-radius: $border-radius;
    display: flex;
    // transition: transform 0.33s;
    // &:hover {
    //   transform: rotateZ(-2deg);
    // }
    &__title {
      height: 5rem;
    }
    &__poster {
      border-radius: $border-radius;
    }
    &__info {
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: 0 auto;
      flex: none;
    }
  }
</style>
