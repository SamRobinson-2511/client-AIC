import { useState } from 'react'
import {useHistory} from 'react-router-dom'


function ArtCard({id, title, artist_display, image_id}){
    const [card, setCard] = useState([])
    const history = useHistory()


    const handleDetails = (e)=>{
        console.log(e)
        history.push(`/arts`)
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