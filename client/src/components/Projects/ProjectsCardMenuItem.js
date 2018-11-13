import React from "react";

const ProjectsCardMenuItem = props => {
  return (
    <React.Fragment>
      {props.image ? (
        <a
          href={props.image}
          target="_blank"
          rel="noopener noreferrer"
          className="projects_card_info_content_menu_item"
          data-lightbox="projects"
        >
          <i className={props.icon} />
        </a>
      ) : (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className="projects_card_info_content_menu_item"
        >
          <i className={props.icon} />
        </a>
      )}
    </React.Fragment>
  );
};

export default ProjectsCardMenuItem;
