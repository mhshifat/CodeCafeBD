import React from "react";
import { Link } from "react-router-dom";

const SideNavbarHeader = () => {
  return (
    <div className="side_navbar_header">
      <Link to="/" className="side_navbar_header_logo">
        <h4 className="side_navbar_header_logo_brand">MHSHIFAT</h4>
      </Link>
    </div>
  );
};

export default SideNavbarHeader;
