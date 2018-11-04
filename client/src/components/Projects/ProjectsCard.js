import React from "react";

// Components
import ProjectsCardMenuItem from "./ProjectsCardMenuItem";

const ProjectsCard = props => {
  return (
    <div className="projects_card">
      <img
        src={`/images/projects/${props.image}`}
        alt={props.title}
        className="projects_card_img"
      />
      <div className="projects_card_info">
        <div className="projects_card_info_content">
          <h4 className="projects_card_info_content_title">{props.title}</h4>
          <div className="projects_card_info_content_menu">
            <ProjectsCardMenuItem image="sample.jpg" icon="fas fa-eye" />
            <ProjectsCardMenuItem href={props.chrome} icon="fab fa-chrome" />
            <ProjectsCardMenuItem href={props.github} icon="fab fa-github" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;