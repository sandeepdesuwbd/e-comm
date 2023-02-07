import axios from "axios";
import {BASE_URL, APP_URL} from '../app.constants';

export const getProducts = (cat) => {
  let url = `${BASE_URL}${APP_URL.products}`;
  if(cat){
    url += `${APP_URL.category}/${cat}`;
  }
  return axios.get(url);
};