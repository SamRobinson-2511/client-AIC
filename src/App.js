import React, { useState, useEffect } from 'react'
import ArtCard from './ArtCard'
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Login  from './Login'
import Register from './Register'
import ViewerProfile from './ViewerProfile'
import NewGalleryForm from './NewGalleryForm'
import GalleryDetail from './GalleryDetail'

import NotFound from './NotFound'


const baseUrl = 'http://localhost:3000/'


function App() {
  const [art, setArt] = useState([])
  const [gallery, setGallery] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentForm, setCurrentForm] = useState('login')
  const [viewer, setViewer] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  const addGallery = (gallery) => setGallery(current => [...current, gallery])
  const updateGallery = (updatedGallery) => setGallery(current => [...current, updatedGallery])
  

  useEffect(()=>{
    fetch('/galleries')
    .then(res => {
      if(res.ok){
        res.json().then(setGallery)
      } else {
        res.json().then(setErrors)


      }
    })
  }, [])

  



  function setCurrentViewer(currentViewer) {
    setViewer(currentViewer)
    setLoggedIn(true)
  }

  function logOut(){
    setViewer({})
    setLoggedIn(false)
    localStorage.token = ""
  }



  const toggleForm = (formName) => { setCurrentForm(formName) }
  
  const fetchArts = () => {
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

  if(errors) return <NotFound/>
  return (
    <div className="App">
      <Routes>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='*' element={<NotFound/>}/> */}
      </Routes>
      { currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} />}  
    </div>
  );
}

export default App;


{/* <div className="App">
        <h2>NowMuseuMe</h2>
            <Login/>
            
            
            <div>
              <button onClick={apiFetch}> Fetch </button>
            </div>
            <br/>
            <input type='text' id='search' onChange={handleSearch}/>
        </div> */}