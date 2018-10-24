<template>
  <div class="pagination">
    <router-link :to="{ name: routeName, query: previousPageQuery }" class="pagination__button">Prev page</router-link>
    <router-link :to="{ name: routeName, query: nextPageQuery }" class="pagination__button">Next page</router-link>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    routeName: {
      type: String,
      required: true
    },
  },
  computed: {
    previousPage () {
      return this.currentPage - 1
    },
    nextPage () {
      return this.currentPage + 1
    },
    commonQuery () {
      return this.$route.name === this.routeName
        ? this.$route.query
        : {}
    },
    previousPageQuery () {
      return {
        ...this.commonQuery,
        page: this.previousPage
      }
    },
    nextPageQuery () {
      return {
        ...this.commonQuery,
        page: this.nextPage
      }
    },
  }
}
</script>

<style lang="scss">
  .pagination {
    display: flex;
    justify-content: space-around;
  }
</style>
