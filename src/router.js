import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import PopularMovies from './views/PopularMovies'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/movies'
    },
    {
      path: '/movies',
      name: 'popular-movies',
      component: PopularMovies,
      meta: {
        title: 'Moviefy - Popular'
      },
      beforeEnter (to, from, next) {
        if (to.query.page < 1) {
          next({
            name: 'popular-movies',
            query: { page: '1' }
          })
        } else {
          next()
        }
      },
      props: route => {
        return {
          page: Number(route.query.page || 1)
        }
      }
    },
    {
      path: '/movies/:id',
      name: 'movie',
      component: () => import(/* webpackChunkName: "movie" */ './views/MoviePage.vue')
    },
    {
      path: '/movies/genres/:genre',
      name: 'searched-movies',
      component: () => import(/* webpackChunkName: "movie-search" */ './views/SearchedMovies.vue')
    },
    {
      path: '/favorite',
      name: 'favorite-movies',
      component: () => import(/* webpackChunkName: "movie-search" */ './views/FavoriteMovies.vue'),
      meta: {
        title: 'Moviefy - Favorite'
      },
      props: route => {
        return {
          favoriteMovies: store.getters.getFavoriteMovies
        }
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
