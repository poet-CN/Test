/*
* author: mamingyang@baofeng.com
* date: 2018/11/2
*/

import Vue from 'vue';
import Vuex from 'vuex';
import global from './global';
import test3 from './test3';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    global,
    test3,
  },
});

export default store;
