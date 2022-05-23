import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Login';
// import { LoginContext } from './context';

import reportWebVitals from './reportWebVitals';

const context = {
  initLogin: {
    loginStatus: false
  },
  login: {
    loginStatus: false
  }
}

const Context = createContext(context.initLogin);

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={context.login}>
      <Router>
        <Switch>
          <Route path="/home" component={App} />
          <Route path="/login" component={Login} />
          <Redirect path="/" to="/login" exact />
        </Switch>
      </Router>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
