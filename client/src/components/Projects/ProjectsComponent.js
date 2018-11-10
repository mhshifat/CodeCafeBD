import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import ProjectsNavbar from "./ProjectsNavbar";
import ProjectsCard from "./ProjectsCard";

class ProjectsComponent extends Component {
  state = {
    currentProjectCategory: "all",
    catsStartNumber: 0,
    catsEndNumber: 3,
    catsThatWillBeShown: ["NodeJS", "ReactJS", "VueJS"],
    categories: ["NodeJS", "ReactJS", "VueJS", "AngularJS", "JavaScript"]
  };

  componentWillMount = () => {
    window.scrollTo(0, 0);
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

  render() {
    return (
      <div className="projects">
        <ProjectsNavbar
          state={this.state}
          projectNavbar={this.onProjectsNavbarItemClickHandler}
          previous={this.onPreviousClickHandler}
          projectClick={this.onProjectsNavbarItemClickHandler}
          next={this.onNextClickHandler}
        />
        <div className="row pl-2 pr-2">
          <div
            className="card wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay="0s"
          >
            <ProjectsCard
              image="sample.jpg"
              title="Project 1"
              chrome="/"
              github="/"
            />
          </div>

          <div
            className="card wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay=".2s"
          >
            <ProjectsCard
              image="sample.jpg"
              title="Project 1"
              chrome="/"
              github="/"
            />
          </div>

          <div
            className="card wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay=".4s"
          >
            <ProjectsCard
              image="sample.jpg"
              title="Project 1"
              chrome="/"
              github="/"
            />
          </div>

          <div
            className="card wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay=".6s"
          >
            <ProjectsCard
              image="sample.jpg"
              title="Project 1"
              chrome="/"
              github="/"
            />
          </div>

          <div
            className="card wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay=".8s"
          >
            <ProjectsCard
              image="sample.jpg"
              title="Project 1"
              chrome="/"
              github="/"
            />
          </div>

          <div
            className="card wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay="1s"
          >
            <ProjectsCard
              image="sample.jpg"
              title="Project 1"
              chrome="/"
              github="/"
            />
          </div>

          <div
            className="card wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay="1.2s"
          >
            <ProjectsCard
              image="sample.jpg"
              title="Project 1"
              chrome="/"
              github="/"
            />
          </div>

          <div
            className="card wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay="1.4s"
          >
            <ProjectsCard
              image="sample.jpg"
              title="Project 1"
              chrome="/"
              github="/"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    system: state.system,
    projects: state.projects
  };
};

export default connect(mapStateToProps)(ProjectsComponent);
