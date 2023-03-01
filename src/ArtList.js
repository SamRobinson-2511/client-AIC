import { useState, useEffect } from 'react'
import ArtCard from './ArtCard'

function ArtList(){
  const [art, setArtArray] = useState([])
  const [errors, setErrors] = useState(false)
  
  useEffect(()=>{
    fetch(`/arts`)
    .then(r=>r.json())
    .then(art=> setArtArray(art))
  },[])
  console.log(art)

  

    
    
  

  

  

  

  
    //search arts from rails endpoint 
  // const handleSearch = () => {
  //     fetch('/search_arts', {
  //       method: 'POST', 
  //       headers: {
  //         'content-type': 'application/json', 
  //         accept: 'application/json'
  //       },
  //       body: JSON.stringify({ search: ""})
  //     })
  //     .then(r => r.json())
  //     .then(console.log)
  //   }

      return(
        <>
          <ArtCard />
        </>
      )
}


export default ArtList;