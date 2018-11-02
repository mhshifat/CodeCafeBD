import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <section className="hero">
      <div className="hero_overlay">
        <div className="container">
          <div className="hero_overlay_info">
            <h1
              className="hero_overlay_info_title wow fadeInLeft"
              data-wow-duration="2s"
            >
              Hi, I'm Mehedi Hassan Shifat
            </h1>
            <h2
              className="hero_overlay_info_subtitle wow fadeInRight"
              data-wow-duration="2s"
            >
              MEAN & MERN Stack Web Developer
            </h2>
            <Link
              className="hero_overlay_info_link ripple wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="1s"
              to="/about"
            >
              Learn more
            </Link>
            <div className="scroll_down">
              <span className="scroll_down_inner">
                <h4 className="scroll_down_inner_title">Scroll Down</h4>
                <i className="fas fa-chevron-down" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
