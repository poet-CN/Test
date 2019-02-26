/*
* author: mamingyang@baofeng.com
* date: 2019/2/26
*/

const test3 = {
  namespaced: true,
  state: {
    data: '我是默认的数据',
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    setData({ commit }, payload) {
      commit('setData', payload);
    },
    resetData({ commit }) {
      commit('setData', '');
    },
  },
};

export default test3;
