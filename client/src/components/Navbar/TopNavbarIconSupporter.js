import React from "react";

import TopNavbarProLink from "./TopNavbarProLink";

const renderLinks = name => {
  if (name.toLowerCase().includes("guest")) {
    return (
      <TopNavbarProLink
        icon1="fas fa-sign-in-alt"
        link1="Login"
        link1To="/login"
        icon2="fas fa-user-circle"
        link2="Register"
        link2To="/register"
      />
    );
  } else {
    return (
      <TopNavbarProLink
        icon1="fas fa-cog"
        link1="Settings"
        link1To="/dashboard/settings"
        icon2="fas fa-sign-out-alt"
        link2="Sign Out"
        link2To=""
      />
    );
  }
};

const TopNavbarIconSupporter = props => {
  return (
    <div className="top_navbar_icon_supporter">
      <div className="top_navbar_icon_supporter_pro">
        <div className="top_navbar_icon_supporter_pro_icon">
          <img
            className="top_navbar_icon_supporter_pro_icon_img"
            src="/images/website/icons/boy.svg"
            alt="codecafebd default icon"
          />
        </div>
        <h4 className="top_navbar_icon_supporter_pro_name">{props.name}</h4>
        <h4 className="top_navbar_icon_supporter_pro_email">
          {props.email.length > 20
            ? `${props.email}`.slice(0, 20) + "..."
            : props.email}
        </h4>
      </div>
      {renderLinks(props.name)}
    </div>
  );
};

export default TopNavbarIconSupporter;
