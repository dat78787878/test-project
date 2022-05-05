import axios from 'axios';
import BASE_URL from '../../constant/constant';

const postRegisterData = (user) => {
  return axios.post(BASE_URL + '/user', {
    username: user.username,
    password: user.password,
  });
};

export { postRegisterData };
