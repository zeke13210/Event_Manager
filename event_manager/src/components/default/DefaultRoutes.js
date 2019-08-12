import React from 'react';
import TopBar from './TopBar';
import { Router, Route } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import Register from './Register';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

class DefaultRoutes extends React.Component {


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
