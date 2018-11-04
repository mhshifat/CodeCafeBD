import React from "react";
import { Link } from "react-router-dom";

const HomeWant = () => {
  return (
    <section className="want">
      <div className="container">
        <div className="want_info">
          <h4 className="want_info_title wow fadeInDown" data-wow-duration="2s">
            Want to work together ?
          </h4>
          <p className="want_info_desc wow zoomIn" data-wow-duration="2s">
            I am currently accepting new projects and would love to hear about
            yours. Please take a few minutes to tell me about it.
          </p>
          <Link
            className="want_info_link ripple wow fadeInUp"
            data-wow-duration="2s"
            to="/contact"
          >
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeWant;
