

import {useState, useEffect, useContext} from 'react'
import { ViewerContext } from './context/ViewerContext';

import useFetch from './hooks/fetch-hook'
import GalleryCard from './GalleryCard'
// import useHover from './hooks/hover-hook'
import DeleteButton from './components/DeleteButton'
import ArtCard from './pages/ArtCard'
import { useHistory } from 'react-router-dom'
import NewGalleryForm from './NewGalleryForm'
import EditGalleryForm from './EditGalleryForm'
import SearchBar from './components/SearchBar'
// import GalleryCard from './pages/GalleryCard'

// import useSearch from './hooks/search-hook'


function GalleriesList(){
    const [gallery, setGallery] = useState({})
    const [galleries, setGalleries] = useState([])
    const {viewer, setViewer} = useContext(ViewerContext)
    const {data, isLoaded, error} = useFetch(`galleries`)

    console.log(viewer)
    // const galleriesByType = galleries.filter(gallery => {
    //     if(typeFilter === 'all') {
    //         return galleries
    //     } else {
    //         return gallery.type === typeFilter
    //     }
    // })
    const handleDetails = (e) => {
        console.log(e.target.value)
    }

    const history = useHistory()
    // if (error !== null) {return <div>Error: {error.message}</div>}
    // if (!isLoaded) {return <div>Loading...</div>}

    


    const galleryData = data.map(gallery => {
        return <GalleryCard
            key={gallery.id}
            id={gallery.id}
            title={gallery.title}
            description={gallery.description}
            image_url={gallery.image_url}
            arts={gallery.art_id}
            date_created={gallery.created_at}
            setGallery={setGallery}
            gallery={gallery}
            />
        })
    

        
    return(
        <>
        <div className="gallery-card-container" onMouseEnter={handleDetails}>
            {galleryData}
        </div>        
            {/* <NewGalleryForm gallery={gallery}/> */}
            {/* <SearchBar data={data}/> */}
        </>
    )
}

export default GalleriesList;