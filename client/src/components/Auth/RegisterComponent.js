import React, { Component } from "react";

// Components
import FormInputField from "../Form/FormInputField";
import FormFullWidthBtn from "../Form/FormFullWidthBtn";

class RegisterComponent extends Component {
  componentWillMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <section className="auth">
        <div className="section_overlay">
          <div className="container">
            <div className="auth_wrapper wow shake" data-wow-duration="2s">
              <div className="auth_wrapper_banner">
                <h4 className="auth_wrapper_banner_title">
                  <i className="fas fa-chevron-left" />
                  Register
                  <i className="fas fa-chevron-right" />
                </h4>
              </div>
              <form className="auth_wrapper_form">
                <FormInputField type="text" for="username" label="Username" />
                <FormInputField type="email" for="email" label="Email" />
                <FormInputField
                  type="password"
                  for="password"
                  label="Password"
                />
                <FormFullWidthBtn content="Register" />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RegisterComponent;
