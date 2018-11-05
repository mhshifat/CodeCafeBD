import { ENABLE_LOADER, ERROR_MESSAGES, SUCCESS_MESSAGE } from "./types";
import axios from "axios";

export const registerNewUserAction = (userData, history) => async dispatch => {
  try {
    dispatch({ type: ENABLE_LOADER });
    const res = await axios.post("/api/auth/register", userData);
    if (res.data) {
      history.push("/login");
      dispatch({ type: SUCCESS_MESSAGE, payload: res.data.data });
    }
  } catch (err) {
    if (!err.response.data.success) {
      dispatch({ type: ERROR_MESSAGES, payload: err.response.data.errors });
    }
  }
};
