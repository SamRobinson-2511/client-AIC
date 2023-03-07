
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react'

import { ViewerContext } from './context/ViewerContext';
import useHover from './hooks/hover-hook'
import useFetch from './hooks/fetch-hook'
import useForm from './hooks/form-hook'
import useDelete from './hooks/delete-hook'
import useCollapse from 'react-collapse'
// import useCount from './hooks/count-hook'
import './App.css';
import Modal from './Modal'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Auth from './Auth'
// import Login from './Login'
import Contact from './Contact'
import SearchBar from './components/SearchBar'
import ArtCard from './pages/ArtCard'
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
import ArtCardDetails from './pages/ArtCardDetails';
import Exhibitions from './Exhibitions';
import GalleryCard from './GalleryCard'
import NotFound from './NotFound'



// import NewVisitForm from './NewVisitForm';
import VisitForm from './VisitForm'

function Collapsible() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
  <div className="collapsible">
      <div className="header" {...getToggleProps()}>
          {isExpanded ? 'Collapse' : 'Expand'}
      </div>
      <div {...getCollapseProps()}>
          <div className="content">
              Now you can see the hidden content. <br/><br/>
              Click again to hide...
          </div>
      </div>
  </div>
  );
}

function App() {
  const {viewer, setViewer} = useContext(ViewerContext)
  const {items, deleteItems} = useDelete(null)

  
  
  
  // dark mode 
  
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentForm, setCurrentForm] = useState('login')
  const [currentViewer, setCurrentViewer] = useState({})
  const [errors, setErrors] = useState(false)

  //on hover actions
  const [hovered, isHovered] = useHover()
  const [isLoginMode, setIsLogInMode] = useState(true)

  //use count
  // const count = useCount()
  //use history
  const history = useHistory()
  //on form switch
  const toggleForm = (formName) => { setCurrentForm(formName) }


  //routes and endpoints
  
  // const galleriesUrl = '/galleries'
  const galleryUrl = '/galleries/:id'
  const newGalleryUrl = '/galleries/new'
  const artsUrl = '/arts'
  
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

  // const handleUpdateProfile = (e) => {
  //   e.preventDefault()
  //   console.log(e)
  // }

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

  
  // const switchModeHandler = () => {
  //   if(!isLoginMode){
  //     setFormData({
  //       // first_name: {value: ''},
  //       // last_name: {value: ''},
  //       // email: {value: ''},
  //       // password: {value: ''},
  //       // zip_code: {value: ''}
  //     })
  //   } else {
  //     setFormData({
  //       ...formState.inputs, 
  //       name: {value: ''}
  //     })
  //   }
  //   setIsLogInMode(prevMode => !prevMode)
  //   history.push(`/register`)
  // }
  



  

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
    <>
    
    <Router>
      <div className='main'>
        <div className="container-fluid">
          <NavBar/>
            <Switch>
          <Route exact path = '/'>
            <Home/>
          </Route>

          <Route exact path='/login'>
            <Login />
          {/* { currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} />} */}
          </Route>

          <Route exact path='/register'>
            <Register />
          </Route>

          <Route path='/viewers/:id/update'>
            <EditProfile />
          </Route>

          <Route path='/logout'>
            <Logout />
          </Route> 
          <Route path='/create'>
            <Create />
          </Route>
          <Route  path="/galleries/:id/">
            <GalleryDetail/>
          </Route>

          <Route  path="/galleries/:id/destroy">
            <GalleryCard handleDeleteGallery={handleDeleteGallery}/>
          </Route>

          <Route path="/galleries">
            <GalleriesList />
            {/* <GalleryCard
              galleryUrl={galleryUrl}
              patchReq={patchReq}
              deleteReq={deleteReq}
            /> */}
          </Route>
          

          <Route path="/arts">
            <ArtList artsUrl = {artsUrl}/>
          </Route>

          <Route exact path="/arts/:id">
            <ArtCardDetails/>
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

          {/* <Route exact path="/collapsible">
            <Collapsible/>
          </Route> */}

          <Route path='*'>
            <NotFound/>
          </Route>

      </Switch>
      </div>  
    </div>
    <Footer/>
    </Router>
    </>

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