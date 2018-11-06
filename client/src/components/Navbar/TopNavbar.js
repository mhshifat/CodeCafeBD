import React, { Component } from "react";
import { connect } from "react-redux";

import { changeSidebarStateToOpen } from "../../Store/Actions/systemActions";

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

  onHamburgerMenuClickHandler = () => {
    this.props.changeSidebarStateToOpen();
  };

  render() {
    return (
      <nav className="top_navbar">
        <TopNavbarIcon
          click={this.onHamburgerMenuClickHandler}
          icon="hamburger.svg"
        />
        <div className="top_navbar_menu">
          {this.props.system.isUserLoggedIn && (
            <React.Fragment>
              <TopNavbarIcon
                icon="envelop.svg"
                width="1.8rem"
                height="1.8rem"
              />
              <TopNavbarIcon
                icon="notification.svg"
                width="2rem"
                height="2rem"
                ml="1rem"
              />
            </React.Fragment>
          )}
          <TopNavbarIcon
            icon="boy.svg"
            className="top_navbar_pro_icon"
            ml="1rem"
            width="60%"
            height="60%"
            click={this.onNavbarIconClickHandler}
          >
            <TopNavbarIconSupporter
              name={
                this.props.system.user !== undefined &&
                this.props.system.user.username
                  ? this.props.system.user.username
                  : "Guest User"
              }
              email={
                this.props.system.user !== undefined &&
                this.props.system.user.email
                  ? this.props.system.user.email
                  : "example@example.com"
              }
            />
          </TopNavbarIcon>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    system: state.system
  };
};

export default connect(
  mapStateToProps,
  { changeSidebarStateToOpen }
)(TopNavbar);
