import { POST_REGISTER_DATA, POST_REGISTER_SUCCESS, POST_REGISTER_ERROR } from './types';

const initState = {
  user: {},
  isLoading: false,
  isError: false,
};
const registerReducer = (state = initState, action) => {
  switch (action.type) {
    case POST_REGISTER_DATA:
      const data = action.payload;
      return {
        ...state,
        isLoading: true,
      };
    case POST_REGISTER_SUCCESS: {
      return {
        ...state,
        user: [...data],
        isLoading: false,
        isError: false,
      };
    }
    case POST_REGISTER_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
export default registerReducer;
