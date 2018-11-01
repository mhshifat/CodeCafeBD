import React, { Component } from "react";

// Components
import TopNavbarIcon from "./TopNavbarIcon";
import TopNavbarIconSupporter from "./TopNavbarIconSupporter";

class TopNavbar extends Component {
  componentDidMount = () => {
    const getRootEl = document.querySelector(".app_root");
    getRootEl.addEventListener("click", () => {
      const getSupporterEl = document.querySelectorAll("img[data-icon]");
      getSupporterEl.forEach(el => {
        if (
          el.parentElement.nextSibling &&
          el.parentElement.nextSibling !== null
        ) {
          el.parentElement.nextSibling.classList.remove("openSupporter");
        }
      });
    });
  };

  onNavbarIconClickHandler = e => {
    if (e.target.dataset.icon.includes("boy")) {
      e.target.parentElement.nextSibling.classList.toggle("openSupporter");
    }
  };

  render() {
    return (
      <nav className="top_navbar">
        <TopNavbarIcon icon="hamburger.svg" />
        <div className="top_navbar_menu">
          <TopNavbarIcon icon="envelop.svg" width="1.8rem" height="1.8rem" />
          <TopNavbarIcon
            icon="notification.svg"
            width="2rem"
            height="2rem"
            ml="1rem"
          />
          <TopNavbarIcon
            icon="boy.svg"
            className="top_navbar_pro_icon"
            ml="1rem"
            width="60%"
            height="60%"
            click={this.onNavbarIconClickHandler}
          >
            <TopNavbarIconSupporter
              name="Guest User"
              email="example@example.com"
            />
          </TopNavbarIcon>
        </div>
      </nav>
    );
  }
}

export default TopNavbar;
