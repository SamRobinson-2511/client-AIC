import { useState, useEffect } from 'react'
import {useHistory, useParams} from 'react-router-dom'
import useFetch from '../hooks/fetch-hook'
import ToggleSwitch from '../components/ToggleSwitch'
import LikeButton from '../components/LikeButton'
import Dropdown from '../components/Dropdown'
import ArtCardDetails from './ArtCardDetails'



function ArtCard({id, title, artist_display, image_id, gallery_title, category_titles, artDets}){
    
    const history = useHistory()
    const [gallery, setGallery] = useState({})
    const [galleries, setGalleries] = useState([])
    const [art, setArt] = useState({})
    const [image, setImage] = useState('')
    const [like, setLike] = useState([])
    const {data, error, isLoaded} = useFetch(`arts`)
    const imageUrl = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`

    useEffect(()=>{
        fetch(`galleries`)
        .then(r=>r.json())
        .then(setGalleries)
    },[])

    if (error !== null) {return <div>Error: {error.message}</div>}
    if (!isLoaded) {return <div> <h1>Loading...</h1></div>}

    const handleImageFetch = () => {
        fetch(imageUrl)
        .then(r => r.json())
        .then(image => {
            console.log(image_id)
            setImage(image)
        })

    }

    const handleDets = () => { 
        artDets()
    } 



   const galleryId = (e) => {
    setGallery(e.target.value)
   }

   

 


  


    // const handleDetails = (e)=>{
    //    history.push(`/arts/${id}`)
    // }

    // const handleLike = (e) => {
    //     console.log(e)
    //     fetch(`/arts_like/create`, {
    //         method: 'POST',
    //         headers: {
    //         'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(like)
    //     })
    //     .then(res => {
    //           if(res.ok){
    //               res.json().then(like => {
    //                 setLike(like)
    //               })
    //           } else {
    //             //   res.json().then(json => setErrors(json.errors))
    //           }
    //       })
    //     }

        const handleAdd = (data) => {
            setArt(data)
        }

    
        const artCardDetails = data.map(art => {
            return <ArtCardDetails 
              key={art.id}
              id={art.id}
              title={art.title}
              artist_display={art.artist_display}
              image_id={art.image_id}
              gallery_title={art.gallery_title}
              category_titles={art.category_titles}
              art_work_type_title={art.art_work_type_title}
              handleAdd={handleAdd}
              />
          })

          const handleDetails = (e) => {
            history.push(`/arts/${id}`)
        }





        // if (!gallery.includes(art.id))
        //     setGalleries([...galleries, art.id])
        //     console.log(galleries)

    return(
            
        
            <div className="art-card" >
                <h2 className='art-title' onClick={handleDetails}>{title} </h2>

            <img src={image_id} alt={title} className='card-image-container'/>
                <p className='artist-name'>{artist_display}</p>
                <p>{category_titles}</p>
                {/* <p>{id}</p> */}
                <p>{gallery_title}</p>
                <LikeButton />
                <button onClick={handleAdd} title='add-to-gallery'>Add to gallery</button>
                <button onClick={handleImageFetch} title='image-preview'> Image </button>
                <button onClick={handleDets}> artDets</button>

                    
            <label htmlFor='galleries' className="gallery-options" id="galleries"></label>
            <select onChange={galleryId} name="galleries" id="gallery-dropdown">
            <option>Add this to a Gallery? </option>
            
            </select>
            {/* {artCardDetails} */}
        </div>     
    )
}

export default ArtCard



{/* {galleries.map(gallery => 
                <option key={gallery.id} value={gallery.id}>{gallery.title}</option>
            )} */}