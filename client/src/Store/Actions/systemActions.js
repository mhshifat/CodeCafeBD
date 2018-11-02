import { SIDEBAR_STATE_OPEN, SIDEBAR_STATE_CLOSE } from "./types";

export const changeSidebarStateToOpen = () => dispatch => {
  dispatch({
    type: SIDEBAR_STATE_OPEN
  });
};

export const changeSidebarStateToClose = () => dispatch => {
  dispatch({
    type: SIDEBAR_STATE_CLOSE
  });
};
