/*
* author: mamingyang@baofeng.com
* date: 2019/2/26
*/

import { getNum } from '../services/test';

const global = {
  namespaced: true,
  state: {
    countter: 1,
  },
  mutations: {
    addCount(state, num) {
      state.countter = num;
    },
  },
  actions: {
    async fetchNum({ commit }) {
      const res = await getNum();
      const { data } = res;
      commit('addCount', data.length);
    },
  },
};

export default global;
