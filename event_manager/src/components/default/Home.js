import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

import {createBrowserHistory} from 'history';
import { Router, Route } from 'react-router-dom';

const history = createBrowserHistory();

class Home extends React.Component {


    render() {
      return (
        <div>
         <h1>Technologists of Color Event Manager Web App</h1>
         <p>This is a portal meant for users intrested in collaborating with us and submit events</p>
         <p>Pleaes Create an account if you wish to move forward with event submission</p>
          <Nav>
            <Nav.Link href="/Sign_In">Sign In</Nav.Link>
            <Nav.Link href="/Register">Register</Nav.Link>
          </Nav>
        
        </div>
      );
    }
  }
  export default Home;