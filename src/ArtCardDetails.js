import {useState} from 'react'

function ArtCardDetails({title, artist_display, image_id, gallery_title, artwork_type_title}){

    const addToGallery =(e) => {
        alert('Please Select Gallery')
        console.log(e)
    }

    return(
        <div className="art-card-details">
            <h2>{title}</h2>
            <p>{artist_display}</p>
            <p>{image_id}</p>
            <p>{gallery_title}</p>
            <p>{artwork_type_title}</p>
            <button onClick={addToGallery}>Add to Gallery</button>
        </div>
    )
}

export default ArtCardDetails;