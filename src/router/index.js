import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
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
    {
      path: '/test3',
      name: 'test3',
      component: () => import('@/views/Test3'),
    },
    {
      path: '/test4',
      name: 'test4',
      component: () => import('@/views/Test4'),
    },
    {
      path: '/test5',
      name: 'test5',
      redirect: '/test5/nav1',
      component: () => import('@/views/Test5'),
      children: [{
        path: '/test5/nav1',
        name: 'test5-nav1',
        component: () => import('@/views/Test5/components/nav1'),
      }, {
        path: '/test5/nav2',
        name: 'test5-nav2',
        component: () => import('@/views/Test5/components/nav2'),
      }, {
        path: '/test5/nav3',
        name: 'test5-nav3',
        component: () => import('@/views/Test5/components/nav3'),
      }],
    }, {
      path: '/test6',
      name: 'test6',
      component: () => import('@/views/Test6'),
    }, {
      path: '/test7',
      name: 'test7',
      component: () => import('@/views/Test7'),
      children: [{
        path: '/test7/Destructuring',
        name: 'Destructuring',
        component: () => import('@/views/Test7/components/Destructuring'),
      }],
    }, {
      path: '*',
      name: 'NotFound',
      component: () => import('@/views/NotFound'),
    },
  ],
});

export default router;

