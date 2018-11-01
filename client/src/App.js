import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

// Components
import TopNavbar from "./components/Navbar/TopNavbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <TopNavbar />
          <div className="app_root" />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
