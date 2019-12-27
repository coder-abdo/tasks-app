import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Tasks } from "./pages/Tasks";
import Profile from "./pages/Profile";
import { ErrorPage } from "./pages/ErrorPage";
import { Header } from "./components/Header";
import { fetchingData } from "./actions/Action";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const getData = () => dispatch(fetchingData());
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/tasks" component={Tasks} />
        <Route exact path="/profile" component={Profile} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;
