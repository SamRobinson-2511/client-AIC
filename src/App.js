import React, { useState, useEffect } from 'react'
import './App.css';


const baseUrl = 'http://localhost:3000/'
const loginUrl = baseUrl + 'login'

function App() {
  useEffect( () => {
    if (localStorage.vid)
      console.log('Viewer found:', localStorage.vid)
    else
      console.log('No user found')
  }, [])

//login - move to login page 
//clear local storage on logout
  fetch( loginUrl, {
    method: 'POST', 
    headers: {
      'content-type': 'application/json',
      accept: 'application/json'
    }, 
    body: JSON.stringify({
      email: 'sam@sam.com',
      password: '1234Test_'
    })
  })
    .then( r => r.json())
    .then( viewer => localStorage.vid = viewer.vid)


  return (
    <div className="App">
      <h2>App</h2>
    </div>
  );
}

export default App;
