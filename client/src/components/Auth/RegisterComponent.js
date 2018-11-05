import React, { Component } from "react";
import { connect } from "react-redux";

import { registerNewUserAction } from "../../Store/Actions/authActions";

// Components
import FormInputField from "../Form/FormInputField";
import FormFullWidthBtn from "../Form/FormFullWidthBtn";

class RegisterComponent extends Component {
  state = {
    formValue: {
      username: "",
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
    this.props.registerNewUserAction(this.state.formValue, this.props.history);
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
              <form
                onSubmit={this.onFormSubmitHandler}
                className="auth_wrapper_form"
              >
                <FormInputField
                  type="text"
                  for="username"
                  label="Username"
                  value={this.state.formValue.username}
                  change={this.onInputFieldChangeHandler}
                />
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
                <FormFullWidthBtn content="Register" />
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
  { registerNewUserAction }
)(RegisterComponent);
