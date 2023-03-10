
import {useState, useEffect} from 'react'
import DeleteButton from '../components/DeleteButton'
import UpdateButton from '../components/UpdateButton'
import LikeButton from '../components/LikeButton'
import usePatch from '../hooks/patch-hook'
import useFetch from '../hooks/fetch-hook'
import {useParams} from 'react-router-dom'
import ArtCard from './ArtCard'
import GalleryCard from '../GalleryCard'




function GalleryDetail({galleryData}){
    const {id} = useParams
    const [value, patchValue] = usePatch('initial value')
    const {data, error, isLoaded} = useFetch(`/galleries/${id}`)
    const [galleryDetails, setGalleryDetails] = useState(null)

    if (error !== null) {return <div>Error: {error.message}</div>}
    if (!isLoaded) {return <div> <h1>Loading...</h1></div>}
    
    
    
    const handleUpdate = (e) => {
        console.log(e.target.value)
        
    
    }
    


    // const [gallery, setGallery] = useState({title: "", viewer_id: "", description: "", art_id:""})
    // const [errors, setErrors] = useState(false)
    // const {data, error, isLoaded} = useFetch(`galleries/${galleryCards.id}`)
    // if (error !== null) {return <div>Error: {error.message}</div>}
    // if (!isLoaded) {return <div>Loading...</div>}

    // useEffect(()=>{
    //     fetch(`/${id}`)
    //     .then(r=>r.json())
    //     .then(console.log)
    // })
    
    

    const handleLike = (e) => {
        console.log(e)
    }
    

    return(
        <div className='gallery-details-container'>
            <h1> Gallery Detail </h1>
                <h1>Title: </h1>
                <p>Gallery id: </p>
                <p>Arts within gallery: </p>
                <button onClick={handleUpdate} value={galleryData.id}>Update</button>


                {/* <UpdateButton onClick={handlePatch} value={galleryData.id}/> */}
                <DeleteButton url={`/galleries/${id}`}/>
                <LikeButton />
        </div>    
    )
}


export default GalleryDetail;