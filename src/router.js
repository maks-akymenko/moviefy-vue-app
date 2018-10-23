import Vue from 'vue'
import Router from 'vue-router'
import PopularMovies from './views/PopularMovies.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // eslint-disable-next-line
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'popular-movies',
      component: PopularMovies
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
