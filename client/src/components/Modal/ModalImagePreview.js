import React from "react";

const ModalImagePreview = props => {
  return (
    <React.Fragment>
      {props.imagePreview && (
        <div className="image_preview">
          <img
            src={
              props.imagePreview.endsWith(".png") ||
              props.imagePreview.endsWith(".jpg") ||
              props.imagePreview.endsWith(".jpeg")
                ? props.imagePreview
                : props.imagePreview
            }
            alt="preview"
            className="image_preview_img"
          />
          <i
            className="fas fa-times image_preview_cross"
            onClick={props.onImageCross}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default ModalImagePreview;
