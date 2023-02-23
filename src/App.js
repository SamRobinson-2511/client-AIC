import React, { useState, useEffect } from 'react'
import ArtCard from './ArtCard'
import './App.css';
import Login from './Login'


const baseUrl = 'http://localhost:3000/'
function App() {
  const [art, setArt] = useState([])
  const apiFetch = () => {
    fetch(baseUrl + 'fetch_arts')
    .then(r=>r.json())
    .then(art => setArt(art.data))
    console.log(art)
  }


  const handleSearch = () => {
    fetch(baseUrl + 'search_arts', {
      method: 'POST', 
      headers: {
        'content-type': 'application/json', 
        accept: 'application/json'
      },
      body: JSON.stringify({ search: ""})
    })
    .then(r => r.json())
    .then(console.log)
  }

  return (
    <div className="App">
      <h2>App</h2>
      <Login/>
      <br/>
      <button onClick={apiFetch}> Fetch </button>
      <br/>
      <input type='text' id='search' onChange={handleSearch}/>
    </div>
  );
}

export default App;
