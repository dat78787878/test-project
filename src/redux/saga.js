import { all, fork } from 'redux-saga/effects';
import loginSaga from './login/saga';
import registerSaga from './register/saga';
import usedTimeSaga from './usedTime/saga';

function* saga() {
  yield all([
    fork(loginSaga),
    fork(usedTimeSaga),
    fork(registerSaga),
  ]);
}

export default saga;
