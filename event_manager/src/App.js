import React from 'react';
import './App.css';
import UserRoute from './components/user/UserRoutes';
import DefaultRoutes from './components/default/Home';
class App extends React.Component {


  render() {
    return (
      <DefaultRoutes /> //render user view
    );
  }
}
export default App;
