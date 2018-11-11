import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { WOW } from "wowjs";

import { getCurrentUser } from "./Store/Actions/authActions";
import { getAllProjects } from "./Store/Actions/projectActions";

// Components
import LoaderComponent from "./components/Loader/LoaderComponent";
import MessagesComponent from "./components/Messages/MessagesComponent";
import TopNavbar from "./components/Navbar/TopNavbar";
import SideNavbar from "./components/Navbar/SideNavbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Home/Homepage";
import PostsComponent from "./components/Posts/PostsComponent";
import ProjectsComponent from "./components/Projects/ProjectsComponent";
import NotFoundComponent from "./components/NotFound/NotFoundComponent";
import AboutComponent from "./components/About/AboutComponent";
import ContactComponent from "./components/Contact/ContactComponent";
import LoginComponent from "./components/Auth/LoginComponent";
import RegisterComponent from "./components/Auth/RegisterComponent";
import DashboardProjects from "./components/Dashboard/Projects/DashboardProjects";
import DashboardSettings from "./components/Dashboard/Settings/DashboardSettings";
import NeedToBeLoggedIn from "./components/Protected/NeedToBeLoggedIn";
import AlreadyLoggedIn from "./components/Protected/AlreadyLoggedIn";

class App extends Component {
  componentWillMount = () => {
    window.addEventListener("load", () => {
      const getLoader = document.querySelector(".loader");
      setTimeout(() => {
        getLoader.classList.add("loaderAnimation");
        setTimeout(() => {
          getLoader.style.setProperty("display", "none");
        }, 1800);
      }, 3000);
    });
    if (document.cookie) {
      this.props.getCurrentUser(document.cookie);
      this.props.getAllProjects();
    }
  };

  componentDidMount = () => {
    new WOW({
      live: false
    }).init();
  };

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <LoaderComponent />
          <MessagesComponent />
          <TopNavbar />
          <SideNavbar />
          <div className="app_root">
            <div className="inner_root">
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/blogs" component={PostsComponent} />
                <Route path="/projects" component={ProjectsComponent} />
                <Route path="/forum" component={NotFoundComponent} />
                <Route path="/shop" component={NotFoundComponent} />
                <Route path="/about" component={AboutComponent} />
                <Route path="/contact" component={ContactComponent} />
                <Route
                  path="/login"
                  component={AlreadyLoggedIn(LoginComponent)}
                />
                <Route
                  path="/register"
                  component={AlreadyLoggedIn(RegisterComponent)}
                />
                <Route
                  exact
                  path="/dashboard/settings"
                  component={NeedToBeLoggedIn(DashboardSettings)}
                />
                <Route
                  exact
                  path="/dashboard/projects"
                  component={NeedToBeLoggedIn(DashboardProjects)}
                />
                <Route component={NotFoundComponent} />
              </Switch>
            </div>
          </div>
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { getCurrentUser, getAllProjects }
)(App);
