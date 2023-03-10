// import { useState, useEffect } from 'react'
import ArtCard from './pages/ArtCard'
import ArtCardDetails from './pages/ArtCardDetails'
import useFetch from './hooks/fetch-hook'
import { useContext } from 'react'
import { ViewerContext } from './context/ViewerContext'
// import {useState, useEffect} from 'react'


function ArtList(){
  // const [arts, setArts] = useState([])
  const {data, isLoaded, error} = useFetch(`/arts`)
  const { viewer, setViewer } = useContext(ViewerContext)
  

  // useEffect(()=>{
  //   fetch(`/arts`)
  //   .then(r=>r.json())
  //   .then(arts => setArts(arts))
  // }, [])
  
  if (error !== null) {return <div>Error: {error.message}</div>}
  if (!isLoaded) {return <div> <h1>Loading...</h1></div>}

  const artDets = (id) => {
    console.log(id)

  }



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
      department_title={art.department_title}
      artDets={artDets}
      />
  })



  return(
    <div className='art-card-container' >
    <h1> AIC Arts </h1>
      {artCard}
    </div>
  )
}


export default ArtList;

