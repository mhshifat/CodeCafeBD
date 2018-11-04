import React, { Component } from "react";

import ProjectsNavbarItem from "./ProjectsNavbarItem";
import ProjectNavbarCatsPrevious from "./ProjectNavbarCatsPrevious";
import ProjectNavbarCatsNext from "./ProjectNavbarCatsNext";

class ProjectsNavbar extends Component {
  state = {
    currentProjectCategory: "all",
    catsStartNumber: 0,
    catsEndNumber: 3,
    catsThatWillBeShown: ["NodeJS", "ReactJS", "VueJS"],
    categories: ["NodeJS", "ReactJS", "VueJS", "AngularJS", "JavaScript"]
  };

  onProjectsNavbarItemClickHandler = e => {
    this.setState({
      ...this.state,
      currentProjectCategory: e.target.textContent.toLowerCase()
    });
  };

  renderProjectNavbarItems = () => {
    return this.state.catsThatWillBeShown.map((cat, index) => (
      <ProjectsNavbarItem
        key={index}
        click={this.onProjectsNavbarItemClickHandler}
        currentCat={this.state.currentProjectCategory}
        content={cat}
      />
    ));
  };

  onPreviousClickHandler = () => {
    const cats = this.state.categories.slice(
      this.state.catsStartNumber - 1,
      this.state.catsEndNumber - 1
    );
    this.setState({
      currentProjectCategory: cats[0].toLowerCase(),
      catsStartNumber: this.state.catsStartNumber - 1,
      catsEndNumber: this.state.catsEndNumber - 1,
      catsThatWillBeShown: cats
    });
  };

  onNextClickHandler = () => {
    const cats = this.state.categories.slice(
      this.state.catsStartNumber + 1,
      this.state.catsEndNumber + 1
    );
    this.setState({
      currentProjectCategory: cats[cats.length - 1].toLowerCase(),
      catsStartNumber: this.state.catsStartNumber + 1,
      catsEndNumber: this.state.catsEndNumber + 1,
      catsThatWillBeShown: cats
    });
  };

  render() {
    return (
      <div className="projects_navbar">
        <span
          className="projects_navbar_wrapper wow zoomIn"
          data-wow-duration="2s"
        >
          <ProjectNavbarCatsPrevious
            state={this.state}
            click={this.onPreviousClickHandler}
          />
          <ProjectsNavbarItem
            click={this.onProjectsNavbarItemClickHandler}
            currentCat={this.state.currentProjectCategory}
            content="All"
          />
          {this.renderProjectNavbarItems()}
          <ProjectNavbarCatsNext
            state={this.state}
            click={this.onNextClickHandler}
          />
        </span>
      </div>
    );
  }
}

export default ProjectsNavbar;
