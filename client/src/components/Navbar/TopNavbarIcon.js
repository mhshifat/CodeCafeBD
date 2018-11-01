import React from "react";

const TopNavbarIcon = props => {
  return (
    <div className="top_navbar_icon" style={{ marginLeft: props.ml }}>
      <div className={`top_navbar_icon_wrapper ${props.className}`}>
        <img
          onClick={props.click}
          src={`/images/website/icons/${props.icon}`}
          alt="codecafebd hamburger icon"
          className="top_navbar_icon_wrapper_img"
          style={{
            width: props.width,
            height: props.height
          }}
          data-icon={props.icon}
        />
      </div>
      {props.children}
    </div>
  );
};

export default TopNavbarIcon;
