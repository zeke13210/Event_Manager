import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import { Container } from 'react-bootstrap';
import { Router, Route } from 'react-router-dom'
import NewEvent from './components/NewEvent';
import ViewEvent from './components/ViewEvents';
import Home from './components/Home';

class App extends React.Component {


  render() {
    return (
      <div class="bg">
        <div id="wrapper" className="toggled">
          <div className="overlay"></div>
          <TopBar />
        </div>
       

      </div>
    );
  }
}
export default App;
