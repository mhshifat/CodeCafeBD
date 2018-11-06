import React, { Component } from "react";
import { connect } from "react-redux";

import { loginTheUserAction } from "../../Store/Actions/authActions";

// Components
import FormInputField from "../Form/FormInputField";
import FormFullWidthBtn from "../Form/FormFullWidthBtn";

class LoginComponent extends Component {
  state = {
    formValue: {
      email: "",
      password: ""
    }
  };

  componentWillMount = () => {
    window.scrollTo(0, 0);
  };

  onInputFieldChangeHandler = e => {
    this.setState({
      formValue: {
        ...this.state.formValue,
        [e.target.name]: e.target.value
      }
    });
  };

  onFormSubmitHandler = e => {
    e.preventDefault();
    this.props.loginTheUserAction(this.state.formValue, this.props.history);
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
              <form
                onSubmit={this.onFormSubmitHandler}
                className="auth_wrapper_form"
              >
                <FormInputField
                  type="email"
                  for="email"
                  label="Email"
                  value={this.state.formValue.email}
                  change={this.onInputFieldChangeHandler}
                />
                <FormInputField
                  type="password"
                  for="password"
                  label="Password"
                  value={this.state.formValue.password}
                  change={this.onInputFieldChangeHandler}
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

export default connect(
  null,
  { loginTheUserAction }
)(LoginComponent);
