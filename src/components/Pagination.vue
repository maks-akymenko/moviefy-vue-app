<template>
  <div class="pagination">
    <router-link 
      tag="button"
      :disabled="!previousPageExists"
      :to="{ name: routeName, query: previousPageQuery }" 
      class="button is-warning is-rounded is-medium">Previous page
    </router-link>

    <span class="pagination__results">
      Page
      <span class="title is-2 has-text-white-ter">
        {{ currentPage }}
      </span>out of 
      <span class="title is-2 has-text-white-ter">
        {{ totalPages }}
      </span>
    </span>

    <router-link
      tag="button"
      :disabled="!nextPageExists"
      :to="{ name: routeName, query: nextPageQuery }" 
      class="button is-warning is-rounded is-medium">Next page
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      default: 1,
      required: true
    },
    routeName: {
      type: String,
      required: true
    },
  },
  computed: {
    previousPageExists () {
      return this.currentPage > 1
    },
    nextPageExists () {
      return this.currentPage < this.totalPages
    },
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
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/all';
  .pagination {
    padding: 2rem 0;
  }
    @include mobile {
  }
</style>
