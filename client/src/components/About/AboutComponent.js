import React, { Component } from "react";

// Component
import AboutMeHeader from "./AboutMeHeader";
import AboutMeLowerPro from "./AboutMeLowerPro";
import AboutMeLowerExp from "./AboutMeLowerExp";
import AboutMeLowerEdu from "./AboutMeLowerEdu";
import AboutMeLowerSkills from "./AboutMeLowerSkills";

class AboutComponent extends Component {
  render() {
    return (
      <section className="about">
        <AboutMeHeader />
        <div className="about_lower">
          <div className="container ov p-2">
            <AboutMeLowerPro />
            <AboutMeLowerExp />
            <AboutMeLowerEdu />
            <AboutMeLowerSkills />
          </div>
        </div>
      </section>
    );
  }
}

export default AboutComponent;
