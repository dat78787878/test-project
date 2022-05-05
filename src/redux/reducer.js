import loginReducer from './login/reducer';
import registerReducer from './register/reducer';
import usedTimeReducer from './usedTime/reducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  usedTime: usedTimeReducer,
});

export default reducer;
