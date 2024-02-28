import axios from 'axios';

axios.defaults.baseURL = 'https://zoo-shop-api.online/api';

export const fetchCategoriesBlog = async language => {
  const result = await axios.get(`/news/categories?lang=${language}`);
  return result.data;
};

export const fetchBlog = async (nameBlog, language) => {
  const result = await axios.get(`/news/${nameBlog}?lang=${language}`);
  return result.data;
};

export const fetchBlogs = async language => {
  const result = await axios.get(`/news?lang=${language}`);
  return result.data;
};

// export const fetchFilterBlogs = async (language, category = '') => {
//   //   const result = await axios.get(
//   //     `/news?lang=${language}&categories[0]=${category}`
//   //   );
//   const result = await axios.get(
//     `/news?lang=${language}${category ? `&categories[0]=${category}` : ''}`
//   );
//   return result.data;
// };
export const fetchFilterBlogs = async (language, categories, perPage, page) => {
  //   const categoryParams = categories
  //     .map((category, index) => `categories[${index}]=${category}`)
  //     .join('&');
  const categoryParams = categories;
  //   console.log(categoryParams);
  const result = await axios.get(
    `/news?${page ? `page=${page}&lang=${language}` : `lang=${language}`}${
      perPage ? `&per_page=${perPage}` : ''
    }${categoryParams ? `&categories[0]=${categoryParams}` : ''}`
  );
  //   const result = await axios.get(
  //     `/news?${page ? `page=${page}&lang=${language}` : `lang=${language}`}${
  //       perPage ? `&per_page=${perPage}` : ''
  //     }${categoryParams ? `&${categoryParams}` : ''}`
  //   );
  console.log(
    `/news?${page ? `page=${page}&lang=${language}` : `lang=${language}`}${
      perPage ? `&per_page=${perPage}` : ''
    }${categoryParams ? `&categories[0]=${categoryParams}` : ''}`
  );

  return result.data;
};
