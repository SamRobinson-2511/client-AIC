
import { Switch, Route, useHistory} from 'react-router-dom'
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react'

import { ViewerContext } from './context/ViewerContext';
// import useHover from './hooks/hover-hook'


// import useFetch from './hooks/fetch-hook'
import useForm from './hooks/form-hook'
import useDelete from './hooks/delete-hook'
import useCollapse from 'react-collapse'
import Header from './components/Header'
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
import UpdateGallery from './UpdateGallery';
import GalleriesList from './GalleriesList'
import VisitsList from './VisitsList';
import VisitCard from './VisitCard'
import VisitDetails from './pages/VisitDetails'
import EditGalleryForm from './EditGalleryForm'
import GalleryDetail from './pages/GalleryDetail'
import ArtList from './ArtList'
import ArtCardDetails from './pages/ArtCardDetails';
import Exhibitions from './Exhibitions';
import GalleryCard from './GalleryCard'
import NotFound from './NotFound'



// import NewVisitForm from './NewVisitForm';
import VisitForm from './VisitForm'


function App() {
  const { viewer } = useContext(ViewerContext)
  
  // if(viewer) {
  //   return (
  //     <div className="homepage">
  //       <div className="header-container">
  //         <Header/>
  //         <ViewerProfile/>
  //       </div>
  //       <Switch>
  //         <Route/>





  //       </Switch>
  //     </div>
  //   )
  // }

  
  
  
  // dark mode 
  
  // const [loggedIn, setLoggedIn] = useState(false)
  // const [currentForm, setCurrentForm] = useState('login')
  // const [currentViewer, setCurrentViewer] = useState({})
  // const [errors, setErrors] = useState(false)

  //on hover actions
  // const [hovered, isHovered] = useHover()
  // const [isLoginMode, setIsLogInMode] = useState(true)

  //use count
  // const count = useCount()
  //use history
  // const history = useHistory()
  //on form switch
  // const toggleForm = (formName) => { setCurrentForm(formName) }


  //routes and endpoints
  
  // const galleriesUrl = '/galleries'
  const galleryUrl = '/galleries/:id'
  const newGalleryUrl = '/galleries/new'
  // const artsUrl = '/arts'
  
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

  
  // if(errors) return <NotFound/>
  return(
    
    <div className="main">
    <div className="container-fluid">
      <NavBar/>
      <Switch>
      
        <Route exact path='/'><Login/></Route>
        <Route path='/register'><Register/></Route>
        <Route path='/home'><Home/></Route>
        <Route path="/arts"><ArtList/></Route>
        <Route path="/arts/:id"><ArtCardDetails/></Route>
        <Route path='/visits'><VisitsList/></Route>
        <Route path='/visits/:id'><VisitDetails/></Route>
        <Route path="/galleries">

          <GalleriesList/>

          <NewGalleryForm/>

          {/* <UpdateGallery/> */}
          {/* <EditGalleryForm/> */}
  
        </Route>
        <Route path="/galleries/:id/"><GalleryDetail/></Route>
        <Route path='/about'><About/></Route>
        <Route path='*'>Not Found</Route>
      </Switch>
      <Footer />
      </div>
    </div>
  )
}

export default App



