import React from "react";

const FormFullWidthBtn = props => {
  return (
    <button className="form_submit_btn ripple" type="submit">
      <i className="fas fa-paper-plane" /> {props.content}
    </button>
  );
};

export default FormFullWidthBtn;
