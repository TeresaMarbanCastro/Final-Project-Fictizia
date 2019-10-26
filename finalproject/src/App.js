import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Login/Login';
import Posts from './Posts/Posts';
import Account from './Account/Account';
import { Provider } from 'react-redux';
import configureStore from './configStore';

function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
 