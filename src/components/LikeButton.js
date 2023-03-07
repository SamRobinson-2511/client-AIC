import {useState} from 'react'

function LikeButton(){
    const [liked, setLiked] = useState(false)

    const handleLike = (e) => {
        setLiked(!liked)
    }
    return(
        <div>
            <button onClick={handleLike}>
                {liked ? 'Liked!' : 'Like'}
            </button>
        </div>
    )
}


export default LikeButton;