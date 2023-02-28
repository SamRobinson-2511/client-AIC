
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import { ViewerContext } from './ViewerContext';
import './App.css';
import Home from './Home'
import NavBar from './NavBar'
import ArtCard from './ArtCard'
import About from './About'
import Header from './Header'
import Footer from './Footer'
import Login  from './Login'
import Register from './Register'
import ViewerProfile from './ViewerProfile'
import NewGalleryForm from './NewGalleryForm'
import GalleriesList from './GalleriesList'
import EditGalleryForm from './EditGalleryForm'
import GalleryDetail from './GalleryDetail'
import ArtList from './ArtList'
import NotFound from './NotFound'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)
  const [art, setArt] = useState([])
  const [galleries, setGalleries] = useState([])
  const [currentForm, setCurrentForm] = useState('login')
  const [viewer, setViewer] = useState({})
  const [errors, setErrors] = useState(false)
  
  
  const history = useHistory()
  


  
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
    //fetching gallery data
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
  const addGallery = () => {}
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

  

  const toggleForm = (formName) => { setCurrentForm(formName) }
  // if(errors) return <NotFound/>
  return (
    <div className='app-container'>  
      <Switch>
        <Route exact path='/'>
          <Home/>
          { currentForm === 'login' ? 
            <Login onFormSwitch={toggleForm}/> 
            : 
            <Register onFormSwitch={toggleForm} />
          }  
        </Route>
        <Route path="/viewers/:id">
          <ViewerProfile/>
        </Route>
      </Switch>

      </div>
          
        

        
        
       
  );
}

export default App;


 {/* <GalleriesList 
        galleries={galleries}
        onDeleteGallery={handleDeleteGallery}
        onAddGallery={addGallery}
        // onUpdateGallery={handleUpdateGallery}
      /> */}

      // <NewGalleryForm />


      // { 
      //   currentForm === 'login' ? 
      //   <Login onFormSwitch={toggleForm}/> 
      //   : 
      //   <Register onFormSwitch={toggleForm} />
      //   }  

      {/* { 
        currentForm === 'login' ? 
        <Login onFormSwitch={toggleForm}/> 
        : 
        <Register onFormSwitch={toggleForm} />
      }   */}

      //handle login
  // const handleLogin = (e) => {
  //   e.preventDefault()
  //   fetch('/login', {
  //       method: 'POST', 
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json'
  //       }, 
  //       body: JSON.stringify({
  //         email: emailRef.current.value,
  //         password: passwordRef.current.value,
  //       })
  //     })
  //     .then( res => res.json())
  //     .then( viewer => { 
  //       localStorage.vid = viewer.vid 
  //       console.log(viewer.vid)
  //       history('/viewer_profile')
  //   })
  // }
  
  // handleRegister
  // const handleRegister = (e) =>{
  //   e.preventDefault()
  //   fetch( '/register', {
  //       method: 'POST', 
  //       headers: { 
  //         'Content-Type': 'application/json', 
  //         Accept: 'application/json'
  //        }, 
  //        body: JSON.stringify({
  //           first_name: firstNameRef.current.value, 
  //           last_name: lastNameRef.current.value, 
  //           email: emailRef.current.value,
  //           password: passwordRef.current.value, 
  //           zip_code: zipCodeRef.current.value,
  //        })
  //       })
  //        .then( r => r.json())
  //        .then( viewer => {
  //           localStorage.vid = viewer.vid 
  //           setViewer(viewer)
  //        })
  //       }
    