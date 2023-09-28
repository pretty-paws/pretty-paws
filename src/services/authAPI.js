import axios from 'axios';

axios.defaults.baseURL = 'https://zoo-shop-api.online/api';

// axios.defaults.headers.common = {
//   Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
// };

// export const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

axios.defaults.headers.common.Authorization = `Bearer ${
  localStorage.getItem('token') || ''
}`;

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
  // token.set(result.data.data.token);
  // localStorage.setItem('token', result.data.data.token);

  return result;
};

export const refreshUser = async () => {
  const result = await axios.get(`/profile/me`);
  // console.log(result);
  // axios.defaults.headers.common.Authorization = `Bearer ${
  //   localStorage.getItem('token') || ''
  // }`;
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
  // axios.defaults.headers.common.Authorization = `Bearer ${
  //   localStorage.getItem('token') || ''
  // }`;
  const result = await axios.post(`/subscriptions/create`, data);
  console.log(result);
  return result;
};
