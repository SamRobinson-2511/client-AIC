import { useEffect, useState } from 'react'
import useFetch from './hooks/fetch-hook'
// import EditGalleryForm from './EditGalleryForm'
import GalleryCard from './GalleryCard'
import NewGalleryForm from './NewGalleryForm'


function GalleriesList(){
    const {data, isLoaded, error} = useFetch(`/galleries`)
    
    if (error !== null) {return <div>Error: {error.message}</div>}
    if (!isLoaded) {return <div>Loading...</div>}
    
    
    const galleryCards = data.map(gallery => {
        return <GalleryCard
            key={gallery.id}
            id={gallery.id}
            title={gallery.title}
            description={gallery.description}
            image_url={gallery.image_url}
            art_id={gallery.art_id}
            />
    })

    

    return(
        <>
        <div id='gallery-list-div'>
            <h1>Galleries List</h1>
                {galleryCards}
        </div>        
        {/* <EditGalleryForm galleryCards={galleryCards}/> */}
        </>
    )
}

export default GalleriesList;