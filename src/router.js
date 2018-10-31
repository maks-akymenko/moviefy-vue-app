import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import PopularMovies from './views/PopularMovies'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      props: route => {
        return  {
          favoriteMovies: store.getters.getFavoriteMovies
        }
      }
    }
  ]
})
