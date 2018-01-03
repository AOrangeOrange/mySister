import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Timepicker from '@/components/Timepicker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/timepicker',
      name: 'Timepicker',
      component: Timepicker
    }
  ]
})
