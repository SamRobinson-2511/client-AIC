import { useEffect, useState} from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import GalleriesList from './GalleriesList'
import Gallery from './Gallery'
import NewGalleryForm from './NewGalleryForm'
import GalleryLayout from './GalleryLayout'
import About from './About'
import NavBar from './NavBar'

function ViewerProfile(){
    const [gallery, setGallery] = useState([])
    const [errors, setErrors] = useState([])

    const params = useParams()
    useEffect(()=> {
        fetch(`/galleries/${params.id}`)
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
        <NavBar />
            <Routes>
                <Route path='/new_gallery' element={<NewGalleryForm/>} />
                <Route path='/about' element={<About/>} />
                
        </Routes>
        </>

    )
}

export default ViewerProfile;





{/* <Route path='/galleries' element={<GalleryLayout/>}>
                    <Route index element={<GalleriesList/>}/>
                    <Route path=':id'element={<Gallery/>}/>
                    <Route path='new'element={<NewGalleryForm/>}/> */}