import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
 } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Bookmark from "./components/Bookmark";
import './index.css';

const App = () => {
  return(
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Bookmark" component={Bookmark} />
    </Switch>
  </Router>
  );
}

export default App;
