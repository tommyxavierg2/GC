import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Vuefire from 'vuefire'
import firebase from 'firebase'
import fireb from './services/firebase'
import VeeValidate from 'vee-validate'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)
Vue.use(Vuefire)
Vue.use(VeeValidate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
