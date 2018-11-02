import { SIDEBAR_STATE_OPEN, SIDEBAR_STATE_CLOSE } from "../Actions/types";

const initialState = {
  isSidebarOpen: false
};

const systemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDEBAR_STATE_OPEN:
      return {
        isSidebarOpen: true
      };
    case SIDEBAR_STATE_CLOSE:
      return {
        isSidebarOpen: false
      };
    default:
      return state;
  }
};

export default systemReducer;
