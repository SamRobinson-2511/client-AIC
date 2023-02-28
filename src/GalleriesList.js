import { useEffect, useState } from 'react'


function GalleriesList({addGallery}){
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [galleries, setGalleries] = useState([])
    const [errors, setErrors] = useState([])

    return(
        <div className='GalleryList'>
            <h1>Galleries List</h1>
            {/* <NewGalleryForm onAddGallery={addGallery}/> */}
            <ul className='Galleries'>
                {/* <Gallery
                    key={gallery.id}
                    gallery={gallery}
                    onUpdateGallery={handleUpdateGallery}
                    onDeleteGallery={handleDeleteGallery}                
                /> */}
            </ul>
        </div>        
    )
}

export default GalleriesList;