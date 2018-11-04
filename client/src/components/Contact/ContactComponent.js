import React, { Component } from "react";

// Components
import FormInputField from "../Form/FormInputField";
import FormTextAreaField from "../Form/FormTextAreaField";
import FormFullWidthBtn from "../Form/FormFullWidthBtn";

class ContactComponent extends Component {
  componentWillMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <section className="contact">
        <div className="section_overlay">
          <div className="container">
            <div className="contact_wrapper wow shake" data-wow-duration="2s">
              <div className="contact_wrapper_banner">
                <h4 className="contact_wrapper_banner_title">
                  <i className="fas fa-chevron-left" />
                  Contact me
                  <i className="fas fa-chevron-right" />
                </h4>
              </div>
              <form className="contact_wrapper_form">
                <FormInputField type="text" for="name" label="Enter name" />
                <FormInputField type="email" for="email" label="Enter email" />
                <FormInputField
                  type="text"
                  for="subject"
                  label="Enter subject"
                />
                <FormTextAreaField for="message" label="Enter message" />
                <FormFullWidthBtn content="Send" />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactComponent;
