import React from 'react';
import TopBar from './TopBar';
import { Router, Route } from 'react-router-dom';
import Home from './Home';
import NewEvent from './NewEvent';
import ViewEvents from './ViewEvents';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory(); //manage componenet history within browsre

class UserRoutes extends React.Component {
  /*
    Renders below routes specific to user once they log in

    1. Home
    2. New Event
    3. View Event
    4. Profile -Needs setup

  */

  render() {
    return (
      <div>
        <TopBar />
        <Router history={history}>
          <Route path="/" exact component={Home} />
          <Route path="/New_Event" exact component={NewEvent} />
          <Route path="/View_Events" exact component={ViewEvents} />

        </Router>

      </div>
    );
  }
}
export default UserRoutes;
