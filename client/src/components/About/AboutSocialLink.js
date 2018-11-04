import React from "react";

const AboutSocialLink = props => {
  return (
    <a href={props.href} rel="noopener noreferrer" target="_blank">
      <i className={props.icon} />
    </a>
  );
};

export default AboutSocialLink;
