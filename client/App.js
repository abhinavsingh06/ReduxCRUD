import React, { Component } from "react";
import NewUserForm from "./components/NewUserForm";
import { Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={UserList} />
      </>
    );
  }
}

export default App;
