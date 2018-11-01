import { SIDEBAR_STATE } from "./types";

export const changeSidebarState = () => dispatch => {
  dispatch({
    type: SIDEBAR_STATE
  });
};
