import Axios from 'axios';
import Constants from '../constants';

export const api = {
  getData() {
    return Axios.get(Constants.API_URL);
  },
};
