import React, { Component } from "react";
import { Redirect } from "react-router-dom";

const AlreadyLoggedIn = WrappedComponent => {
  class ProtectFromSpam extends Component {
    render() {
      return document.cookie.split("=")[0] !== "ccbd_user" ? (
        <WrappedComponent {...this.props} />
      ) : (
        <Redirect to="/dashboard/settings" />
      );
    }
  }
  return ProtectFromSpam;
};

export default AlreadyLoggedIn;
