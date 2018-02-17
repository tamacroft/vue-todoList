const mutations = {
  signin(state, token) {
    localStorage.setItem('token', token);
    state.token = token;
  },
  signout(state) {
    localStorage.clear();
    state.token = null;
  },
};

export default mutations;
