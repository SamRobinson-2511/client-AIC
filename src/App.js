
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import { ViewerContext } from './ViewerContext';
import './App.css';
import Modal from './Modal'
import Home from './Home'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import ArtCard from './ArtCard'
import About from './About'
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
import Exhibitions from './Exhibitions';
import GalleryCard from './GalleryCard'
import NotFound from './NotFound'
import NewVisitForm from './NewVisitForm';

function App() {
  const {viewer, setViewer} = useContext(ViewerContext)
  // dark mode 
  
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentForm, setCurrentForm] = useState('login')
  const [currentViewer, setCurrentViewer] = useState({})
  const [errors, setErrors] = useState(false)
  
  const history = useHistory()

  //on form switch
  const toggleForm = (formName) => { setCurrentForm(formName) }


  //routes and endpoints
  const galleriesUrl = '/galleries'
  const galleryUrl = '/galleries/:id'
  const newGalleryUrl = '/galleries/new'
  const artUrl = '/arts'
  const visitsUrl = '/visits'
  const newVisitsUrl = '/visits/new'
  const logoutUrl = '/logout'
  const viewerUrl = '/viewer'

  //request headers
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

  // // set current viewer
  // function setViewer(viewer) {
  //   setViewer(currentViewer);
  //   setLoggedIn(true);
  // }

  //logout

  // const handleLogout = (e) => {
  //   fetch(logoutUrl, deleteReq)
  //   setViewer({})
  //   setLoggedIn(false)
  //   console.log(viewer)

  // }
  // function handleLogout(){
  //   setViewer({})
  //   setLoggedIn(false)
  //   // localStorage.token = ""
  // }

  //auto login
  // useEffect(()=> {
  //   const token = localStorage.getItem('token')
  //   if(token){
  //     fetch('auto_login', {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     })
  //     .then(res=>res.json())
  //     .then(data =>{
  //       setViewer(data)
  //       console.log(data)
  //     })
  //   }
  // }, [])

  //update profile
  // useEffect(()=>{
  //   fetch(`/viewer`)
  //   .then(r=>r.json())
  //   .then(console.log)
  // },[])

  const handleUpdateProfile = (e) => {
    e.preventDefault()
    console.log(e)
  }

  //gallery actions 
  const handleCreateGallery = (e) => {
    e.preventDefault()
    fetch(`galleries/new`, postReq)
    .then(r=>r.json())
    .then(console.log)
  }
  //update 
  const handleUpdateGallery = (e) => {
    e.preventDefault()
    fetch(`galleries/:id`, patchReq)
    .then(r=>r.json())
    .then(console.log)
  }
  //delete gallery 
  const handleDeleteGallery = () => {
    fetch(`galleries/:id`, deleteReq)
    console.log('gallery deleted')
  }

  

  //update gallery
  // const updateGallery = (updatedGallery) => setGalleries(current => {
  //   return current.map(gallery => {
  //     if(gallery.id === updatedGallery.id){
  //       return updatedGallery
  //     } else {
  //       return gallery
  //     }
  //   })
  // })

  
  if(errors) return <NotFound/>
  return (
    <div className='app-container'>  
    {/* <NavBar/> */}
    {/* <SearchBar/> */}
      <Switch>

        <Route exact path='/'>
        { currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} />}
        </Route>

        <Route path='/viewers/:id/update'>
          <EditProfile />
        </Route>

        <Route path='/logout'>
          <Logout />
        </Route> 

        <Route  path="/galleries/:id">
          <GalleryCard handleDeleteGallery={handleDeleteGallery}/>
        </Route>

        <Route path="/galleries">
          <GalleriesList 
            galleriesUrl = {galleriesUrl}
            handleDeleteGallery = {handleDeleteGallery}
            handleUpdateGallery = {handleUpdateGallery}
            handleCreateGallery = {handleCreateGallery}
            patchReq={patchReq}
            deleteReq={deleteReq}
            postReq={postReq}
            newGalleryUrl={newGalleryUrl}p
          />
          {/* <NewGalleryForm/> */}
          <GalleryCard
            galleryUrl={galleryUrl}
            patchReq={patchReq}
            deleteReq={deleteReq}
          />
          <SearchBar/>
        </Route>

        <Route path="/arts">
          <ArtList artUrl = {artUrl}/>
          <SearchBar artUrl = {artUrl}/>
        </Route>

        <Route path="/arts/:id">
          <ArtCard/>
        </Route>

        <Route path='/visits'>
          <VisitsList visitsUrl={visitsUrl}/>
          <NewVisitForm 
            newVisitsUrl={newVisitsUrl}
            postReq={postReq}
          />
        </Route>

        <Route path='arts/exhibitions'>
          <Exhibitions/>
        </Route>

        <Route path="/about">
          <About/>
          <Footer/>
        </Route>

        <Route path='*'>
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
    

  // { currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} />}