import axios from 'axios';

axios.defaults.baseURL = 'https://zoo-shop-api.online/api';

export const registerUser = async data => {
  const result = await axios.post(`/auth/sign-up`, data);
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

export const refreshUser = async () => {
  axios.defaults.headers.common.Authorization = `Bearer ${
    localStorage.getItem('token') || ''
  }`;
  const result = await axios.get(`/profile/me`);
  return result;
};

export const logOut = async () => {
  axios.defaults.headers.common.Authorization = `Bearer ${
    localStorage.getItem('token') || ''
  }`;
  const result = await axios.post(`/auth/sign-out`);
  return result;
};

export const getAnimals = async () => {
  axios.defaults.headers.common.Authorization = `Bearer ${
    localStorage.getItem('token') || ''
  }`;
  const result = await axios.get('/category-animals/');
  console.log(result);
  return result;
};

export const subscribe = async data => {
  const result = await axios.post(`/subscriptions/create`, data);
  console.log(result);
  return result;
};

export const updateUser = async data => {
  axios.defaults.headers.common.Authorization = `Bearer ${
    localStorage.getItem('token') || ''
  }`;
  const result = await axios.post(`/profile/update`, data);
  console.log(result);
  return result;
};

export const updatePass = async data => {
  axios.defaults.headers.common.Authorization = `Bearer ${
    localStorage.getItem('token') || ''
  }`;
  const result = await axios.post(`/profile/update-password`, data);
  console.log(result);
  return result;
};
