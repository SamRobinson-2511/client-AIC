import { useEffect, useState} from 'react'
import Header from './Header'
import GalleriesList from './GalleriesList'
import Gallery from './Gallery'
import NewGalleryForm from './NewGalleryForm'
import About from './About'
import NavBar from './NavBar'

function ViewerProfile(){
    const [gallery, setGallery] = useState([])
    const [errors, setErrors] = useState([])
    return(
        <div className="user-profile">
            <div className='nav-bar'>
                <h2>hi</h2>
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





