import {
  GET_USEDTIME_DATA,
  GET_USEDTIME_SUCCESS,
  GET_USEDTIME_ERROR,
  POST_USEDTIME_DATA,
  POST_USEDTIME_SUCCESS,
  POST_USEDTIME_ERROR,
  PUT_USEDTIME_DATA,
  PUT_USEDTIME_SUCCESS,
  PUT_USEDTIME_ERROR,
  DELETE_USEDTIME_DATA,
  DELETE_USEDTIME_SUCCESS,
  DELETE_USEDTIME_ERROR,
} from './types';

const deleteData = (payload) => {
  return {
    type: DELETE_USEDTIME_DATA,
    payload,
  };
};
const deleteDataSuccess = (payload) => {
  return {
    type: DELETE_USEDTIME_SUCCESS,
    payload,
  };
};
const deleteDataError = (payload) => {
  return {
    type: DELETE_USEDTIME_ERROR,
    payload,
  };
};

const putData = (payload) => {
  return {
    type: PUT_USEDTIME_DATA,
    payload,
  };
};
const putDataSuccess = (payload, position) => {
  return {
    type: PUT_USEDTIME_SUCCESS,
    payload,
    position,
  };
};
const putDataError = (payload) => {
  return {
    type: PUT_USEDTIME_ERROR,
    payload,
  };
};

const postData = (payload) => {
  return {
    type: POST_USEDTIME_DATA,
    payload,
  };
};
const postDataSuccess = (payload) => {
  return {
    type: POST_USEDTIME_SUCCESS,
    payload,
  };
};
const postDataError = (payload) => {
  return {
    type: POST_USEDTIME_ERROR,
    payload,
  };
};
const getData = (payload) => {
  return {
    type: GET_USEDTIME_DATA,
    payload,
  };
};
const getDataSuccess = (payload) => {
  return {
    type: GET_USEDTIME_SUCCESS,
    payload,
  };
};
const getDataError = (payload) => {
  return {
    type: GET_USEDTIME_ERROR,
    payload,
  };
};
export {
  getData,
  getDataSuccess,
  getDataError,
  postData,
  postDataSuccess,
  postDataError,
  putData,
  putDataSuccess,
  putDataError,
  deleteData,
  deleteDataSuccess,
  deleteDataError,
};
