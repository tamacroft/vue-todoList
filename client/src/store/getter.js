const getter = {
  token(state) {
    if (localStorage.getItem('token') === state.token) {
      return state.token;
    }
    return null;
  },
};

export default getter;
