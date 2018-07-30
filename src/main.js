import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'
import Vuefire from 'vuefire'
import firebase from 'firebase'
import fireb from './services/firebase'
import store from './store/store'
import VeeValidate from 'vee-validate'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

//Languages
import en from '../src/Languages/EN'
import es from '../src/Languages/ES'

Vue.use(Vuetify)
Vue.use(Vuefire)
Vue.use(VeeValidate)
Vue.use(VueI18n);

Vue.config.productionTip = false

const locale = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';
const messages = {
  en: en,
  es: es
}
const i18n = new VueI18n({
  locale: locale,
  messages
})

/* eslint-disable no-new */
export const app = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
