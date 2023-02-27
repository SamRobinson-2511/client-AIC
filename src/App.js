import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './Home'
import ArtCard from './ArtCard'
import About from './About'
import Header from './Header'
import Login  from './Login'
import Register from './Register'
import ViewerProfile from './ViewerProfile'
import NewGalleryForm from './NewGalleryForm'
import GalleriesList from './GalleriesList'
import GalleryDetail from './GalleryDetail'
import ArtList from './ArtList'
import NotFound from './NotFound'


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [art, setArt] = useState([])
  const [galleries, setGalleries] = useState([])
  const [currentForm, setCurrentForm] = useState('login')
  const [viewer, setViewer] = useState({})
  const [errors, setErrors] = useState(false)
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const zipCodeRef = useRef()
  const navigate = useNavigate()


  //handle login
  const handleLogin = (e) => {
    e.preventDefault()
    fetch('/login', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }, 
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value
        })
      })
      .then( res => res.json())
      .then( viewer => { 
        localStorage.vid = viewer.vid 
        navigate(`/viewer_profile`)
        console.log(viewer.vid)
    })
  }
  
  // handleRegister
  const handleRegister = (e) =>{
    e.preventDefault()
    fetch( '/register', {
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json', 
          Accept: 'application/json'
         }, 
         body: JSON.stringify({
            first_name: firstNameRef.current.value, 
            last_name: lastNameRef.current.value, 
            email: emailRef.current.value,
            password: passwordRef.current.value, 
            zip_code: zipCodeRef.current.value,
         })
        })
         .then( r => r.json())
         .then( viewer => {
            localStorage.vid = viewer.vid 
            setViewer(viewer)
            navigate('/about')
         })
        }
    
  //set current viewer
  function setCurrentViewer(currentViewer) {
    setViewer(currentViewer);
    setLoggedIn(true);
  }

  //logout
  function logOut(){
    setViewer({})
    setLoggedIn(false)
    localStorage.token = ""
  }

  //auto login
  useEffect(()=> {
    const token = localStorage.getItem('token')
    if(token){
      fetch('auto_login', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res=>res.json())
      .then(data =>{
        setViewer(data)
        console.log(data)
      })
    }

  }, [])


  const handleDeleteGallery = () => {
    fetch(`/galleries/:id`)
  }
  
  
  //fetch artwork from AIC 
  const fetchArts = () => {
    fetch('/arts')
    .then(r=>r.json())
    .then(art => setArt(art.data))
    console.log(art)
  }

  //create gallery
  //update gallery
  const updateGallery = (updatedGallery) => setGalleries(current => {
    return current.map(gallery => {
      if(gallery.id === updatedGallery.id){
        return updatedGallery
      } else {
        return gallery
      }
    })
  })
  useEffect(()=>{
      fetch('/galleries')
      .then(res => {
        if(res.ok){
          res.json().then(setGalleries)
        } else {
          res.json().then(setErrors)
        }
      })
    }, [])
  

  const toggleForm = (formName) => { setCurrentForm(formName) }
  
  
  
  
  
  
  // if(errors) return <NotFound/>
  return (
    <div className="App">
      <Header />
      <GalleriesList 
        galleries={galleries}
        onDeleteGallery={handleDeleteGallery}
        onAddGallery={handleAddGallery}
        onUpdateGallery={handleUpdateGallery}
      />

       
      { currentForm === 'login' ? <Login onFormSwitch={toggleForm} handleLogin={handleLogin}/> : <Register onFormSwitch={toggleForm} handleRegister={handleRegister}/>}  
    </div>
  );
}

export default App;
