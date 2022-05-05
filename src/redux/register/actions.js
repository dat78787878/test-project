import { POST_REGISTER_DATA, POST_REGISTER_SUCCESS, POST_REGISTER_ERROR } from './types';

const postData = (payload) => {
  return {
    type: POST_REGISTER_DATA,
    payload,
  };
};
const postDataSuccess = (payload) => {
  return {
    type: POST_REGISTER_SUCCESS,
    payload,
  };
};
const postDataError = (payload) => {
  return {
    type: POST_REGISTER_ERROR,
    payload,
  };
};
export { postData, postDataSuccess, postDataError };
