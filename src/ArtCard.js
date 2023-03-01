import { useState } from 'react'

function ArtCard({artworks}){
    const [card, setCard] = useState([])

    


    
    return(
        <>
        <div className="art-card">
            <div className="art-title">
                <h2>title</h2>

                <button>Details</button>
            {/* <button onClick={handleDetails}>Details</button> */}
            </div>
        </div>
        </>
    )
}

export default ArtCard