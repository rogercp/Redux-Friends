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
        <div className="app">
          <header>
          <nav>
            <Link to="/login">Login</Link>
          </nav>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/protected" component={FriendList}/>
          </header>
        </div>
      </Router>
    );

  }
  
}

export default App;
