import React from "react";

const FormFileInputField = () => {
  return (
    <div className="form_file_group">
      <input
        type="file"
        name="image"
        id="image"
        className="form_file_group_control"
      />
      <label htmlFor="image" className="form_file_group_label">
        <i className="fas fa-file-upload" /> Click here to upload image...
      </label>
    </div>
  );
};

export default FormFileInputField;
