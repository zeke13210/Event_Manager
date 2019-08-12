import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';


class TopBar extends React.Component {
  /*
  Renders navigation link with the below routing options available

  1. Home

  */
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Default View</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>          
          </Nav>
        </Navbar>    
      </div>
    );
  }
}
export default TopBar;