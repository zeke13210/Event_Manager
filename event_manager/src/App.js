import React from 'react';
import './App.css';
import UserRoute from './components/user/UserRoutes';
import Home from './componenets/default/Home';
class App extends React.Component {


  render() {
    return (
      <UserRoute /> //render user view
    );
  }
}
export default App;
