import React from "react";

const ProjectNavbarCatsNext = props => {
  return (
    <React.Fragment>
      {props.state.categories.length >
        props.state.catsThatWillBeShown.length && (
        <React.Fragment>
          {props.state.categories[props.state.categories.length - 1] !==
          props.state.catsThatWillBeShown[
            props.state.catsThatWillBeShown.length - 1
          ] ? (
            <span
              onClick={props.click}
              className="projects_navbar_wrapper_next"
            >
              <i className="fas fa-chevron-right" />
            </span>
          ) : (
            <span className="projects_navbar_wrapper_next">
              <i className="fas fa-smile" />
            </span>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ProjectNavbarCatsNext;
