import React from "react";

// Components
import HomeHero from "./HomeHero";
import HomeServices from "./HomeServices";
import HomeProjects from "./HomeProjects";

const Homepage = () => {
  return (
    <React.Fragment>
      <HomeHero />
      <HomeServices />
      <HomeProjects />
    </React.Fragment>
  );
};

export default Homepage;
