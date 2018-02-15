import axios from './axios';

export default async (cred) => {
  try {
    const auth = await axios.post('/auth', cred);
    return auth.data;
  } catch (error) {
    return error;
  }
};
