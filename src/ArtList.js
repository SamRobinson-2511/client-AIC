// import { useState, useEffect } from 'react'
import ArtCard from './pages/ArtCard'
import ArtCardDetails from './pages/ArtCardDetails'
import useFetch from './hooks/fetch-hook'


function ArtList(){
  const {data, isLoaded, error} = useFetch(`/arts`)
  

  if (error !== null) {return <div>Error: {error.message}</div>}
  if (!isLoaded) {return <div>Loading...</div>}


  const artCard = data.map(art => {
    return <ArtCard 
      key={art.id}
      id={art.id}
      title={art.title}
      artist_display={art.artist_display}
      image_id={art.image_id}
      gallery_title={art.gallery_title}
      category_titles={art.category_titles}
      art_work_type_title={art.art_work_type_title}
      />
  })

  // const artCard = data.map(art => {
    
  //   return <ArtCard
  //     key={art.id}
  //     id={art.id}
  //     title={art.title}
  //     artist_display={art.artist_display}
  //     image_id={art.image_id}
  //     gallery_title={art.gallery_title}
  //     category_titles={art.category_titles}
  //     art_work_type_title={art.art_work_type_title}
  //   />
  // })

  return(
    <div>
    <h1 className='art-card-container' >Explore the Collection </h1>
      {artCard}
    {/* <ArtCardDetails artCard={artCard}/> */}
    </div>
  )
}


export default ArtList;

