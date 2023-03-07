import {useState} from 'react'
import useFetch from '../hooks/fetch-hook'
import ArtCard from './ArtCard'






function ArtCardDetails( {id} ){
    
    const {data, error, isLoaded} = useFetch(`arts/${id}`)
    console.log(`/arts/${id}`)
    if (error !== null) {
        return <div>Error: {error.message}</div>
      }
      if (!isLoaded) {
        return <div>Loading...</div>
    }
      
      const artCardDetails = () => {
            

        }
      




    const addToGallery =(e) => {
        alert('Please Select Gallery')
        console.log(e)
    }

    const addLike = (e) => {
        console.log(e)
    }

    // const artCardDetails = data.map(art => {
    //     return <ArtCardDetails
    //       key={art.id}
    //       id={art.id}
    //       title={art.title}
    //       artist_display={art.artist_display}
    //       image_id={art.image_id}
    //       gallery_title={art.gallery_title}
    //       category_titles={art.category_titles}
    //       art_work_type_title={art.art_work_type_title}
    //     />
    //   })

    return(
        <>
        <h1>you're here</h1>
        <h1>{data.id}</h1>
        <button onClick={addToGallery}>Add to Gallery</button>
        <button onClick={addLike}>Add Like</button>
        {/* {artCardDetails} */}
            {/* <h2>{title}</h2>
            <p>{artist_display}</p>
            <p>{image_id}</p>
            <p>{gallery_title}</p>
            <p>{artwork_type_title}</p>
            <button onClick={addToGallery}>Add to Gallery</button>
            <button onClick={addToGallery}>Add Like</button> */}
        </>
    )
}

export default ArtCardDetails;