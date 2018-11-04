import React from "react";

const ModalBtn = props => {
  return (
    <div onClick={props.click} className="modal_btn">
      <i className="fas fa-plus fa-spin" />
    </div>
  );
};

export default ModalBtn;
