import axios from "axios";
import {
  ERROR_MESSAGES,
  SUCCESS_MESSAGE,
  ADD_PROJECT,
  ENABLE_LOADER,
  DISABLE_LOADER,
  ALL_PROJECTS,
  DELETED_PROJECT,
  UPDATE_PROJECT
} from "./types";

export const addProjectAction = data => async dispatch => {
  try {
    dispatch({ type: ENABLE_LOADER });
    const res = await axios.post("/api/projects/add", data);
    if (res.data.success) {
      dispatch({ type: SUCCESS_MESSAGE, payload: res.data.data });
      dispatch({ type: ADD_PROJECT, payload: res.data.project });
      dispatch({ type: DISABLE_LOADER });
      return res.data.project;
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

export const getAllProjects = () => async dispatch => {
  try {
    const res = await axios.get("/api/projects");
    dispatch({ type: ALL_PROJECTS, payload: res.data.projects });
  } catch (err) {}
};

export const deleteProjectAction = id => async dispatch => {
  try {
    const res = await axios.get(`/api/projects/delete/${id}`);
    dispatch({ type: SUCCESS_MESSAGE, payload: res.data.data });
    setTimeout(() => {
      dispatch({ type: SUCCESS_MESSAGE, payload: {} });
    }, 4500);
    dispatch({ type: DELETED_PROJECT, payload: res.data.project });
  } catch (err) {
    if (!err.response.data.success) {
      dispatch({ type: ERROR_MESSAGES, payload: err.response.data.errors });
      setTimeout(() => {
        dispatch({ type: ERROR_MESSAGES, payload: {} });
      }, 4500);
    }
  }
};

export const updateProjectAction = (id, project) => async dispatch => {
  try {
    dispatch({ type: ENABLE_LOADER });
    const res = await axios.post(`/api/projects/update/${id}`, project);
    if (res.data.success) {
      dispatch({ type: SUCCESS_MESSAGE, payload: res.data.data });
      dispatch({ type: UPDATE_PROJECT, payload: res.data.project });
      dispatch({ type: DISABLE_LOADER });
      return res.data.project;
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
