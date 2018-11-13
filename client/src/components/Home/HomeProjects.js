import React, { Component } from "react";
import axios from "axios";

// Components
import ProjectsNavbar from "../Projects/ProjectsNavbar";
import ProjectsCard from "../Projects/ProjectsCard";

class HomeProjects extends Component {
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
    if (
      this.state.currentProjectCategory === "all" &&
      this.state.projects.length > 0
    ) {
      const projects = [];
      for (let i = 0; i < 6; i++) {
        projects.push(this.state.projects[i]);
      }
      return projects.map(project => (
        <div key={project._id} className="card">
          <ProjectsCard
            image={project.image}
            title={project.name}
            chrome={project.website}
            github={project.github}
          />
        </div>
      ));
    } else if (
      this.state.currentProjectCategory !== "all" &&
      this.state.projects.length > 0
    ) {
      const filteredPro = this.state.projects.filter(
        pro => pro.category.toLowerCase() === this.state.currentProjectCategory
      );
      const projects = [];
      for (let i = 0; i < 6; i++) {
        projects.push(filteredPro[i]);
      }
      return projects.map(
        pro =>
          pro !== undefined && (
            <div key={pro._id} className="card">
              <ProjectsCard
                image={pro.image}
                title={pro.name}
                chrome={pro.website}
                github={pro.github}
              />
            </div>
          )
      );
    }
  };

  render() {
    return (
      <section className="projects">
        <div className="container">
          <div className="projects_info">
            <h1 className="section_title wow fadeInDown" data-wow-duration="2s">
              Projects
            </h1>
            <span
              className="section_underline wow zoomIn"
              data-wow-duration="2s"
            />
            <ProjectsNavbar
              mainState={this.state}
              projectNavbar={this.onProjectsNavbarItemClickHandler}
              previous={this.onPreviousClickHandler}
              projectClick={this.onProjectsNavbarItemClickHandler}
              next={this.onNextClickHandler}
            />
            <div
              className="row wow zoomIn"
              data-wow-duration="2s"
              data-wow-delay="0s"
            >
              {this.renderProjects()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeProjects;
