import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './App.css';
import FriendList from './Components/FriendList';
import Login from './Components/Login';
import PrivateRoute from "./Components/PrivateRoute"

class App extends React.Component {
  render(){

    return (
      <Router>

      <header>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/">Ok Dont Login</Link>
      </nav>
      <Route path="/login" Component={Login}/>
      <PrivateRoute path="/protected" component={FriendList}/>
      </header>
       
      </Router>
    );


  }
  
}

export default App;
