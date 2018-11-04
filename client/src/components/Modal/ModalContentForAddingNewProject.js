import React from "react";

// Components
import FormFileInputField from "../Form/FormFileInputField";
import FormInputField from "../Form/FormInputField";
import FormFullWidthBtn from "../Form/FormFullWidthBtn";
// import ModalImagePreview from "../Modal/ModalImagePreview";

const ModalContentForAddingNewProject = props => {
  return (
    <div className="modal_projects">
      <form className="modal_form">
        <FormFileInputField />
        {/* <ModalImagePreview /> */}
        <FormInputField type="text" for="name" label="Name" />
        <FormInputField type="text" for="category" label="Category" />
        <FormInputField type="text" for="website" label="Website" />
        <FormInputField type="text" for="github" label="Github" />
        <FormFullWidthBtn content="Save project" />
      </form>
    </div>
  );
};

export default ModalContentForAddingNewProject;
