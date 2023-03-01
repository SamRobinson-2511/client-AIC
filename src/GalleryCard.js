
function GalleryCard({gallery, handleDeleteGallery}) {


    //add gallery


    //delete gallery
    // function handleDelete(){
    //     fetch(`/galleries/${gallery.id}`, {
    //         method: 'DELETE'
    //     })
    //     .then(r => r.json())
    //     .then(()=> onDeleteGallery(gallery))
    // }




    return(
        <div>
            <button onClick={handleDeleteGallery}>Delete Gallery</button>
        </div>
    )
}

export default GalleryCard;