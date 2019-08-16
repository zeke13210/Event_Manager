import React from 'react';
import { Button } from 'react-bootstrap';
import './layout.css' //styling for content

class Home extends React.Component {


  render() {
    return (
      <div id="container">
        <h1>Technologists of Color Event Manager Web App</h1>
        <p>This is a portal meant for users intrested in collaborating with us and submit events</p>
        <p>Pleaes Create an account if you wish to move forward with event submission</p>
        <div id="btn-container">
          <Button href="/Sign_In">Sign_In</Button>
          <Button href="/Register">Register</Button>
        </div>
      </div>
    );
  }
}
export default Home;