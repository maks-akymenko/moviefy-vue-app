<template>
  <div class="single-movie has-background-black" data-test="single-movie-container">

    <router-link :to="movieLink" @click="alert('it works')">
      <img v-if="posterPath" class="single-movie__poster" :src="posterPath" :alt="movie.title">
      <h2 v-else class="title is-size-4 single-movie__no-image-text">There are no image yet...</h2>
    </router-link>

    <div class="single-movie__info">
      <router-link v-if="movie" :to="movieLink">
        <h2 class="single-movie__title title is-size-2 is-size-5-mobile has-text-white-ter">{{ movie.title }}{{ formattedDate }}</h2>
      </router-link>

      <div class="single-movie__genres">
        <a
          v-if="movieGenres"
          v-for="genre in movieGenres"
          :key="genre.id"
          class="tag is-rounded is-warning movie-card__genre"
          @click.prevent="showMoviesOfTheSameGenre(genre)"
        >{{ genre.name }}</a>
      </div>

      <p class="has-text-white-ter">{{ shortDescription }}</p>
      <div class="single-movie__rate-like">
      <favorite-movie-button v-if="movie" :movieId="movie.id"></favorite-movie-button>
      <movie-rating
        :rating="movie.vote_average"
        :votes-count="movie.vote_count">
      </movie-rating>
      </div>
    </div>

  </div>
</template>

<script>
import { truncate, formatDate, kebabCaseTransformer } from '../shared/utils/textAndDateUtils'
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
      return this.movie && {
        path: `/movies/${this.movie.id}`
      }
    },
    formattedDate () {
      return this.movie.release_date 
        ? `(${formatDate(this.movie.release_date)})`
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
    movieGenresMap () {
      return this.$store.state.movies.genresMap
    },
    movieGenresToSearch (){
      return this.$store.getters['movies/moviesGenresToSearch']
    },
    movieGenres () {
      let genres = []
      if (this.movie && this.movie.genre_ids) {
       return genres = this.movie.genre_ids
          .map(genreId => this.getGenre(genreId))
      }
    },
  },
  methods: {
    getGenre (genreId) {
      return this.movieGenresMap[genreId]
    },
    showMoviesOfTheSameGenre (genre) {
      let withGenres = [...this.movieGenresToSearch]
      let genreId = Number(genre.id)
        if (!withGenres.includes(genreId)) {
          withGenres.push(genreId)
        }
        this.$router.push({
          name: 'movies-search',
          query: { with_genres: String(withGenres) }
        })
      }
    }
  }
</script>

<style lang="scss">

@import '~bulma/sass/utilities/all';

  $border-radius: 15px;

  .single-movie {
    border-radius: $border-radius;
    display: flex;
    min-height: 350px;
    @include mobile {
      flex-direction: column;
    }
    a {
      @include mobile {
        text-align: center;
      }
    }
    &__poster {
      border-radius: $border-radius;  
      flex: 3;
      height: 100%;
      width: 100%;
      @include mobile {
        width: 60%;
        text-align: center;
      }
    }
    &__title {
      margin: 1.5rem 0;
    }
    &__info {
      width: 50%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      margin: 0 auto;
      flex: none;
      @include mobile {
        width: 100%;
      }
    }
    &__rate-like {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    &__genres {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      & > * {
        margin: 0.5rem;
      }
    }
  } 
</style>
