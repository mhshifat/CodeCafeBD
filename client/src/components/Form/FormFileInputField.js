import React from "react";

const FormFileInputField = props => {
  return (
    <div className="form_file_group">
      <input
        type="file"
        name="image"
        id="image"
        className="form_file_group_control"
        onChange={props.change}
      />
      <label htmlFor="image" className="form_file_group_label">
        <i className="fas fa-file-upload" /> Click here to upload image...
      </label>
    </div>
  );
};

export default FormFileInputField;
