import React from "react";

// Components
import HomeHero from "./HomeHero";
import HomeServices from "./HomeServices";
import HomeProjects from "./HomeProjects";
import HomePosts from "./HomePosts";

const Homepage = () => {
  return (
    <React.Fragment>
      <HomeHero />
      <HomeServices />
      <HomeProjects />
      <HomePosts />
    </React.Fragment>
  );
};

export default Homepage;
