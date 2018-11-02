import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import firebase from 'firebase'
import PopularMovies from './views/PopularMovies'
import LoginPage from './views/LoginPage'
import SignUp from './views/SignUp'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/movies'
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/signup',
      component: SignUp
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
      path: '/movies-search',
      name: 'movies-search',
      component: () => import(/* webpackChunkName: "movie" */ './views/SearchedMovies.vue'),
      props: route => ({
        page: Number(route.query.page || 1),
        genresIds: store.getters.moviesGenresToSearch,
        sortBy: route.query.sort_by || ''
      })
    },
    {
      path: '/movies-favorite',
      name: 'favorite-movies',
      component: () => import(/* webpackChunkName: "movie-search" */ './views/FavoriteMovies.vue'),
      meta: {
        auth: true
      },
      props: route => {
        return {
          favoriteMovies: store.getters.getFavoriteMovies
        }
      }
    },
    {
      path: '/personal-cabinet',
      name: 'personal-cabinet',
      component: () => import(/* webpackChunkName: "movie-search" */ './views/PersonalCabinet.vue'),
      meta: {
        auth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  console.log(currentUser)
  let auth = to.matched.some(route => route.meta.auth)
  console.log(auth)
  if (auth && !currentUser) next('login')
  else next()
})

export default router
