import {useState} from 'react'

function LikeButton(url){
    const [like, setLike] = useState(false)

    const handleLike = (e) => {
        setLike(!like)
        fetch(url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(like) 
    })
    }
    return(
        <div>
            <button onClick={handleLike}>
                {like ? 'Liked!' : 'Like'}
            </button>
        </div>
    )
}


export default LikeButton;