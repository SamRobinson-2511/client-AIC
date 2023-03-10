import {useState} from 'react'
import useFetch from '../hooks/fetch-hook'
import ArtCard from './ArtCard'
import {useParams} from 'react-router-dom'






function ArtCardDetails({id, title, artist_display, image_id, gallery_title, category_titles, department_title}){
    
    const {data, error, isLoaded} = useFetch(`/arts/${id}`)
    // console.log(`/arts/${id}`)
    if (error !== null) {return <div>Error: {error.message}</div>}
    if (!isLoaded) {return <div>Loading...</div>}

    // const onOptionChangeHandler = (e) => {
    //     console.log(e)
    // }
      
      
      




    const addToGallery =(e) => {
        alert('Please Select Gallery')
        console.log(e)
    }

    // const addLike = (e) => {
    //     console.log(e)
    // }


    return(
        <>
        <div className='art-card-details-container'>
            <h1>{title}</h1>
            <h1>{artist_display}</h1>
            <h2>{department_title}</h2>
            <button onClick={addToGallery}>Add to Gallery</button>
            {/* <select onOptionChangeHandler={onOptionChangeHandler}> */}
                Select Gallery
            {/* </select> */}
            {/* <button onClick={addLike}>Add Like</button> */}
            <h2>{title}</h2>
            <p>{artist_display}</p>
            <p>{image_id}</p>
            <p>{gallery_title}</p>
            {/* <p>{artwork_type_title}</p> */}
            {/* <button onClick={addToGallery}>Add to Gallery</button> */}
            {/* <button onClick={addToGallery}>Add Like</button> */}
        </div>
        </>
    )
}

export default ArtCardDetails;