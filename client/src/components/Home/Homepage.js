import React, { Component } from "react";

// Components
import HomeHero from "./HomeHero";
import HomeServices from "./HomeServices";
import HomeProjects from "./HomeProjects";
import HomePosts from "./HomePosts";
import HomeWant from "./HomeWant";

class Homepage extends Component {
  componentWillMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <React.Fragment>
        <HomeHero />
        <HomeServices />
        <HomeProjects />
        <HomePosts />
        <HomeWant />
      </React.Fragment>
    );
  }
}

export default Homepage;
