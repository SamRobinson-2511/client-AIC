import React, { useState, useEffect } from 'react'
import './App.css';
import Login from './Login'


const baseUrl = 'http://localhost:3000/'
function App() {
  const [art, setArt] = useState([])
  const apiFetch = () => {
    fetch(baseUrl + 'fetch_arts')
    .then(r=>r.json())
    .then(art => setArt(art.data))
  
  }
  

  
  
  return (
    <div className="App">
      <h2>App</h2>
      <Login/>
      <button onClick={apiFetch} > Fetch </button>
    </div>
  );
}

export default App;
