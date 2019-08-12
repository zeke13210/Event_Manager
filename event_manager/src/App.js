import React from 'react';
import './App.css';
import UserRoute from './components/user/UserRoutes';
import DefaultRoutes from './components/default/Home';
class App extends React.Component {


  render() {
    /*
      Currently still in the beginning phases of event manager project. Until Authentication is setup in order
      to test the different Views: User, Default, Admin. You must render the invidaul Routes. Current routes setup
      are listed below

      1. UserRoute -- functional
      2. DefaultRoutes --Still under works

    */
    return (
      <UserRoute /> 
    );
  }
}
export default App;
