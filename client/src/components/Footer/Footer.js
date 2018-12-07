import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_social">
        <div className="footer_social_menu wow zoomIn" data-wow-duration="2s">
          <a href="/" target="_blank" className="footer_social_menu_link">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="/" target="_blank" className="footer_social_menu_link">
            <i className="fab fa-twitter" />
          </a>
          <a href="/" target="_blank" className="footer_social_menu_link">
            <i className="fab fa-youtube" />
          </a>
          <a href="/" target="_blank" className="footer_social_menu_link">
            <i className="fab fa-google" />
          </a>
          <a href="/" target="_blank" className="footer_social_menu_link">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="/" target="_blank" className="footer_social_menu_link">
            <i className="fab fa-github" />
          </a>
          <a href="/" target="_blank" className="footer_social_menu_link">
            <i className="fab fa-free-code-camp" />
          </a>
        </div>
      </div>
      <div className="footer_copy">
        <h4 className="footer_copy_text wow zoomIn" data-wow-duration="2s">
          <i className="fas fa-heart" /> <i className="fas fa-copyright" /> 2018
          Handmade by{" "}
          <a target="_black" href="http://www.mhshifat.ga">
            mhshifat
          </a>{" "}
          with lots of love <i className="fas fa-heart" />
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
