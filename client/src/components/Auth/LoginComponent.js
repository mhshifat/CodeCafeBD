import React, { Component } from "react";

// Components
import FormInputField from "../Form/FormInputField";
import FormFullWidthBtn from "../Form/FormFullWidthBtn";

class LoginComponent extends Component {
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
                  Login
                  <i className="fas fa-chevron-right" />
                </h4>
              </div>
              <form className="auth_wrapper_form">
                <FormInputField type="email" for="email" label="Email" />
                <FormInputField
                  type="password"
                  for="password"
                  label="Password"
                />
                <FormFullWidthBtn content="Login" />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginComponent;
