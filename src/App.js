import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Header from './components/organisms/Header';
import Toast from './components/organisms/Toast';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import NoMatch from './components/pages/NoMatch';
import './styles/style.css';
import {
  history
} from './../src/store';

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Header />
          <Toast />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
