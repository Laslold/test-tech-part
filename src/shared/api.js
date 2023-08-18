import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64da06c9e947d30a260aa80e.mockapi.io/adverts',
});

const errorWrapper = async req => {
  try {
    const { data } = await req;
    return data;
  } catch (error) {
    return false;
  }
};

export const getAdverts = async (page = 1, limit = 8) => {
  return await errorWrapper(
    instance({
      params: {
        page,
        limit,
      },
    })
  );
};

export const searchAdverts = async (make = '', page = 1) => {
  return await errorWrapper(
    instance({
      params: {
        page,
        make,
      },
    })
  );
};
