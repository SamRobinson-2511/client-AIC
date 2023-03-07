import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import GalleriesList from './GalleriesList'
import NewGalleryForm from './NewGalleryForm'
import About from './pages/About'
import NavBar from './components/NavBar'
import Footer from './Footer'
import SearchBar from './components/SearchBar'

function ViewerProfile(){
    const [gallery, setGallery] = useState([])
    const [errors, setErrors] = useState([])
    
    return(
        <div className="user-profile">
            <div className='nav-bar'>
                <NavBar/>
                <div className='search-bar'>
                <SearchBar/>
                </div>
            </div>
        </div>
    )
}

export default ViewerProfile;


// useEffect(()=> {
//     fetch(`/galleries`)
//     .then(res => {
//         if(res.ok){
//             res.json().then(setGallery)
//         } else {
//             res.json().then(setErrors)
//         }
//     })
// }, [])
// if(errors) return <h2>{errors.error}</h2>





