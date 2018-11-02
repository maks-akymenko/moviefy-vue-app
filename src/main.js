import { sync } from 'vuex-router-sync'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
// added bulma to the project
import './../node_modules/bulma/css/bulma.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import firebase from 'firebase'

Vue.component('font-awesome-icon', FontAwesomeIcon)

sync(store, router)

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyDACSelur7WegwA11qLMj0n2EHix8BENEE',
  authDomain: 'vue-movie-app-e329f.firebaseapp.com',
  databaseURL: 'https://vue-movie-app-e329f.firebaseio.com',
  projectId: 'vue-movie-app-e329f',
  storageBucket: 'vue-movie-app-e329f.appspot.com',
  messagingSenderId: '624949653972'
}

firebase.initializeApp(config)

new Vue({
  router,
  store,
  beforeCreate () {
    this.$store.commit('INITIALIZE_STORE')
  },
  render: h => h(App)
}).$mount('#app')
