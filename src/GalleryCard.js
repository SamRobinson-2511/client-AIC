import { useHistory } from 'react-router-dom'
import GalleryDetail from './GalleryDetail'
import DeleteButton from './components/DeleteButton'


function GalleryCard({id, title, description, art_id, image_id, image_url, arts, handleDeleteGallery}) {

    const history = useHistory()

    const handleDetails = (e) =>  {
        history.push(`galleries/${id}`)
        
    }    
    
        return(
            <>
            <div className="gallery-card" onClick={handleDetails}>
                <div className="gallery-title">
                    <p>{image_url}</p>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>{image_id}</p>
                    <p>{id}</p>
                    <p>{arts}</p>
                </div>
            </div>
        </>
    )
}


export default GalleryCard;





    //add gallery


    //delete gallery
    // function handleDelete(){
    //     fetch(`/galleries/${gallery.id}`, {
    //         method: 'DELETE'
    //     })
    //     .then(r => r.json())
    //     .then(()=> onDeleteGallery(gallery))
    // }




{/* <div id='gallery-div'> 
            <div className="gallery-card">
                <h1>{title}</h1>
                <p>{description}</p>
                <button onClick={handleDetails}>Show Details</button>
                
                    
            </div>
        </div> */}


        {/* <button className="small-btn" onClick={handleViewGallery}>Open Gallery</button>
                    <button className="small-btn" onClick={handleDeleteGallery}>Delete Gallery</button> */}