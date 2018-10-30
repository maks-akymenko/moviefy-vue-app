<template>
  <div class="section">
    <section class="container is-fluid">
      <heading>{{ title }}</heading>

      <pagination :current-page="page" :total-pages="totalPages" :route-name="paginationRouteName"></pagination>
  
      <div class="columns is-multiline popular-movies__results" data-loader-target >
        <loader type="cards" v-show="loading"></loader>

        <div
        class="column is-12 is-half-desktop is-half-fullhd"
        v-for="movie in results"
        :key="movie.id">

          <single-movie :movie="movie" />
        </div>
      </div>
      <pagination :current-page="page" :total-pages="totalPages" :route-name="paginationRouteName"></pagination>
    </section>
  </div>
</template>

<script>
import to from 'await-to-js';

import SingleMovie from '../components/SingleMovie'
import Pagination from '../components/Pagination'
import Heading from '../components/Heading'
import Loader from '../components/Loader'

export default {
  name: 'movies-list',
  components: {
    SingleMovie,
    Pagination,
    Heading,
    Loader
  },
  props: {
    title: {
      type: String,
      required: true
    },
    results: {
      type: Array,
      required: true
    },
    page: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: Number.POSITIVE_INFINITY
    },
    paginationRouteName: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style>

</style>
