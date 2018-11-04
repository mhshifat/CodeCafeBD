import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { WOW } from "wowjs";

// Components
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

class App extends Component {
  componentDidMount = () => {
    new WOW({
      live: false
    }).init();
  };

  render() {
    return (
      <BrowserRouter>
        <Fragment>
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
                <Route path="/login" component={LoginComponent} />
                <Route path="/register" component={RegisterComponent} />
                <Route
                  path="/dashboard/settings"
                  component={NotFoundComponent}
                />
                <Route
                  path="/dashboard/projects"
                  component={DashboardProjects}
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

export default App;
