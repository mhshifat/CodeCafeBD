import React from "react";

const ModalImagePreview = props => {
  return (
    <div className="image_preview">
      <img
        src="/images/website/hero.jpg"
        alt="preview"
        className="image_preview_img"
      />
      <i className="fas fa-times image_preview_cross" />
    </div>
  );
};

export default ModalImagePreview;
