import { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import useFetch from '../hooks/fetch-hook'
import ToggleSwitch from '../components/ToggleSwitch'
import LikeButton from '../components/LikeButton'



function ArtCard({id, title, artist_display, image_id, gallery_title, category_titles, handleAddToGallery}){
    const [card, setCard] = useState([])
    const history = useHistory()
    const [image, setImage] = useState('')
    const {data, error, isLoaded} = useFetch(`/arts/${image_id}/images`)
    const imageUrl = (`/arts/${image_id}`)

    if (error !== null) {
        return <div>Error: {error.message}</div>
      }
      if (!isLoaded) {
        return <div>Loading...</div>
      }

    const fetchImage = (e) => {
        fetch(`/arts/${image_id}`)
        .then(r => r.json())
        .then(image =>{
            setImage(image)
        })
        console.log(image_id)
    }

    // const fetchImage = async (e) => {
    //     const res = await fetch(`arts/${image_id}`)
    //     const imageBlob = await res.blob()
    //     const imageObjectURL = URL.createObjectURL(imageBlob)
    //     setImage(imageObjectURL)
    // }

    

  
    


    const handleDetails = (e)=>{
        console.log(e)
        history.push(`/arts/${id}`)
    }

    return(
        <>
            <div className="art-card-container"
                onHover={fetchImage}
                onClick={handleDetails}
            >
            <img src={imageUrl} alt={title} className='image'/>
            <div className="art-title">
                <h2>{title}</h2>
                    <p className='artist-name'>{artist_display}</p>
                    <p>{category_titles}</p>
                    <p>{id}</p>
                    <p>{gallery_title}</p>
                    <LikeButton/>
                </div>
            </div>
        </>
    )
}

export default ArtCard