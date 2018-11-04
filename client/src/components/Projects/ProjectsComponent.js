import React, { Component } from "react";

// Components
import ProjectsNavbar from "./ProjectsNavbar";
import ProjectsCard from "./ProjectsCard";

class ProjectsComponent extends Component {
  componentWillMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="projects">
        <ProjectsNavbar />
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

export default ProjectsComponent;
