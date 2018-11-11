import React, { Component } from "react";
import { connect } from "react-redux";

import { sendContactMessage } from "../../Store/Actions/systemActions";

// Components
import FormInputField from "../Form/FormInputField";
import FormTextAreaField from "../Form/FormTextAreaField";
import FormFullWidthBtn from "../Form/FormFullWidthBtn";

class ContactComponent extends Component {
  state = {
    formData: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  };

  componentWillMount = () => {
    window.scrollTo(0, 0);
  };

  onInputValueChangeHandler = e => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value
      }
    });
  };

  onContactFormSubmitHandler = async e => {
    e.preventDefault();
    const res = await this.props.sendContactMessage(this.state.formData);
    if (res) {
      this.setState({
        ...this.state,
        formData: {
          name: "",
          email: "",
          subject: "",
          message: ""
        }
      });
    }
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
              <form
                onSubmit={this.onContactFormSubmitHandler}
                className="contact_wrapper_form"
              >
                <FormInputField
                  type="text"
                  for="name"
                  label="Enter name"
                  value={this.state.formData.name}
                  change={this.onInputValueChangeHandler}
                />
                <FormInputField
                  type="email"
                  for="email"
                  label="Enter email"
                  value={this.state.formData.email}
                  change={this.onInputValueChangeHandler}
                />
                <FormInputField
                  type="text"
                  for="subject"
                  label="Enter subject"
                  value={this.state.formData.subject}
                  change={this.onInputValueChangeHandler}
                />
                <FormTextAreaField
                  for="message"
                  label="Enter message"
                  value={this.state.formData.message}
                  change={this.onInputValueChangeHandler}
                />
                <FormFullWidthBtn content="Send" />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  null,
  { sendContactMessage }
)(ContactComponent);
