import { POST_LOGIN_DATA, POST_LOGIN_SUCCESS, POST_LOGIN_ERROR, LOGOUT } from './types';

const initState = {
  user: '',
  isLoading: false,
  isError: false,
};
const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case POST_LOGIN_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case POST_LOGIN_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        user: data,
        isLoading: false,
        isError: false,
      };
    }
    case POST_LOGIN_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case LOGOUT: {
      return {
        ...state,
        user: '',
        isLoading: false,
        isError: false,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
export default loginReducer;
