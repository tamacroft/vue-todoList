import axios from './axios';

const todo = {
  async get(id) {
    let todos = {};
    if (!id) {
      try {
        todos = await axios.get('/todos', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
      } catch (err) {
        return err;
      }
    } else {
      try {
        todos = await axios.get(`/todos/${id}`);
      } catch (err) {
        return err;
      }
    }
    return todos;
  },
  async post(newtodo) {
    try {
      return await axios.post('/todos', { title: newtodo, completed: false }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    } catch (error) {
      return error;
    }
  },
};

export default todo;
