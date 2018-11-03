import React from "react";

const HomeServicesCard = props => {
  return (
    <div className="services_info_card">
      <div className="services_info_card_icon">
        <i className={`${props.icon} fa-4x`} />
      </div>
      <div className="services_info_card_content">
        <h4 className="services_info_card_content_title">{props.title}</h4>
        <p className="services_info_card_content_quote">{props.quote}</p>
      </div>
    </div>
  );
};

export default HomeServicesCard;
