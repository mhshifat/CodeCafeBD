import React from "react";

// Components
import HomeHero from "./HomeHero";
import HomeServices from "./HomeServices";
import HomeProjects from "./HomeProjects";
import HomePosts from "./HomePosts";
import HomeWant from "./HomeWant";

const Homepage = () => {
  return (
    <React.Fragment>
      <HomeHero />
      <HomeServices />
      <HomeProjects />
      <HomePosts />
      <HomeWant />
    </React.Fragment>
  );
};

export default Homepage;
