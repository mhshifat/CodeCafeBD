import React from "react";
import { Link } from "react-router-dom";

const SideNavbarLink = props => {
  return (
    <Link to={props.to} className="side_navbar_main_box_link ripple">
      <i className={props.icon} /> {props.content}
    </Link>
  );
};

export default SideNavbarLink;
