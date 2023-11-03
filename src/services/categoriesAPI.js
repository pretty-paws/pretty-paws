import axios from 'axios';

axios.defaults.baseURL = 'https://zoo-shop-api.online/api';

export const fetchAnimals = async language => {
  const result = await axios.get(`/animals?lang=${language}`);
  return result;
};

export const fetchCategories = async (language, category) => {
  const result = await axios.get(
    `/animals/${category}/categories?lang=${language}`
  );
  return result;
};

export const fetchProducts = async (id, language) => {
  const result = await axios.get(
    `/subcategories/${id}/products?price_min=12&price_max=200lang=${language}`
  );
  return result;
};
