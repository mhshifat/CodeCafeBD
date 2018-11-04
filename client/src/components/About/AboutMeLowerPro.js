import React from "react";
import { Link } from "react-router-dom";

// Components
import AboutMeFace from "./AboutMeFace";
import AboutSocialLink from "./AboutSocialLink";

const AboutMeLowerPro = () => {
  return (
    <div className="about_lower_pro">
      <AboutMeFace />
      <div className="about_lower_pro_social">
        <AboutSocialLink href="/" icon="fab fa-facebook" />
        <AboutSocialLink href="/" icon="fab fa-twitter-square" />
        <AboutSocialLink href="/" icon="fab fa-linkedin" />
        <AboutSocialLink href="/" icon="fab fa-github-square" />
        <AboutSocialLink href="/" icon="fab fa-pinterest-square" />
      </div>
      <div className="about_lower_pro_desc">
        <p>
          I’m a full stack web developer living in Jatrabari, Dhaka, Bangladesh.
          I spend my days with my hands in many different areas of web
          development from back end programming (PHP, Laravel, NodeJS, Python)
          to front end engineering (HTML, CSS, and jQuery/Javascript, Bootstrap,
          ReactJS, AngularJS, VueJS, Materialize CSS, Foundation), user
          experience and visual design. I’m extremely passionate about web
          development.
        </p>
      </div>
      <div className="about_lower_pro_links">
        <a
          href="/resume/mehedi hassan shifat resume.pdf"
          download="resume of mehedi hassan"
          className="ripple"
        >
          <i className="fas fa-download" /> Download Resume
        </a>
        <Link className="ripple" to="/contact">
          <i className="fas fa-envelope" /> Contact Me
        </Link>
      </div>
    </div>
  );
};

export default AboutMeLowerPro;
