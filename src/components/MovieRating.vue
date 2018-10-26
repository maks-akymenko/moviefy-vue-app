<template>
  <div
    :class="{
    'movie-rating': true,
    'movie-rating--no-info': !ratingExist
    }"
  >
      <rating-icon></rating-icon>
      <div class="movie-rating__info-box">
      <span class="movie-rating__rating-box">
        <span
          class="title movie-rating__rating"
          :class="ratingExist
            ? 'is-3'
            : 'is-6' 
          "
        >{{ rating || 'No rating' }}</span>
        <span v-if="ratingExist">/10</span>
      </span>
      <span class="movie-rating__total-votes" v-if="ratingExist">
        {{ votesCount }} votes
      </span>
    </div>
  </div>
</template>

<script>
import RatingIcon from '../components/icons/RatingIcon'

export default {
  components: {
    RatingIcon
  },
  props: {
    rating: {
      type: Number,
      required: true
    },
    votesCount: {
      type: Number,
      required: true
    }
  },
  computed: {
    ratingExist () {
      return !!this.rating
    }
  }
}
</script>

<style lang="scss">
.movie-rating {
  display: flex;
  align-items: center;
  &__rating {
    font-weight: 500;
    color: whitesmoke;
  }
  &__icon {
    transition: color 0.33s;
    color: gold;
    &:hover {
      color: rgb(255, 228, 78);
    }
    @at-root .movie-rating--no-info & {
      color: #b1b0b0;
    }
  }
  &__info-box {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    color: #b1b0b0;
  }
}
</style>
