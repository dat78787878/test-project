import { put, call, takeEvery } from 'redux-saga/effects';
import { getUsedTimeData, postUsedTimeData, putUsedTimeData, deleteUsedTimeData } from './api';
import {
  getDataSuccess,
  getDataError,
  postDataSuccess,
  postDataError,
  putDataSuccess,
  putDataError,
  deleteDataSuccess,
  deleteDataError,
} from './actions';

const GET_USEDTIME_DATA = 'GET_USEDTIME_DATA';
function* getUsedTime(action) {
  try {
    const data = yield call(getUsedTimeData, action.payload);
    yield put(getDataSuccess(data.data));
  } catch (e) {
    yield put(getDataError());
  }
}

const POST_USEDTIME_DATA = 'POST_USEDTIME_DATA';
function* postUsedTime(action) {
  try {
    const data = yield call(postUsedTimeData, action.payload);
    yield put(postDataSuccess(data));
  } catch (e) {
    yield put(postDataError());
  }
}

const PUT_USEDTIME_DATA = 'PUT_USEDTIME_DATA';
function* putUsedTime(action) {
  try {
    const data = yield call(putUsedTimeData, action.payload[0]);
    const position = action.payload[1];
    yield put(putDataSuccess(data, position));
  } catch (e) {
    yield put(putDataError());
  }
}

const DELETE_USEDTIME_DATA = 'DELETE_USEDTIME_DATA';
function* deleteUsedTime(action) {
  try {
    yield call(deleteUsedTimeData, action.payload[0]);
    yield put(deleteDataSuccess(action.payload[1]));
  } catch (e) {
    yield put(deleteDataError());
  }
}

function* usedTimeSaga() {
  yield takeEvery(GET_USEDTIME_DATA, getUsedTime);
  yield takeEvery(POST_USEDTIME_DATA, postUsedTime);
  yield takeEvery(PUT_USEDTIME_DATA, putUsedTime);
  yield takeEvery(DELETE_USEDTIME_DATA, deleteUsedTime);
}

export default usedTimeSaga;
