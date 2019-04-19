// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'normalize.css/normalize.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import ElementUI from 'element-ui';
import 'font-awesome/css/font-awesome.css';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';

import store from './store';
import router from './router';

Vue.use(ElementUI);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  NProgress.start();
  setTimeout(() => {
    next();
  }, 700);
});

router.afterEach(() => {
  NProgress.done();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
