import React from "react";
import { connect } from "react-redux";

const FormFullWidthBtn = props => {
  return (
    <React.Fragment>
      {props.system.isLoaderOpen ? (
        <button
          className="form_submit_btn ripple"
          disabled={props.system.isLoaderOpen}
          type="submit"
        >
          <i className="fas fa-cog fa-spin" /> Loading...
        </button>
      ) : (
        <button className="form_submit_btn ripple" type="submit">
          <i className="fas fa-paper-plane" /> {props.content}
        </button>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    system: state.system
  };
};

export default connect(mapStateToProps)(FormFullWidthBtn);
