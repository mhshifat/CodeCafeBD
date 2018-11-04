import React from "react";

const ModalComponent = props => {
  return (
    <div onClick={props.click} className="modal">
      {props.children}
    </div>
  );
};

export default ModalComponent;
