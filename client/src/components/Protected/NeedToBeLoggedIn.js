import React, { Component } from "react";
import { Redirect } from "react-router-dom";

const NeedToBeLoggedIn = WrappedComponent => {
  class Protected extends Component {
    render() {
      return document.cookie.split("=")[0] === "ccbd_user" ? (
        <WrappedComponent {...this.props} />
      ) : (
        <Redirect to="/login" />
      );
    }
  }
  return Protected;
};

export default NeedToBeLoggedIn;
