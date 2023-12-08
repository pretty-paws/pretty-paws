import axios from 'axios';

axios.defaults.baseURL = 'https://zoo-shop-api.online/api';

export const fetchProducts = async language => {
  const result = await axios.get(`/products?lang=${language}`);
  return result.data;
};

export const fetchProductByID = async (id, lang) => {
  const result = await axios.get(`/products/${id}?lang=${lang}`);
  return result;
};

export const toggleFav = async id => {
  axios.defaults.headers.common.Authorization = `Bearer ${
    localStorage.getItem('token') || ''
  }`;
  const result = await axios.post(`/products/${id}/favorite`);
  return result;
};

export const fetchFilteredProducts = async (category, language, query) => {
  const result = await axios.get(
    `/categories/${category}/products?lang=${language}${query}`
  );
  return result;
};
