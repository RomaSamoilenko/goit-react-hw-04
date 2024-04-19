import axios from 'axios';

const fetchImages = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query: query,
      page: page,
      per_page: 9,
      client_id: 'zOoPv1CIH5Ednf3Oj9z9CBkKKW3v9ktwu9Ld2P1fGbs',
    },
  });
  return {
    results: response.data.results,
    total: response.data.total,
  };
};

export { fetchImages };