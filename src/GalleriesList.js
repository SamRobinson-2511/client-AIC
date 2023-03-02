import { useEffect, useState } from 'react'
import GalleryCard from './GalleryCard'
import NewGalleryForm from './NewGalleryForm'


function GalleriesList({galleriesUrl}){
    const [galleries, setGalleries] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/galleries")
        .then(r=>r.json())
        .then(galleries => setGalleries(galleries))
    },[])


    const galleryCards = galleries.map(gallery => {
        return <GalleryCard
            key={gallery.id}
            id={gallery.id}
            title={gallery.title}
            description={gallery.description}
            art_id={gallery.art_id}
            />
    })

    return(
        <div className='GalleryList'>
            <h1>Galleries List</h1>
            <ul className='gallery-cards'>
                {galleryCards}
            </ul>
        </div>        
    )
}

export default GalleriesList;