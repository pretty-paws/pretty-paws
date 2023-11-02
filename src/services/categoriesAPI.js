import axios from 'axios';

axios.defaults.baseURL = 'https://zoo-shop-api.online/api';

const language = localStorage.getItem('language') || 'ua';

export const fetchAnimals = async () => {
  const result = await axios.get(`/animals?lang=${language}`);
  return result;
};

export const fetchCategories = async category => {
  const result = await axios.get(
    `/animals/${category}/categories?lang=${language}`
  );
  return result;
};
