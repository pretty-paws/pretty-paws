import axios from 'axios';

axios.defaults.baseURL = 'https://zoo-shop-api.online/api';

export const fetchOfferByAnimal = async language => {
  const result = await axios.get(`/animals/offer-by-animals?lang=${language}`);
  return result.data;
};
