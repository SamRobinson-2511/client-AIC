import {Link} from 'react-router-dom'

function GalleryCard({gallery, onDeleteGallery, onUpdateGallery}) {
    const {title, description, art_id} = gallery

    //delete gallery
    function handleDelete(){
        fetch(`/galleries/${gallery.id}`, {
            method: 'DELETE'
        })
        .then(r => r.json())
        .then(()=> onDeleteGallery(gallery))
    }

    return(
        <div className="gallery-card">
            <button onClick={handleDelete}>Delete Gallery</button>
        </div>
    )
}

export default GalleryCard;