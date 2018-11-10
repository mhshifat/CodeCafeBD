import React, { Component } from "react";

import ProjectsNavbarItem from "./ProjectsNavbarItem";
import ProjectNavbarCatsPrevious from "./ProjectNavbarCatsPrevious";
import ProjectNavbarCatsNext from "./ProjectNavbarCatsNext";

class ProjectsNavbar extends Component {
  renderProjectNavbarItems = () => {
    return this.props.state.catsThatWillBeShown.map((cat, index) => (
      <ProjectsNavbarItem
        key={index}
        click={this.props.projectNavbar}
        currentCat={this.props.state.currentProjectCategory}
        content={cat}
      />
    ));
  };

  render() {
    return (
      <div className="projects_navbar">
        <span
          className="projects_navbar_wrapper wow zoomIn"
          data-wow-duration="2s"
        >
          <ProjectNavbarCatsPrevious
            state={this.props.state}
            click={this.props.previous}
          />
          <ProjectsNavbarItem
            click={this.props.projectClick}
            currentCat={this.props.state.currentProjectCategory}
            content="All"
          />
          {this.renderProjectNavbarItems()}
          <ProjectNavbarCatsNext
            state={this.props.state}
            click={this.props.next}
          />
        </span>
      </div>
    );
  }
}

export default ProjectsNavbar;
