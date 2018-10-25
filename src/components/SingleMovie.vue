<template>
  <div class="single-movie has-background-black">

    <router-link :to="movieLink">
      <img class="single-movie__poster" :src="posterPath" :alt="movie.title">
      </router-link>

      <div class="single-movie__info">

        <router-link :to="movieLink">
        <h2 class="single-movie__title title is-size-5 has-text-white-ter">{{ movie.title }}({{ formattedDate }})</h2>
        </router-link>
        <p class="has-text-white-ter">{{ shortDescription }}</p>
        <div>Like button</div>
        <div>Genres here</div>
      </div>
  </div>
</template>

<script>
import { truncate, formatDate } from '../shared/utils/textAndDateUtils'

export default {
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
    formattedDate () {
      return this.movie.release_date 
        ? formatDate(this.movie.release_date)
        : ''
    },
    posterPath () {
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
    &__poster {
      border-radius: $border-radius;
    }
    &__title {
      margin: 1.5rem 0;
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
