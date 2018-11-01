import React from "react";

const SideNavbarSearch = () => {
  return (
    <div className="side_navbar_search ripple">
      <input
        type="text"
        placeholder="Search"
        className="side_navbar_search_input"
        disabled
      />
    </div>
  );
};

export default SideNavbarSearch;
