import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import UserList from "./components/UserList";
import NewUserForm from "./components/NewUserForm";

export class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route path="/register" component={NewUserForm} />
          <Route path="/edit" component={NewUserForm} />
        </Switch>
      </>
    );
  }
}

export default App;
