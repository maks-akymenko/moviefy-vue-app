import Vue from 'vue'
import Router from 'vue-router'
import PopularMovies from './views/PopularMovies'
// eslint-disable-next-line
import MoviePage from './views/MoviePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // eslint-disable-next-line
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
    }
  ]
})
