import {
  SIDEBAR_STATE_OPEN,
  SIDEBAR_STATE_CLOSE,
  ERROR_MESSAGES,
  ENABLE_LOADER,
  DISABLE_LOADER,
  SUCCESS_MESSAGE
} from "./types";
import axios from "axios";

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

export const sendContactMessage = formData => async dispatch => {
  try {
    dispatch({ type: ENABLE_LOADER });
    const res = await axios.post("/api/contact", formData);
    if (res.data) {
      dispatch({ type: SUCCESS_MESSAGE, payload: res.data.data });
      setTimeout(() => {
        dispatch({ type: SUCCESS_MESSAGE, payload: {} });
        dispatch({ type: DISABLE_LOADER });
      }, 4500);
      return res.data;
    }
  } catch (err) {
    if (!err.response.data.success) {
      dispatch({ type: ERROR_MESSAGES, payload: err.response.data.errors });
      setTimeout(() => {
        dispatch({ type: ERROR_MESSAGES, payload: {} });
        dispatch({ type: DISABLE_LOADER });
      }, 4500);
    }
  }
};
