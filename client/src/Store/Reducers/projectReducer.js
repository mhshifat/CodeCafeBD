import {
  ADD_PROJECT,
  ALL_PROJECTS,
  DELETED_PROJECT,
  UPDATE_PROJECT
} from "../Actions/types";

const initialState = {
  projects: []
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [action.payload, ...state.projects]
      };
    case DELETED_PROJECT:
      return {
        ...state,
        projects: [...state.projects].filter(
          item => item._id !== action.payload._id
        )
      };
    case UPDATE_PROJECT:
      const projects = [...state.projects].filter(
        item => item._id !== action.payload._id
      );
      projects.unshift(action.payload);
      return {
        ...state,
        projects: projects
      };
    default:
      return state;
  }
};

export default projectReducer;
