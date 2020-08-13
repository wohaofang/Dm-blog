import Vue from 'vue';

import Router from 'vue-router';

import all from '@/views/blog/all/index.vue'
import blog from '@/views/blog/blog/index.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/blog.html',
  routes: [
    {
      path: '*',
      redirect: '/all'
    },
    {
      path: '/all',
      component: all
    },
    {
      path: '/blog',
      component: blog
    },
  ]
})