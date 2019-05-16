import React from 'react';

import './App.css';
import FriendList from './Components/FriendList';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Login/>
      <FriendList/>
    </div>
  );
}

export default App;
