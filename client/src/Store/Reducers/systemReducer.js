import {
  SIDEBAR_STATE_OPEN,
  SIDEBAR_STATE_CLOSE,
  ENABLE_LOADER,
  ERROR_MESSAGES,
  SUCCESS_MESSAGE
} from "../Actions/types";

const initialState = {
  isSidebarOpen: false,
  isLoaderOpen: false,
  messages: {
    success: {},
    errors: {}
  }
};

const systemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDEBAR_STATE_OPEN:
      return { isSidebarOpen: true };
    case SIDEBAR_STATE_CLOSE:
      return { isSidebarOpen: false };
    case ENABLE_LOADER:
      return { isLoaderOpen: !state.isLoaderOpen };
    case ERROR_MESSAGES:
      return {
        isLoaderOpen: false,
        messages: { ...state.messages, success: {}, errors: action.payload }
      };
    case SUCCESS_MESSAGE:
      return {
        isLoaderOpen: false,
        messages: { ...state.messages, errors: {}, success: action.payload }
      };
    default:
      return state;
  }
};

export default systemReducer;
