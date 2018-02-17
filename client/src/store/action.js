const action = {
  signin({ commit }, payload) {
    commit('signin', payload);
  },
  signout({ commit }) {
    commit('signout');
  },
};

export default action;
