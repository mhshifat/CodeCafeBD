import React, { Component } from "react";

// Components
import ProjectsNavbar from "../Projects/ProjectsNavbar";
import ProjectsCard from "../Projects/ProjectsCard";

class HomeProjects extends Component {
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
            <ProjectsNavbar />
            <div className="row">
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
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeProjects;
