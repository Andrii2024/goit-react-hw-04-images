import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const apiKey = '42003708-c000c9a8ce48958e4d2fbd571';

export const fetchPosts = async configParams => {
  try {
    const { data } = await axios.get('', {
      params: {
        key: apiKey,
        per_page: 12,
        page: 1,
        ...configParams,
      },
    });

    return data;
  } catch (error) {}
};
