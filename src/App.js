import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/organisms/Header';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import NoMatch from './components/pages/NoMatch';
import './styles/style.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
