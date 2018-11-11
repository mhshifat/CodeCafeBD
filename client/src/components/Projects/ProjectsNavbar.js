import React from "react";

import ProjectsNavbarItem from "./ProjectsNavbarItem";
import ProjectNavbarCatsPrevious from "./ProjectNavbarCatsPrevious";
import ProjectNavbarCatsNext from "./ProjectNavbarCatsNext";

const ProjectsNavbar = props => {
  const renderProjectNavbarItems = () => {
    return props.mainState.catsThatWillBeShown.map((cat, index) => (
      <ProjectsNavbarItem
        key={index}
        click={props.projectNavbar}
        currentCat={props.mainState.currentProjectCategory}
        content={cat}
      />
    ));
  };
  return (
    <div className="projects_navbar">
      <span
        className={`projects_navbar_wrapper wow zoomIn ${props.mainState
          .categories.length < 3 && "plr-2"}`}
        data-wow-duration="2s"
      >
        <ProjectNavbarCatsPrevious
          state={props.mainState}
          click={props.previous}
        />
        <ProjectsNavbarItem
          click={props.projectClick}
          currentCat={props.mainState.currentProjectCategory}
          content="All"
        />
        {renderProjectNavbarItems()}
        <ProjectNavbarCatsNext state={props.mainState} click={props.next} />
      </span>
    </div>
  );
};

export default ProjectsNavbar;
