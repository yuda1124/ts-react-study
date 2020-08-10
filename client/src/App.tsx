import React, { useState, useEffect } from 'react';
import Login from './component/login';
import './App.css';

function App() {
  const [count, setCounter] = useState(0);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
