<template>
  <div class="movie-details" v-if="movie">
    <div class="movie-details__bg-image" :style="{ 'background-image': `url(${backdropLink})` }"></div>
    <div class="movie-details__container">
      <div>
        <iframe 
        class="movie-details__trailer"
        v-if="movieVideo" 
        :src="trailerPath" 
        width="580" 
        height="380" 
        allowfullscreen
        frameborder="0">
        </iframe>
        <img 
        v-else 
        class="movie__poster" 
        :src="posterPath" 
        :alt="movie.title">
      </div>
      <div class="movie-details__full-info">
        <h1 class="has-text-white-ter is-size-2 has-text-centered has-text-weight-bold">{{ movie.title }}({{ formattedDate }})</h1>
        <p v-if="movie.tagline.length > 0" class="is-size-4 has-text-white-ter has-text-centered">"{{ movie.tagline }}"</p>
        <div class="movie-details__icons">
          <favorite-movie-button :movieId="movie.id"></favorite-movie-button>
          <movie-rating
          :rating="movie.vote_average"
          :votes-count="movie.vote_count">
          </movie-rating>
          <share-icon></share-icon>
        </div>
        <h4 class="has-text-white-ter is-size-3 has-text-weight-bold">Overview:</h4>
        <p class="movie-details__overview has-text-white-ter is-size-5">
          {{ movie.overview }}
        </p>
      </div> 
      <aside class="movie-details__sidebar">
         <div class="title is-size-4 has-text-white-ter"><span>Status:</span> {{ movie.status }}</div> 
         <div class="title is-size-4 has-text-white-ter"><span>Release date:</span> {{ reversedDate }}</div>
         <div class="title is-size-4 has-text-white-ter"><span>Runtime:</span> {{ convertedTime }}</div>
         <div v-if="movie.budget > 0" class="title is-size-4 has-text-white-ter"><span>Budget:</span> {{ convertAmounts(movie.budget) }}</div>
         <div v-if="movie.revenue > 0" class="title is-size-4 has-text-white-ter"><span>Revenue:</span> {{ convertAmounts(movie.revenue) }}</div>
      </aside> 
    </div>
    <h4 class="movie-details__recommendations title has-text-centered has-text-weight-bold has-text-white-bis">We also recommend</h4>
    <movie-slider class="movie-details__slider" v-if="similarMovies" :similar-movies="similarMovies"></movie-slider>
  </div>
</template>
  
<script>
import to from 'await-to-js';
import { 
  getMovie, 
  getMovieCredits 
} 
from '../services/api'
import { 
  formatDate, 
  convertTime, 
  reverseDate, 
  numberWithCommas
} 
from '../shared/utils/textAndDateUtils'

import Heading from '../components/Heading'
import MovieRating from '../components/MovieRating'
import HeartIcon from '../components/icons/HeartIcon'
import ShareIcon from '../components/icons/ShareIcon'
import MovieSlider from '../components/MovieSlider'
import FavoriteMovieButton from '../components/FavoriteMovieButton'

export default {
  name: 'movie',
  components: {
    Heading,
    MovieRating,
    HeartIcon,
    ShareIcon,
    MovieSlider,
    FavoriteMovieButton
  },
  data () {
    return {
      movie: null,
      movieVideo: null,
      movieCredits: null,
      similarMovies: []
    }
  },
  methods: {
  async fetchMovie (id) {
    const [error, response] = await to(this.$store.dispatch('getMovie', id))
      if (error) throw error
      if (response) this.movie = response
      console.log(this.movie)
  },
  async fetchMovieVideo (id) {
    const [error, response] = await to(this.$store.dispatch('getMovieVideo', id))

      if (error) throw error
      if (response) this.movieVideo = response.results
  },
  async fetchSimilarMovies (id) {
    const [error, response] = await to(this.$store.dispatch('getSimilarMovies', id))

      if (error) throw error
      if (response) this.similarMovies = response.results
    },
    convertAmounts (amount) {
      return numberWithCommas(amount)
    },
  },
  async created () {
    await Promise.all([
      this.fetchMovie(this.$route.params.id),
      this.fetchMovieVideo(this.$route.params.id),
      this.fetchSimilarMovies(this.$route.params.id),
    ])
  },
  computed: {
    reversedDate () {
      return reverseDate(this.movie.release_date)
    },
    convertedTime () {
      return convertTime(this.movie.runtime)
    },
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
    },
    getMovieTrailerKey () {
      return this.movieVideo.map(result => result.key)
    },
    trailerPath () {
      return this.movieVideo && this.getMovieTrailerKey 
        ? `https://www.youtube.com/embed/${this.getMovieTrailerKey[0] || this.getMovieTrailerKey[1]}`
        : ''  
    }
  }
}
</script>

<style lang="scss">

  $border-radius: 5px;

  .movie-details {
    z-index: 1;
    padding: 5rem;
    position: relative;
      &__bg-image {
      position: absolute;
      z-index: -1;
      top: 5rem;
      left: 0;
      width: 100%;
      height: 100%;
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
      &__container {
        display: flex;
      }
      &__full-info {
        padding: 0 5rem;
        flex: 2;
      }
      &__trailer {
        flex: 2;
      }
      &__sidebar {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-around;
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
      &__slider {
        z-index: 1;
      }
      &__recommendations {
        padding: 3rem 0;
      }
    }
</style>

