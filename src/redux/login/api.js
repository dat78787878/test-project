import axios from 'axios';
import BASE_URL from '../../constant/constant';

const postLoginData = async (user) => {
  const response = await axios.post(BASE_URL + '/user/sign-in', {
    username: user.username,
    password: user.password,
  });
  if (response.data.accessToken) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export { postLoginData };
