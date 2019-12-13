import React from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Tasks } from "./pages/Tasks";
import { Profile } from "./pages/Profile";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/tasks" component={Tasks} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;
