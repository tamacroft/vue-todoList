import axios from './axios';

export default async (cred) => {
  try {
    const reg = await axios.post('/register', cred);
    return reg;
  } catch (error) {
    return error;
  }
};
