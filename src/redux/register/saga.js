import { put, call, takeLatest } from 'redux-saga/effects';
import { postRegisterData } from './api';
import { postDataSuccess, postDataError } from './actions';

const POST_REGISTER_DATA = 'POST_REGISTER_DATA';
function* postRegister(action) {
  try {
    const data = yield call(postRegisterData, action.payload);
    yield put(postDataSuccess(data));
  } catch (e) {
    yield put(postDataError());
  }
}

function* registerSaga() {
  yield takeLatest(POST_REGISTER_DATA, postRegister);
}

export default registerSaga;
