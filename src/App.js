
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import { ViewerContext } from './ViewerContext';
import './App.css';
import Home from './Home'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import ArtCard from './ArtCard'
import About from './About'
import Header from './Header'
import Footer from './Footer'
import Login  from './Login'
import Logout from './Logout'
import Register from './Register'
import ViewerProfile from './ViewerProfile'
import EditProfile from './EditProfileForm';
import NewGalleryForm from './NewGalleryForm'
import GalleriesList from './GalleriesList'
import VisitsList from './VisitsList';
import EditGalleryForm from './EditGalleryForm'
import GalleryDetail from './GalleryDetail'
import ArtList from './ArtList'
import GalleryCard from './GalleryCard'
import NotFound from './NotFound'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)
  const [art, setArt] = useState([])
  const [galleries, setGalleries] = useState([])
  const [currentForm, setCurrentForm] = useState('login')
  const [currentViewer, setViewer] = useState({})
  const [errors, setErrors] = useState(false)
  
  
  
  
  const history = useHistory()

  const galleriesUrl = '/galleries'
  const galleryUrl = '/galleries/:id'
  const artUrl = '/arts'
  const visitsUrl = '/visits'

  const deleteReq = {method: 'DELETE', headers: {
    'Content-Type':'application/json'}
  }

  const postReq = {
    method: 'POST', 
    headers: {'Content-Type':'application/json'}
  }
  
  const patchReq = {method: 'PATCH', headers: 
  {'Content-Type':'application/json'}
  }


  //set current viewer
  function setCurrentViewer(currentViewer) {
    setViewer(currentViewer);
    setLoggedIn(true);
  }

  //logout
  function handleLogout(){
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

  //update profile
  const handleUpdateProfile = (e) => {
    e.preventDefault()
    console.log(e)
  }

  

  





    //fetching gallery data
  // useEffect(()=>{
  //   fetch('/galleries')
  //   .then(res => {
  //     if(res.ok){
  //       res.json().then(setGalleries)
  //     } else {
  //       res.json().then(setErrors)
  //     }
  //   })
  // }, [])
  //create gallery 
  const handleCreateGallery = (e) => {
    e.preventDefault()
  }
  //update gallery
  const handleUpdateGallery = (e) => {
    e.preventDefault()
  }
  //delete gallery 
  const handleDeleteGallery = () => {
    fetch(`galleries/:id`, deleteReq)
    console.log()
  }



  //fetch artwork from AIC - maybe carousel of images on homepage
  // useEffect(()=>{
  //   fetch(`/arts`)
  //   .then(r=>r.json())
  //   .then(art => setArt(art))
  // }, [])
  // console.log(art)
  // const artworks = () => {
  //   art.map((a)=>{
  //     key: art.id, 
  //     id: art.id, 
  //     title: art.title, 
  //     artist_display: art.artist_display,
  //   })
  // }

  //create gallery

  const createGallery = (e) => {
    e.preventDefault()
  }

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
  if(errors) return <NotFound/>
  return (
    <div className='app-container'>  
      <Switch>
        <Route exact path='/'>
          <ViewerProfile/>
          <EditProfile/>
        </Route>

        <Route path='/viewers/:id/update'>
          <EditProfile/>
        </Route>

        <Route  path="/galleries/:id">
          <GalleryCard handleDeleteGallery/>
        </Route>

        <Route path="/galleries">
          <GalleriesList 
            handleDeleteGallery = {handleDeleteGallery}
            handleUpdateGallery = {handleUpdateGallery}
            patchReq={patchReq}
            deleteReq = {deleteReq}
          />
          <NewGalleryForm/>
          <GalleryCard
            patchReq={patchReq}
            deleteReq={deleteReq}
          />
          <SearchBar/>
        </Route>

        <Route path="/arts">
          <ArtList artUrl = {artUrl}/>
          <SearchBar artUrl = {artUrl}/>
        </Route>
        <Route path='/visits'>
          <VisitsList visitsUrl={visitsUrl}/>
        </Route>

        <Route path="/about">
          <About/>
          <Footer/>
        </Route>
        <Route>
          <NotFound/>
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
    

  // { currentForm === 'login' ? 
  //         <Login onFormSwitch={toggleForm}/> 
  //         : 
  //         <Register onFormSwitch={toggleForm} />
  //     }  