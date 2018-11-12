import React from "react";

const ProjectsCardMenuItem = props => {
  return (
    <a
      href={props.image ? props.image : props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="projects_card_info_content_menu_item"
      data-lightbox="projects"
    >
      <i className={props.icon} />
    </a>
  );
};

export default ProjectsCardMenuItem;
