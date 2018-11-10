import React from "react";

// Components
import FormFileInputField from "../Form/FormFileInputField";
import FormInputField from "../Form/FormInputField";
import FormFullWidthBtn from "../Form/FormFullWidthBtn";
import ModalImagePreview from "../Modal/ModalImagePreview";

const ModalContentForAddingNewProject = props => {
  return (
    <div className="modal_projects">
      <form onSubmit={props.submit} className="modal_form">
        {!props.imagePreview && (
          <FormFileInputField change={props.onImageChange} />
        )}
        <ModalImagePreview
          onImageCross={props.onImageCross}
          imagePreview={props.imagePreview}
        />
        <FormInputField
          type="text"
          for="name"
          label="Name"
          value={props.form.name}
          change={props.change}
        />
        <FormInputField
          type="text"
          for="category"
          label="Category"
          value={props.form.category}
          change={props.change}
        />
        <FormInputField
          type="text"
          for="website"
          label="Website"
          value={props.form.website}
          change={props.change}
        />
        <FormInputField
          type="text"
          for="github"
          label="Github"
          value={props.form.github}
          change={props.change}
        />
        <FormFullWidthBtn content="Save project" />
      </form>
    </div>
  );
};

export default ModalContentForAddingNewProject;
