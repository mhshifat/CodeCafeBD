import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { logoutTheUser } from "../../Store/Actions/authActions";

const TopNavbarProLink = props => {
  const onNavbarProLinkHandler = e => {
    const getSupporterEl = document.querySelectorAll("img[data-icon]");
    getSupporterEl.forEach(el => {
      if (
        el.parentElement.nextSibling &&
        el.parentElement.nextSibling !== null
      ) {
        el.parentElement.nextSibling.classList.remove("openSupporter");
      }
    });
    if (e.target.textContent.toLowerCase().includes("sign out")) {
      props.logoutTheUser(props.history);
    }
  };

  return (
    <div className="top_navbar_icon_supporter_links">
      <Link
        to={props.link1To}
        className="top_navbar_icon_supporter_links_area ripple"
        onClick={onNavbarProLinkHandler}
      >
        <i className={props.icon1} /> {props.link1}
      </Link>
      {props.link2 !== "Sign Out" ? (
        <Link
          to={props.link2To}
          className="top_navbar_icon_supporter_links_area ripple"
          onClick={onNavbarProLinkHandler}
        >
          <i className={props.icon2} /> {props.link2}
        </Link>
      ) : (
        <div
          className="top_navbar_icon_supporter_links_area ripple"
          style={{ color: "#fff", cursor: "pointer" }}
          onClick={onNavbarProLinkHandler}
        >
          <i className={props.icon2} /> {props.link2}
        </div>
      )}
    </div>
  );
};

export default connect(
  null,
  { logoutTheUser }
)(withRouter(TopNavbarProLink));
