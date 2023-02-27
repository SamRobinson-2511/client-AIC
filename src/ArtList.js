import { useState, useEffect } from 'react'
import ArtCard from './ArtCard'

function ArtList(){
  const [arts, setArts] = useState([])
  const [errors, setErrors] = useState(false)

  // const artworks = { id, visits_id, gallery_id, artist_display, image_id, title, is_on_view } 

  // const indexArts = () => {
  //   fetch('/arts/index', {
  //     method: 'GET', 
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     },
  //     body: JSON.stringify({})
  //     .then(r => r.json())
  //     .then(console.log)
  //   })
  // }

  

  

  
    //search arts from rails endpoint 
  const handleSearch = () => {
      fetch('/search_arts', {
        method: 'POST', 
        headers: {
          'content-type': 'application/json', 
          accept: 'application/json'
        },
        body: JSON.stringify({ search: ""})
      })
      .then(r => r.json())
      .then(console.log)
    }

      return(
        <h1>ArtList</h1>
      )
}


export default ArtList;