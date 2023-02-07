import axios from "axios";
import {BASE_URL, APP_URL} from '../app.constants';

export const getCategories = () => {
  return axios.get(`${BASE_URL}${APP_URL.productCategories}`);
};
