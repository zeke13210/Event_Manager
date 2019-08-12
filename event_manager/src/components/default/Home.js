import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import SignIn from './SignIn';
import Register from './Register';

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
          <Router history={history}>
          <Route path="/Sign_In" exact component={SignIn} />
          <Route path="/Register" exact component={Register} />

        </Router>
        </div>
      );
    }
  }
  export default Home;