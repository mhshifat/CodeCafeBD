import { SIDEBAR_STATE } from "../Actions/types";

const initialState = {
  isSidebarOpen: false
};

const systemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDEBAR_STATE:
      return {
        isSidebarOpen: !state.isSidebarOpen
      };
    default:
      return state;
  }
};

export default systemReducer;
