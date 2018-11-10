import {
  ENABLE_LOADER,
  ERROR_MESSAGES,
  SUCCESS_MESSAGE,
  CURRENT_USER,
  LOGOUT_USER,
  DISABLE_LOADER
} from "./types";
import axios from "axios";

export const registerNewUserAction = (userData, history) => async dispatch => {
  try {
    dispatch({ type: ENABLE_LOADER });
    const res = await axios.post("/api/auth/register", userData);
    if (res.data) {
      history.push("/login");
      dispatch({ type: SUCCESS_MESSAGE, payload: res.data.data });
      setTimeout(() => {
        dispatch({ type: SUCCESS_MESSAGE, payload: {} });
        dispatch({ type: DISABLE_LOADER });
      }, 4500);
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

export const loginTheUserAction = (userData, history) => async dispatch => {
  try {
    dispatch({ type: ENABLE_LOADER });
    const res = await axios.post("/api/auth/login", userData);
    if (res.data) {
      dispatch({ type: CURRENT_USER, payload: res.data.user });
      history.push("/dashboard/settings");
      dispatch({ type: SUCCESS_MESSAGE, payload: res.data.data });
      setTimeout(() => {
        dispatch({ type: SUCCESS_MESSAGE, payload: {} });
        dispatch({ type: DISABLE_LOADER });
      }, 4500);
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

export const getCurrentUser = token => async dispatch => {
  try {
    const res = await axios.get(`/api/auth/user/${token}`);
    if (res.data) {
      dispatch({ type: CURRENT_USER, payload: res.data.user });
    }
  } catch (err) {}
};

export const logoutTheUser = history => async dispatch => {
  try {
    dispatch({ type: ENABLE_LOADER });
    const res = await axios.get(`/api/auth/logout`);
    if (res.data) {
      dispatch({ type: LOGOUT_USER });
      history.push("/login");
      dispatch({ type: SUCCESS_MESSAGE, payload: res.data.data });
      setTimeout(() => {
        dispatch({ type: SUCCESS_MESSAGE, payload: {} });
        dispatch({ type: DISABLE_LOADER });
      }, 4500);
    }
  } catch (err) {}
};
