import axios from './axios';

const todo = {
  async get(id) {
    let todos = {};
    if (!id) {
      try {
        todos = await axios.get('/todos');
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
};

export default todo;
