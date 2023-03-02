import { useState, useEffect } from 'react'
import ArtCard from './ArtCard'

function ArtList(){
  const [arts, setArtArray] = useState([])
  const [filteredArt, setFilteredArt] = useState([])
  const [isLoading, setIsLoading]= useState(true)
  const [errors, setErrors] = useState(false)
  
  useEffect(()=>{
    setIsLoading(true)
    fetch(`/arts`)
    .then(r=>r.json())
    .then(arts=> {
      setArtArray(arts)
      setFilteredArt(filteredArt)
      setIsLoading(false)
      fetch(`arts/images`)
      .then(r=>r.json())
      .then(images => console.log(images))
    })
  },[])

  

  const artCard = arts.map(art => {
    return <ArtCard
      key={art.id}
      id={art.id}
      title={art.title}
      artist_display={art.artist_display}
      image_id={art.image_id}

    />
  })

      return(
        <>
          <h1>Arts</h1>
          {artCard} 
        </>
      )
}


export default ArtList;