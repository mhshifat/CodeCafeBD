import React from "react";

const FormTextAreaField = props => {
  return (
    <div className="form_textarea_group">
      <textarea
        name={props.for}
        id={props.for}
        className="form_textarea_group_control"
        placeholder={props.for}
        onChange={props.change}
      />
      <label htmlFor={props.for} className="form_textarea_group_label">
        {props.label}
      </label>
      <span className="form_textarea_group_border" />
    </div>
  );
};

export default FormTextAreaField;
