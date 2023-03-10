import { useHistory } from 'react-router-dom'
import GalleryDetail from './pages/GalleryDetail'
import UpdateGallery from './UpdateGallery'
import DeleteButton from './components/DeleteButton'
import LikeButton from './components/LikeButton'




function GalleryCard({id, image_url, title, description, image_id, arts, created_at, setGallery, gal}) {

    const history = useHistory()

    const handleGallery = (e) =>{
        setGallery(e.target.value)
        console.log(e.target.value)
        history.push(`/galleries/${id}`)
    }


    const handleUpdate = (e) => {
        console.log(e)
    }

    const handleImage = (e) => {
        console.log(e)
    }

    const handleDetails = (e) =>  {
        history.push(`/galleries/${id}`)
        fetch(`/galleries/${id}`)
        .then(r=>r.json())
        
    }    
    
        return(
            <div className="gallery-card-container" onClick={handleDetails}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p>{created_at}</p>
                    <p>{image_id}</p>
                    <p>{arts}</p>
                    <button id='add-gallery' value={gal} onClick={handleGallery}>Details</button>
                    <div className="delete-button">
                        <DeleteButton url={`/galleries/${id}`}/>
                        <LikeButton url={`/galleries/${id}`}/>
                        <UpdateGallery id={id} /> 
                    </div>
            </div>
    )
}


export default GalleryCard;
// {/* <div className="visit-card">
// <div className="visit-card-comment"><p>{comment}</p>
//     <div className="visit-date-div"><p>{date}</p>
//         <div className='visit-button-div'>
//             <div className="delete-button"><DeleteButton url={`/visits/${id}`}/>
//             <div>
//                 <button onClick={handleDetails}>Details</button>
//             </div>
//             </div>
//         </div>
//     </div>
// </div>
// </div> */}





//     //add gallery


//     //delete gallery
//     // function handleDelete(){
//     //     fetch(`/galleries/${gallery.id}`, {
//     //         method: 'DELETE'
//     //     })
//     //     .then(r => r.json())
//     //     .then(()=> onDeleteGallery(gallery))
//     // }




// {/* <div id='gallery-div'> 
//             <div className="gallery-card">
//                 <h1>{title}</h1>
//                 <p>{description}</p>
//                 <button onClick={handleDetails}>Show Details</button>
                
                    
//             </div>
//         </div> */}


//         {/* <button className="small-btn" onClick={handleViewGallery}>Open Gallery</button>
//                     <button className="small-btn" onClick={handleDeleteGallery}>Delete Gallery</button> */}