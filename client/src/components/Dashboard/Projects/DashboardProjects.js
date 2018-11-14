import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

// Components
import ModalBtn from "../../Modal/ModalBtn";
import ModalComponent from "../../Modal/ModalComponent";
import ModalContentForAddingNewProject from "../../Modal/ModalContentForAddingNewProject";

import {
  addProjectAction,
  deleteProjectAction,
  updateProjectAction
} from "../../../Store/Actions/projectActions";

class DashboardProjects extends Component {
  state = {
    isModalOpen: false,
    isModalAboutUpdatingProject: false,
    formValue: {
      id: "",
      name: "",
      category: "",
      website: "",
      github: "",
      image: ""
    },
    imagePreview: ""
  };

  componentWillMount = () => {
    window.scrollTo(0, 0);
  };

  onModalBtnClickHandler = () => {
    this.setState({
      ...this.state,
      isModalOpen: true,
      formValue: {
        id: "",
        name: "",
        category: "",
        website: "",
        github: "",
        image: ""
      },
      imagePreview: ""
    });
  };

  onModalBackClickHandler = e => {
    if (e.target.className === "modal") {
      this.setState({
        isModalOpen: false
      });
    }
  };

  onImagePreviewChangeHandler = e => {
    this.setState({
      ...this.state,
      formValue: {
        ...this.state.formValue,
        image: e.target.value
      },
      imagePreview: e.target.value
    });
  };

  onImageCrossClickHandler = e => {
    this.setState({
      ...this.state,
      formValue: {
        ...this.state.formValue,
        image: ""
      },
      imagePreview: ""
    });
  };

  onInputChangeHandler = e => {
    this.setState({
      formValue: {
        ...this.state.formValue,
        [e.target.name]: e.target.value
      }
    });
  };

  onFormSubmitHandler = async e => {
    e.preventDefault();
    const newProject = new FormData();
    newProject.append("user", document.cookie.split("=")[1]);
    newProject.append("name", this.state.formValue.name);
    newProject.append("category", this.state.formValue.category);
    newProject.append("website", this.state.formValue.website);
    newProject.append("github", this.state.formValue.github);
    newProject.append("image", this.state.imagePreview);
    const res = await this.props.addProjectAction(newProject);
    if (res) {
      this.setState({
        ...this.state,
        isModalOpen: false,
        imagePreview: "",
        formValue: {
          name: "",
          category: "",
          website: "",
          github: ""
        }
      });
    }
  };

  onTrashClickHandler = id => () => {
    this.props.deleteProjectAction(id);
  };

  onEditClickHandler = project => () => {
    this.setState({
      isModalOpen: true,
      formValue: {
        id: project._id,
        name: project.name,
        category: project.category,
        website: project.website,
        github: project.github
      },
      imagePreview: project.image
    });
  };

  onProjectUpdateHandler = id => async e => {
    try {
      e.preventDefault();
      const updateProject = new FormData();
      updateProject.append("image", this.state.imagePreview);
      updateProject.append("name", this.state.formValue.name);
      updateProject.append("category", this.state.formValue.category);
      updateProject.append("website", this.state.formValue.website);
      updateProject.append("github", this.state.formValue.github);
      const res = await this.props.updateProjectAction(id, updateProject);
      if (res) {
        this.setState({
          ...this.state,
          isModalOpen: false,
          imagePreview: "",
          formValue: {
            name: "",
            category: "",
            website: "",
            github: ""
          }
        });
      }
    } catch (err) {}
  };

  render() {
    return (
      <section className="d_projects">
        <table>
          <thead>
            <tr>
              <th>
                <div className="d_projects_col">
                  <i className="fas fa-angle-down" />
                  ID
                </div>
              </th>
              <th>
                <div className="d_projects_col">
                  <i className="fas fa-signature" />
                  Name
                </div>
              </th>
              <th>
                <div className="d_projects_col">
                  <i className="fas fa-sitemap" />
                  Category
                </div>
              </th>
              <th>
                <div className="d_projects_col">
                  <i className="fab fa-chrome" />
                  Website
                </div>
              </th>
              <th>
                <div className="d_projects_col">
                  <i className="fab fa-github" />
                  Github
                </div>
              </th>
              <th>
                <div className="d_projects_col">
                  <i className="fas fa-clock" /> Date
                </div>
              </th>
              <th>
                <div className="d_projects_col">
                  <i className="fas fa-exclamation-circle" /> Action
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.projects.projects.length > 0 &&
              this.props.projects.projects.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="d_projects_col">{index + 1}</div>
                  </td>
                  <td>
                    <div className="d_projects_col">{item.name}</div>
                  </td>
                  <td>
                    <div className="d_projects_col">{item.category}</div>
                  </td>
                  <td>
                    <div className="d_projects_col">{item.website}</div>
                  </td>
                  <td>
                    <div className="d_projects_col">{item.github}</div>
                  </td>
                  <td>
                    <div className="d_projects_col">
                      {moment(item.date).fromNow()}
                    </div>
                  </td>
                  <td>
                    <div className="d_projects_col">
                      <i
                        onClick={this.onTrashClickHandler(item._id)}
                        className="fas fa-trash d_action"
                      />
                      <i
                        className="fas fa-edit d_action"
                        onClick={this.onEditClickHandler(item)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <ModalBtn click={this.onModalBtnClickHandler} />
        {this.state.isModalOpen && (
          <ModalComponent click={this.onModalBackClickHandler}>
            <ModalContentForAddingNewProject
              form={this.state.formValue}
              change={this.onInputChangeHandler}
              submit={
                this.state.formValue.id
                  ? this.onProjectUpdateHandler(this.state.formValue.id)
                  : this.onFormSubmitHandler
              }
              onImageChange={this.onImagePreviewChangeHandler}
              imagePreview={this.state.imagePreview}
              onImageCross={this.onImageCrossClickHandler}
            />
          </ModalComponent>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects
  };
};

export default connect(
  mapStateToProps,
  { addProjectAction, deleteProjectAction, updateProjectAction }
)(DashboardProjects);
