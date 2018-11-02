/*
* author: mamingyang@baofeng.com
* date: 2018/11/2
*/

import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  data: '',
};

const store = new Vuex.Store({
  state,
  actions,
  mutations,
});

export default store;
