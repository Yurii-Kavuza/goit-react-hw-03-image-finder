import axios from 'axios';

const API_KEY = '29343329-eb32098cf47fcc64118c9b881';
const START_PAGE = 1;
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
export const PER_PAGE = 12;

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (search, page = START_PAGE) => {
  const response = await axios.get('', {
    params: {
      q: search,
      key: API_KEY,
      page: page,
      image_type: IMAGE_TYPE,
      orientation: ORIENTATION,
      per_page: PER_PAGE,
    },
  });
  return response.data;
};
