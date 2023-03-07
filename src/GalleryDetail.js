

import DeleteButton from './components/DeleteButton'
import UpdateButton from './components/UpdateButton'
import LikeButton from './components/LikeButton'
import usePatch from './hooks/patch-hook'
import useFetch from './hooks/fetch-hook'



function GalleryDetail({id}){
    const [value, patchValue] = usePatch('initial value')
    // const [gallery, setGallery] = useState({title: "", viewer_id: "", description: "", art_id:""})
    // const [errors, setErrors] = useState(false)
    // const {data, error, isLoaded} = useFetch(`galleries/${galleryCards.id}`)
    // if (error !== null) {
    //     return <div>Error: {error.message}</div>
    //   }
    //   if (!isLoaded) {
    //     return <div>Loading...</div>
    // }
    const handlePatch = (e) => {
        patchValue('new value')
    }

    
    const handleLike = (e) => {
        console.log(e)
    }
    

    return(
        <div className='gallery-details-container'>
            <h1> Gallery Detail </h1>
                {/* <h1>{title}</h1>
                <p>Gallery id:{id}</p>
                <p>Arts within gallery: {arts}</p> */}
                <UpdateButton onClick={handlePatch}/>
                <DeleteButton url={`/galleries/${id}`}/>
                <LikeButton />
        </div>    
    )
}


export default GalleryDetail;