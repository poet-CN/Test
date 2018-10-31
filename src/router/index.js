import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home'),
    },
    {
      path: '/test1',
      name: 'test1',
      component: () => import('@/views/Test1'),
    },
    {
      path: '/test2',
      name: 'test2',
      component: () => import('@/views/Test2'),
    },
  ],
});
