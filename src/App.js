import React from "react";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const user = false;

  return (
    <Router>
      <Topbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">{user ? <Home /> : <Register />}</Route>
      <Route path="/login">{user ? <Home /> : <Login />}</Route>
      <Route path="/write">{user ? <Write /> : <Write />}</Route>
      <Route path="/settings">{user ? <Settings /> : <Settings />}</Route>
      <Route path="/post/:postId">
        <Single />
      </Route>
    </Router>
  );
}

export default App;
