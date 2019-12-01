import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { REGISTER } from "../actions/types";
import { registerUser } from "../actions/actions";

export class NewUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //   handleSubmit = e => {
  //     e.preventDefault();
  //     axios.post("", this.state);
  //   };

  render() {
    return (
      <>
        <input
          onChange={this.handleChange}
          value={this.state.name}
          name="name"
          placeholder="name"
        />
        <input
          onChange={this.handleChange}
          value={this.state.email}
          name="email"
          placeholder="email"
        />
        <button onClick={this.props.fetchUser}>Submit</button>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => registerUser(this.state)
  };
};

export default connect(null, mapDispatchToProps)(NewUserForm);
