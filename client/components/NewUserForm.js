import React, { Component } from "react";

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

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.name}
          name="name"
        />
        <input
          onChange={this.handleChange}
          value={this.state.email}
          name="email"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default NewUserForm;
