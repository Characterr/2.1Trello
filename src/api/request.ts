import axios from 'axios';
import { api } from '../common/constants';

const instance = axios.create({
  baseURL: api.baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 123',
  },
});

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-explicit-any
function fun(res: any) {
  // console.log(res);
  return res.data;
}
// instance.interceptors.response.use((res) => res.data);
instance.interceptors.response.use((res) => fun(res));
export default instance;
