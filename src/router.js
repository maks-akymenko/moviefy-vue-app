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
      component: LoginPage,
      meta: {
        title: 'Moviefy | Log in'
      }
    },
    {
      path: '/signup',
      component: SignUp,
      meta: {
        title: 'Moviefy | Sign Up'
      }
    },
    {
      path: '/movies',
      name: 'popular-movies',
      component: PopularMovies,
      meta: {
        title: 'Moviefy | Popular'
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
      meta: {
        title: 'Moviefy | Single Movie'
      },
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
      }),
      meta: {
        title: 'Moviefy | Search'
      }
    },
    {
      path: '/movies-favorite',
      name: 'favorite-movies',
      component: () => import(/* webpackChunkName: "movie-search" */ './views/FavoriteMovies.vue'),
      meta: {
        title: 'Moviefy | Favorite',
        auth: true
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
  let currentUser = firebase.auth().currentUser
  let auth = to.matched.some(route => route.meta.auth)

  if (auth && !currentUser) next('login')
  else if (!auth && currentUser) next('movies')
  else next()
})

export default router
