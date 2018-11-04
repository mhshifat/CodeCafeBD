import React from "react";

const ProjectNavbarCatsPrevious = props => {
  return (
    <React.Fragment>
      {props.state.categories.length >
        props.state.catsThatWillBeShown.length && (
        <React.Fragment>
          {props.state.categories[0] !== props.state.catsThatWillBeShown[0] ? (
            <span
              onClick={props.click}
              className="projects_navbar_wrapper_previous"
            >
              <i className="fas fa-chevron-left" />
            </span>
          ) : (
            <span className="projects_navbar_wrapper_previous">
              <i className="fas fa-smile" />
            </span>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ProjectNavbarCatsPrevious;
