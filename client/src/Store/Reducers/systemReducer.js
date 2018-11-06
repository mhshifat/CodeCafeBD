import {
  SIDEBAR_STATE_OPEN,
  SIDEBAR_STATE_CLOSE,
  ENABLE_LOADER,
  ERROR_MESSAGES,
  SUCCESS_MESSAGE,
  CURRENT_USER,
  LOGOUT_USER
} from "../Actions/types";

const initialState = {
  isUserLoggedIn: false,
  isSidebarOpen: false,
  isLoaderOpen: false,
  messages: {
    success: {},
    errors: {}
  },
  user: {}
};

const systemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDEBAR_STATE_OPEN:
      return { ...state, isSidebarOpen: true };
    case SIDEBAR_STATE_CLOSE:
      return { ...state, isSidebarOpen: false };
    case ENABLE_LOADER:
      return { isLoaderOpen: !state.isLoaderOpen };
    case ERROR_MESSAGES:
      return {
        ...state,
        isLoaderOpen: false,
        messages: { ...state.messages, success: {}, errors: action.payload }
      };
    case SUCCESS_MESSAGE:
      return {
        ...state,
        isLoaderOpen: false,
        messages: { ...state.messages, errors: {}, success: action.payload }
      };
    case CURRENT_USER:
      return { ...state, isUserLoggedIn: true, user: action.payload };
    case LOGOUT_USER:
      return { ...state, isUserLoggedIn: false, user: {} };
    default:
      return state;
  }
};

export default systemReducer;
