import { useState, useEffect } from 'react'
import ArtCard from './ArtCard'
import ArtCardDetails from './ArtCardDetails'

function ArtList(){
  const [arts, setArtArray] = useState([])
  const [filteredArt, setFilteredArt] = useState([])
  const [isLoading, setIsLoading]= useState(true)
  const [errors, setErrors] = useState(false)

  //fetch and map over arts list
  useEffect(()=>{
    setIsLoading(true)
    fetch(`/arts`)
    .then(r=>r.json())
    .then(arts=> {
      setArtArray(arts)
      setFilteredArt(filteredArt)
      setIsLoading(false)
    })
  },[])
  console.log(arts)


  

  const artCard = arts.map(art => {
    return <ArtCard
      key={art.id}
      id={art.id}
      title={art.title}
      artist_display={art.artist_display}
      image_id={art.image_id}
    />
  })

  const artCardDetails = arts.map(art => {
    return <ArtCardDetails
      key={art.id}
      id={art.id}
      title={art.title}
      artist_display={art.artist_display}
      image_id={art.image_id}
      gallery_title={art.gallery_title}
      art_work_type_title={art.art_work_type_title}
      />
  })

      return(
        <>
          <h1>Arts</h1>
          {artCard}
          {artCardDetails}
        </>
      )
}


export default ArtList;