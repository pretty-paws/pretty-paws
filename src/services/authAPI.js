import axios from 'axios';

axios.defaults.baseURL =
  'http://ec2-35-159-10-27.eu-central-1.compute.amazonaws.com/api';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = async data => {
  const result = await axios.post(`/auth/sign-up`, data);
  console.log(result);
  return result;
};
