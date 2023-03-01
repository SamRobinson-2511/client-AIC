import { useEffect, useState } from 'react'
import GalleryCard from './GalleryCard'
import NewGalleryForm from './NewGalleryForm'
import NavBar from './NavBar'


function GalleriesList({addGallery}){
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [galleries, setGalleries] = useState([])
    const [errors, setErrors] = useState([])

    useEffect(()=>{
        fetch(`/galleries`)
        .then(r=>r.json())
        .then(galleries => setGalleries(galleries))
    },[])
    console.log(galleries)
    
    const galleriesArray = (g) =>{
        g.map(
        
        )
    }
    
    

    

    return(
        <div className='GalleryList'>
            <h1>Galleries List</h1>
            {/* <NewGalleryForm onAddGallery={addGallery}/> */}x
            <ul className='Galleries'>
                {/* <Gallery
                    key={gallery.id}
                    gallery={gallery}
                    onUpdateGallery={handleUpdateGallery}
                    onDeleteGallery={handleDeleteGallery}                
                /> */}
            </ul>
        </div>        
    )
}

export default GalleriesList;