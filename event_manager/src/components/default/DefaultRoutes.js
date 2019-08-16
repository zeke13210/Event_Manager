import React from 'react';
import TopBar from './TopBar';
import { Router, Route } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import Register from './Register';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory(); //Stores componenet history in browser

class DefaultRoutes extends React.Component {
/*
    For first time visitors of website this Route displays and shows them the below
    available routes.

    1. Home
    2. Sign In
    3. Register
*/
  render() {
    return (
      <div>
        <TopBar />
        <Router history={history}>
          <Route path="/" exact component={Home} />
          <Route path="/Sign_In" exact component={SignIn} />
          <Route path="/Register" exact component={Register} />
        </Router>

      </div>
    );
  }
}
export default DefaultRoutes;
