import React from "react";
import { Link } from "react-router-dom";

const onNavbarProLinkHandler = e => {
  const getSupporterEl = document.querySelectorAll("img[data-icon]");
  getSupporterEl.forEach(el => {
    if (el.parentElement.nextSibling && el.parentElement.nextSibling !== null) {
      el.parentElement.nextSibling.classList.remove("openSupporter");
    }
  });
};

const TopNavbarProLink = props => {
  return (
    <div className="top_navbar_icon_supporter_links">
      <Link
        to={props.link1To}
        className="top_navbar_icon_supporter_links_area ripple"
        onClick={onNavbarProLinkHandler}
      >
        <i className={props.icon1} /> {props.link1}
      </Link>
      <Link
        to={props.link2To}
        className="top_navbar_icon_supporter_links_area ripple"
        onClick={onNavbarProLinkHandler}
      >
        <i className={props.icon2} /> {props.link2}
      </Link>
    </div>
  );
};

export default TopNavbarProLink;
