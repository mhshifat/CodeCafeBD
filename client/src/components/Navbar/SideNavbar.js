import React, { Component } from "react";
import { connect } from "react-redux";

import { changeSidebarState } from "../../Store/Actions/systemActions";

// Components
import SideNavbarHeader from "./SideNavbarHeader";
import SideNavbarSearch from "./SideNavbarSearch";
import SideNavbarMain from "./SideNavbarMain";
import SideNavbarFooter from "./SideNavbarFooter";

class SideNavbar extends Component {
  componentDidMount = () => {
    const getRootEl = document.querySelector(".app_root");
    getRootEl.addEventListener("click", () => {
      this.props.changeSidebarState();
      const getAllActiveDropDown = document.querySelectorAll(
        ".rotateDropDownIcon"
      );
      if (getAllActiveDropDown && getAllActiveDropDown.length > 0) {
        getAllActiveDropDown.forEach(el => {
          el.classList.remove("rotateDropDownIcon");
          el.parentElement.nextSibling.style.setProperty("height", "0rem");
        });
      }
    });
  };

  render() {
    return (
      <aside
        className={`side_navbar ${this.props.system.isSidebarOpen &&
          "openSidebar"}`}
      >
        <SideNavbarHeader />
        <SideNavbarSearch />
        <SideNavbarMain />
        <SideNavbarFooter />
      </aside>
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
  { changeSidebarState }
)(SideNavbar);
