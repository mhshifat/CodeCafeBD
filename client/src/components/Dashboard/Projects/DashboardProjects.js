import React, { Component } from "react";

// Components
import ModalBtn from "../../Modal/ModalBtn";
import ModalComponent from "../../Modal/ModalComponent";
import ModalContentForAddingNewProject from "../../Modal/ModalContentForAddingNewProject";

class DashboardProjects extends Component {
  state = {
    isModalOpen: false
  };

  componentWillMount = () => {
    window.scrollTo(0, 0);
  };

  onModalBtnClickHandler = () => {
    this.setState({
      isModalOpen: true
    });
  };

  onModalBackClickHandler = e => {
    if (e.target.className === "modal") {
      this.setState({
        isModalOpen: false
      });
    }
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
          {/* <tbody>
            {projects.length > 0 &&
              projects.map((item, index) => (
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
                      <i className="fas fa-edit d_action" />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody> */}
        </table>
        <ModalBtn click={this.onModalBtnClickHandler} />
        {this.state.isModalOpen && (
          <ModalComponent click={this.onModalBackClickHandler}>
            <ModalContentForAddingNewProject />
          </ModalComponent>
        )}
      </section>
    );
  }
}

export default DashboardProjects;
