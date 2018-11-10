import React, { Component } from "react";
import { connect } from "react-redux";

class MessagesComponent extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.system.messages &&
          Object.keys(this.props.system.messages.errors).length > 0 && (
            <div className="messages">
              {Object.values(this.props.system.messages.errors).map(
                (message, index) => (
                  <div key={index} className="messages_error">
                    <i className="fas fa-cog fa-spin" /> {message} !
                  </div>
                )
              )}
            </div>
          )}
        {this.props.system.messages &&
          Object.keys(this.props.system.messages.success).length > 0 && (
            <div className="messages">
              {Object.values(this.props.system.messages.success).map(
                (message, index) => (
                  <div key={index} className="messages_success">
                    <i className="fas fa-cog fa-spin" /> {message} !
                  </div>
                )
              )}
            </div>
          )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    system: state.system
  };
};

export default connect(mapStateToProps)(MessagesComponent);
