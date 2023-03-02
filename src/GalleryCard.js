
function GalleryCard({id, title, description, art_id, handleDeleteGallery, handleViewGallery}) {
    
    
    return(
        <div className="gallery-card">
            <p>{title}</p>
            <p>{description}</p>
            
                <button className="small-btn" onClick={handleViewGallery}>Open Gallery</button>
                <button className="small-btn" onClick={handleDeleteGallery}>Delete Gallery</button>
        </div>
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




