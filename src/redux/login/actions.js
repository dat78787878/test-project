import { POST_LOGIN_DATA, POST_LOGIN_SUCCESS, POST_LOGIN_ERROR, LOGOUT } from './types';

const postData = (payload) => {
  return {
    type: POST_LOGIN_DATA,
    payload,
  };
};
const postDataSuccess = (payload) => {
  return {
    type: POST_LOGIN_SUCCESS,
    payload,
  };
};
const postDataError = (payload) => {
  return {
    type: POST_LOGIN_ERROR,
    payload,
  };
};

const logout = () => {
  return {
    type: LOGOUT,
  };
};
export { postData, postDataSuccess, postDataError, logout };
