import React from "react";
import { connect } from "react-redux";

// Components
import SideNavbarLink from "./SideNavbarLink";
import SideNavbarLinkDropdown from "./SideNavbarLinkDropdown";

const SideNavbarMain = props => {
  return (
    <div className="side_navbar_main">
      <div className="side_navbar_main_box">
        <SideNavbarLink to="/" icon="fas fa-h-square" content="Home" />
        <SideNavbarLink to="/blogs" icon="fas fa-th-large" content="Blogs" />
        <SideNavbarLink
          to="/projects"
          icon="fas fa-images"
          content="Projects"
        />
        <SideNavbarLink to="/forum" icon="fas fa-comments" content="Forum" />
        <SideNavbarLink to="/shop" icon="fas fa-shopping-cart" content="Shop" />
      </div>
      <div className="side_navbar_main_box">
        <SideNavbarLink to="/about" icon="fas fa-heart" content="About me" />
        <SideNavbarLink
          to="/contact"
          icon="fas fa-envelope"
          content="Contact me"
        />
        {!props.system.isUserLoggedIn && (
          <React.Fragment>
            <SideNavbarLink
              to="/login"
              icon="fas fa-sign-in-alt"
              content="Join Us"
            />
            <SideNavbarLink
              to="/register"
              icon="fas fa-user-secret"
              content="Get started"
            />
          </React.Fragment>
        )}
      </div>
      {props.system.user &&
        props.system.user.isAdmin && (
          <div className="side_navbar_main_box">
            <SideNavbarLinkDropdown
              icon="fas fa-lock"
              content="Projects"
              lists={[{ to: "/dashboard/projects", content: "All Projects" }]}
            />
            <SideNavbarLinkDropdown
              icon="fas fa-lock"
              content="Posts"
              lists={[
                { to: "/dashboard/posts", content: "All Posts" },
                { to: "/dashboard/posts/new", content: "Add Posts" }
              ]}
            />
            <SideNavbarLinkDropdown
              icon="fas fa-lock"
              content="Categories"
              lists={[
                { to: "/dashboard/categories", content: "All Categories" }
              ]}
            />
            <SideNavbarLinkDropdown
              icon="fas fa-lock"
              content="Comments"
              lists={[{ to: "/dashboard/comments", content: "All Comments" }]}
            />
          </div>
        )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    system: state.system
  };
};

export default connect(mapStateToProps)(SideNavbarMain);
