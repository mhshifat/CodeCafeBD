import React from "react";

const ProjectsNavbarItem = props => {
  return (
    <span
      onClick={props.click}
      className={`projects_navbar_wrapper_item ${props.currentCat ===
        props.content.toLowerCase() && "project_navbar"}`}
    >
      {props.content}
    </span>
  );
};

export default ProjectsNavbarItem;
