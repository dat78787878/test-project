import axios from 'axios';
import BASE_URL from '../../constant/constant';

const refreshToken = async (refreshToken) => {
  const response = await axios.post(BASE_URL + '/user/reissue', {
    refreshToken: refreshToken,
  });
  if (response.data) {
    const newToken = {
      accessToken: response.data,
      refreshToken: refreshToken,
    };
    localStorage.setItem('user', JSON.stringify(newToken));
  }
  return response.data;
};

if (localStorage.getItem('user')) {
  const token = JSON.parse(localStorage.getItem('user'));
  axios.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer ' + token.accessToken;
    return config;
  });
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        refreshToken(token.refreshToken);
      }
    }
  );
}

const getUsedTimeData = (page) => {
  return axios.get(BASE_URL + '/todo', {
    params: {
      page,
    },
  });
};

const postUsedTimeData = (todo) => {
  return axios.post(BASE_URL + '/todo', {
    title: todo.title,
    is_finished: todo.is_finished,
  });
};

const putUsedTimeData = (todoE) => {
  return axios.patch(BASE_URL + '/todo', {
    _id: todoE._id,
    title: todoE.title,
    is_finished: todoE.is_finished,
  });
};

const deleteUsedTimeData = (positonDelete) => {
  return axios.delete(BASE_URL + '/todo/' + positonDelete);
};

export { getUsedTimeData, postUsedTimeData, putUsedTimeData, deleteUsedTimeData, refreshToken };
