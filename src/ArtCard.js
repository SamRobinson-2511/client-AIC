import { useState } from 'react'

function ArtCard({id, title, artist_display, image_id}){
    const [card, setCard] = useState([])


    const handleDetails = (e)=>{
        console.log(e)
    }

    return(
        <>
        <div className="art-card">
            <div className="art-title">
                <h2>{title}</h2>
                <p>{artist_display}</p>
                <p>{image_id}</p>
                <p>{id}</p>
                <button onClick={handleDetails}>Details</button>
            </div>
        </div>
        </>
    )
}

export default ArtCard