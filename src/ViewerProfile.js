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

    useEffect(()=> {
        fetch(`/galleries`)
        .then(res => {
            if(res.ok){
                res.json().then(setGallery)
            } else {
                res.json().then(setErrors)
            }
        })
    }, [])
    if(errors) return <h2>{errors.error}</h2>
    
    
    return(
        <>
            <h2>Gello</h2>
        </>

    )
}

export default ViewerProfile;





