import { sync } from 'vuex-router-sync'
import firebase from 'firebase'
import Vue from 'vue'
import Notifications from 'vue-notification'
import App from './App.vue'
import router from './router'
import store from './store/index'
// added bulma to the project
import './../node_modules/bulma/css/bulma.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import firebaseConfig from './services/firebaseConfig'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Notifications)
sync(store, router)

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  beforeCreate () {
    this.$store.commit('INITIALIZE_STORE')
  },
  render: h => h(App)
}).$mount('#app')
