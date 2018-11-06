import React, { Component } from "react";
import { connect } from "react-redux";

class DashboardSettings extends Component {
  render() {
    return (
      <div>
        <h1>Settings</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    system: state.system
  };
};

export default connect(mapStateToProps)(DashboardSettings);
