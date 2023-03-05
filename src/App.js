
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react'
import { ViewerContext } from './ViewerContext';
import useHover from './hooks/hover-hook'
// import useCount from './hooks/count-hook'
import './App.css';
import Modal from './Modal'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Auth from './Auth'
// import Login from './Login'
import Contact from './Contact'
import SearchBar from './components/SearchBar'
import ArtCard from './ArtCard'
import About from './pages/About'
import Footer from './Footer'
import Login  from './components/Login'
import Logout from './Logout'
import Register from './components/Register'
import Create from './components/Create'
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

// import NewVisitForm from './NewVisitForm';
import VisitForm from './VisitForm'

function App() {
  const {viewer, setViewer} = useContext(ViewerContext)
  // dark mode 
  
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentForm, setCurrentForm] = useState('login')
  const [currentViewer, setCurrentViewer] = useState({})
  const [errors, setErrors] = useState(false)

  //on hover actions
  const [hovered, isHovered] = useHover()

  //use count
  // const count = useCount()
  //use history
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

  // set current viewer
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
    <div className='main'>
      <div id='nav-div' className='nav-bar'>
        <span><NavBar/></span>
        
    
   
    {/* <NavBar/> */}
    {/* <SearchBar/> */}
    {/* <Footer/> */}
    {/* <Route path='/auth' element={<Auth/>}/>
    <Route path='/' element={<Contact/>}/> */}
    <Switch>
      {/* <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/'>
        <Register/>
      </Route> */}

        <Route exact path='/'>
        { currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} />}
        </Route>
      
        <Route path='/viewers/:id/update'>
          <EditProfile />
        </Route>

        <Route path='/logout'>
          <Logout />
        </Route> 

        <Route  path="/galleries/:id/destroy">
          <GalleryCard handleDeleteGallery={handleDeleteGallery}/>
        </Route>

        <Route path="/galleries">
          <GalleriesList 
            galleriesUrl = {galleriesUrl}
            handleUpdateGallery = {handleUpdateGallery}
            handleCreateGallery = {handleCreateGallery}
            handleDeleteGallery = {handleDeleteGallery}
            patchReq={patchReq}
            deleteReq={deleteReq}
            postReq={postReq}
            newGalleryUrl={newGalleryUrl}
          />
          <Create/>
          <GalleryCard
            galleryUrl={galleryUrl}
            patchReq={patchReq}
            deleteReq={deleteReq}
          />
        </Route>

        <Route exact path="/arts">
          <ArtList artUrl = {artUrl}/>
          {/* <SearchBar artUrl = {artUrl}/> */}
        </Route>

        <Route exact path="/arts/:id">
          <ArtCard/>
        </Route>

        {/* <Route path="/arts/search_arts">
          <ArtCard/>
        </Route> */}


        <Route exact path='/visits'>
          <VisitsList visitsUrl={visitsUrl}/>
          {/* <NewVisitForm 
            newVisitsUrl={newVisitsUrl}
            postReq={postReq}
          /> */}
        </Route>

        <Route exact path='arts/exhibitions'>
          <Exhibitions/>
        </Route>

        <Route exact path="/about">
          <About/>
        </Route>

        <Route path='*'>
          <NotFound/>
        </Route>

      </Switch>
      </div>  
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