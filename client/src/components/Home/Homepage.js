import React from "react";

// Components
import HomeHero from "./HomeHero";
import HomeServices from "./HomeServices";

const Homepage = () => {
  return (
    <React.Fragment>
      <HomeHero />
      <HomeServices />
    </React.Fragment>
  );
};

export default Homepage;
