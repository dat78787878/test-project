import { put, call, takeLatest } from 'redux-saga/effects';
import { postLoginData } from './api';
import { postDataSuccess, postDataError } from './actions';

const POST_LOGIN_DATA = 'POST_LOGIN_DATA';
function* postLogin(action) {
  try {
    yield call(postLoginData, action.payload);
    // localStorage.setItem('accessToken', data.data.accessToken);
    yield put(postDataSuccess(action.payload));
  } catch (e) {
    yield put(postDataError());
  }
}

function* loginSaga() {
  yield takeLatest(POST_LOGIN_DATA, postLogin);
}

export default loginSaga;
