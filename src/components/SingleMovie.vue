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
        <div class="single-movie__rate-like">
          <favorite-movie-button :movieId="movie.id"></favorite-movie-button>
          <movie-rating
            :rating="movie.vote_average"
            :votes-count="movie.vote_count"
          ></movie-rating>
        </div>
        <div class="single-movie__genres" >
        </div>
      </div>
  </div>
</template>

<script>
import { truncate, formatDate } from '../shared/utils/textAndDateUtils'
import MovieRating from './MovieRating'
import FavoriteMovieButton from './FavoriteMovieButton'

export default {
  components: {
    MovieRating,
    FavoriteMovieButton
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
    min-height: 350px;
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
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      margin: 0 auto;
      flex: none;
    }
    &__rate-like {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
</style>
