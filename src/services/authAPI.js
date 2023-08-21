import axios from 'axios';

axios.defaults.baseURL =
  'http://ec2-35-159-10-27.eu-central-1.compute.amazonaws.com/api';

axios.defaults.headers.common.Authorization = `Bearer ${
  localStorage.getItem('token') || ''
}`;

export const registerUser = async data => {
  const result = await axios.post(`/auth/sign-up`, data);
  console.log(result);
  return result;
};

export const registerVerify = async code => {
  const result = await axios.post(`/auth/sign-up/verify`, code);
  console.log(result);
  return result;
};

export const loginUser = async data => {
  const result = await axios.post(`/auth/sign-in`, data);
  localStorage.setItem('token', result.data.data.token);

  return result;
};

export const logOut = async () => {
  axios.defaults.headers.common.Authorization = `Bearer ${
    localStorage.getItem('token') || ''
  }`;
  const result = await axios.post(`/auth/sign-out`);
  console.log(result);
};
