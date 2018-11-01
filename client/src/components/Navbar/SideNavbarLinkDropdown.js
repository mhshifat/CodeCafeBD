import React from "react";
import { Link } from "react-router-dom";

const onDropDownLinkClickHandler = e => {
  const getAllActiveDropDown = document.querySelectorAll(".rotateDropDownIcon");
  if (getAllActiveDropDown && getAllActiveDropDown.length > 0) {
    getAllActiveDropDown.forEach(el => {
      el.classList.remove("rotateDropDownIcon");
      el.parentElement.nextSibling.style.setProperty("height", "0rem");
    });
  }
  const getClickedItem = document.querySelector(
    `div[data-drop=${e.target.dataset.drop}]`
  );
  if (
    !getClickedItem.previousSibling.classList.contains("rotateDropDownIcon")
  ) {
    getClickedItem.previousSibling.classList.toggle("rotateDropDownIcon");
    getClickedItem.parentElement.nextSibling.style.setProperty(
      "height",
      `${getClickedItem.parentElement.nextSibling.children.length * 3}rem`
    );
  }
};

const SideNavbarLinkDropdown = props => {
  const renderLinks = () => {
    return props.lists.map((list, index) => {
      return (
        <Link
          key={index}
          className="side_navbar_main_box_lists_link"
          to={list.to}
        >
          <i className="fas fa-link" /> {list.content}
        </Link>
      );
    });
  };

  return (
    <React.Fragment>
      <div className="side_navbar_main_box_dropdown ripple">
        <i className={props.icon} /> {props.content}
        <i className="fas fa-chevron-down dropdown-icon" />
        <div
          className="side_navbar_main_box_dropdown_inner"
          data-drop={props.content}
          onClick={onDropDownLinkClickHandler}
        />
      </div>
      <div className="side_navbar_main_box_lists">{renderLinks()}</div>
    </React.Fragment>
  );
};

export default SideNavbarLinkDropdown;
