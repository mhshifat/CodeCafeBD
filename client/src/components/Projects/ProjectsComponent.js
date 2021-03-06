import React, { Component } from "react";
import axios from "axios";

// Components
import ProjectsNavbar from "./ProjectsNavbar";
import ProjectsCard from "./ProjectsCard";

class ProjectsComponent extends Component {
  state = {
    currentProjectCategory: "all",
    catsStartNumber: 0,
    catsEndNumber: 3,
    catsThatWillBeShown: [],
    categories: [],
    projects: []
  };

  componentWillMount = async () => {
    window.scrollTo(0, 0);
    const res = await axios.get("/api/projects");
    const allCats = res.data.projects.map(project => project.category);
    const removedDuplicateCat = [];
    for (let i = 0; i < allCats.length; i++) {
      const index = removedDuplicateCat.indexOf(allCats[i]);
      if (index === -1) removedDuplicateCat.push(allCats[i]);
    }
    this.setState({
      ...this.state,
      catsThatWillBeShown: removedDuplicateCat.slice(0, 3),
      categories: removedDuplicateCat,
      projects: res.data.projects
    });
  };

  onProjectsNavbarItemClickHandler = e => {
    this.setState({
      ...this.state,
      currentProjectCategory: e.target.textContent.toLowerCase()
    });
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

  renderProjects = () => {
    if (this.state.currentProjectCategory === "all") {
      return this.state.projects.map(project => (
        <div
          key={project._id}
          className="card wow zoomIn"
          data-wow-duration="2s"
          data-wow-delay="0s"
        >
          <ProjectsCard
            image={project.image}
            title={project.name}
            chrome={project.website}
            github={project.github}
          />
        </div>
      ));
    } else {
      return this.state.projects
        .filter(
          project =>
            project.category.toLowerCase() === this.state.currentProjectCategory
        )
        .map(pro => (
          <div
            key={pro._id}
            className="card wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay="0s"
          >
            <ProjectsCard
              image={pro.image}
              title={pro.name}
              chrome={pro.website}
              github={pro.github}
            />
          </div>
        ));
    }
  };

  render() {
    return (
      <div className="projects">
        <ProjectsNavbar
          mainState={this.state}
          projectNavbar={this.onProjectsNavbarItemClickHandler}
          previous={this.onPreviousClickHandler}
          projectClick={this.onProjectsNavbarItemClickHandler}
          next={this.onNextClickHandler}
        />
        <div className="row pl-2 pr-2">{this.renderProjects()}</div>
      </div>
    );
  }
}

export default ProjectsComponent;
