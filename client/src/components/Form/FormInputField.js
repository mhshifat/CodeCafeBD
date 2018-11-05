import React from "react";

const FormInputField = props => {
  return (
    <div className="form_input_group">
      <input
        type={props.type}
        className="form_input_group_control"
        id={props.for}
        autoComplete="off"
        placeholder={props.for}
        name={props.for}
        onChange={props.change}
        value={props.value}
      />
      <label htmlFor={props.for} className="form_input_group_label">
        {props.label}
      </label>
      <span className="form_input_group_border" />
    </div>
  );
};

export default FormInputField;
