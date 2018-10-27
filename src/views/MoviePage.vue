<template>
  <div class="movie-details" v-if="movie">
    <div :style="{ 'background-image': `url(${backdropLink})` }" class="movie__background-image"></div>
    <div class="movie container">
      <img class="movie__poster" :src="posterPath" :alt="movie.title">
      <div class="movie__full-info">
        <h1 class="has-text-white-ter is-size-2 has-text-centered has-text-weight-bold">{{ movie.title }}({{ formattedDate }})</h1>
        <p v-if="movie.tagline.length > 0" class="is-size-4 has-text-white-ter has-text-centered">"{{ movie.tagline }}"</p>
        <div class="movie__icons">
          <favorite-movie-button :movieId="movie.id"></favorite-movie-button>
          <movie-rating
          :rating="movie.vote_average"
          :votes-count="movie.vote_count">
          </movie-rating>
          <share-icon></share-icon>
        </div>
        <h4 class="has-text-white-ter is-size-3 has-text-weight-bold">Overview:</h4>
        <p class="movie__overview has-text-white-ter is-size-5">
          {{ movie.overview }}
        </p>
      </div>
    </div>
    <movie-slider :similar-movies="similarMovies"></movie-slider>
  </div>
</template>
  
<script>
import to from 'await-to-js';
import { getMovie, getMovieCredits } from '../services/api'
import { formatDate } from '../shared/utils/textAndDateUtils'

import Heading from '../components/Heading'
import MovieRating from '../components/MovieRating'
import HeartIcon from '../components/icons/HeartIcon'
import ShareIcon from '../components/icons/ShareIcon'
import Genres from '../components/Genres'
import MovieSlider from '../components/MovieSlider'
import FavoriteMovieButton from '../components/FavoriteMovieButton'

export default {
  name: 'movie',
  components: {
    Heading,
    MovieRating,
    HeartIcon,
    ShareIcon,
    Genres,
    MovieSlider,
    FavoriteMovieButton
  },
  data () {
    return {
      movie: null,
      similarMovies: []
    }
  },
  methods: {
  async fetchMovie (id) {
      const [error, response] = await to(getMovie(id))

        if (error) throw error
        if (response) this.movie = response.data
  },
  async fetchSimilarMovies (id) {
    const [error, response] = await to(this.$store.dispatch('getSimilarMovies', id))

      if (error) throw error
      if (response) this.similarMovies = response.results
    }
  },
  async created () {
    await Promise.all([
      this.fetchMovie(this.$route.params.id),
      this.fetchSimilarMovies(this.$route.params.id)
    ])
  },
  computed: {
    getGenresId () {
      return this.movie.genres.map(genre => genre.id)
    },
    backdropLink () {
      return this.movie.backdrop_path
        ? 'https://image.tmdb.org/t/p/w1280/' + this.movie.backdrop_path
        : ''
    },
    posterPath () {
      return this.movie.poster_path 
      ? 'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + this.movie.poster_path
      : ''
    },
    formattedDate () {
      return this.movie.release_date 
        ? formatDate(this.movie.release_date )
        : ''
    }
  }
}
</script>

<style lang="scss">

  $border-radius: 5px;

  .movie-details {
    .movie {
      position: relative;
      display: flex;
      &__full-info {
        padding: 20px;
      }
      &__background-image {
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-size: cover;
        background-repeat: no-repeat;
        filter: blur(10px);
        transform: scale(1.1);
        &:after {
          content: '';
          z-index: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          right: 0;
          bottom: 0;
          background-color: #2D2D2D;
          opacity: 0.3;
        }
      }
      &__poster {
        border-radius: $border-radius;
      }
      &__icons {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 1.5rem 0;
      }
    }
  }
</style>

