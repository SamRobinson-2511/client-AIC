import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import useFetch from './hooks/fetch-hook'
import ToggleSwitch from './components/ToggleSwitch'


function ArtCard({id, title, artist_display, image_id, category_titles, handleAddToGallery}){
    const [card, setCard] = useState([])
    const history = useHistory()
    const [image, setImage] = useState('')
    const {data, error, isLoaded} = useFetch(`/arts/${image_id}/images`)

    
    


    const handleDetails = (e)=>{
        history.push(`/arts/${id}`)
    }

    const fetchImage =(e) => {
    //     fetch(`/arts/${image_id}/images`)
    //     .then(r=>r.json())
    //     .then(image => {
    //         setImage(image)
    //     })
    //     console.log(image)
    }

    return(
        <>
        <div 
            className="art-card"
            onMouseEnter={fetchImage}
            onClick={handleDetails}
            >
            <div className="art-title">
                <h2>{title}</h2>
                    <p className='artist-name'>{artist_display}</p>
                    <p>{category_titles}</p>
                {/* <img>{image_id}</img> */}
                <p>{id}</p>
                {/* <button onClick={handleDetails}>Details</button> */}
                </div>
            </div>
        </>
    )
}

export default ArtCard