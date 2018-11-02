/*
* author: mamingyang@baofeng.com
* date: 2018/11/2
*/

const actions = {
  setData({ commit }, payload) {
    commit('setData', payload);
  },
  resetData({ commit }) {
    commit('setData', '');
  },
};

export default actions;
