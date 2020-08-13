import Vue from 'vue';

import Router from 'vue-router';

import home from '@/views/main/home/index.vue'
import about from '@/views/main/about/index.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/main.html',
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/about',
      component: about
    },
  ]
})