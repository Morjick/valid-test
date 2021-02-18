import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'

import router from './assets/rout'

Vue.use(VueRouter)
Vue.use(Vuelidate)


Vue.config.productionTip = false





new Vue({
  render: h => h(App),
  router,

}).$mount('#app')
