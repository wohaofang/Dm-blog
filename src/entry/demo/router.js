import Vue from 'vue';

import Router from 'vue-router';

import demo from '@/views/demo/index.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/demo.html',
  routes: [
    {
      path: '*',
      redirect: '/demo'
    },
    {
      path: '/demo',
      component: demo
    },
  ]
})