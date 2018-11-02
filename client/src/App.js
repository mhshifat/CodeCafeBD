import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { WOW } from "wowjs";

// Components
import TopNavbar from "./components/Navbar/TopNavbar";
import SideNavbar from "./components/Navbar/SideNavbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Home/Homepage";

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
                <Route path="/" component={Homepage} />
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
