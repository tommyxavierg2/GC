import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutUs from '@/components/AboutUs'
import Services from '@/components/Services'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    }
  ]
})
