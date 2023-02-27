import { ErrorResponse } from '@remix-run/router'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function GalleriesList(){
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [galleries, setGalleries] = useState([])
    const [errors, setErrors] = useState([])

    return(
        <div className='GalleryList'>
            <NewGalleryForm onAddGallery={handleAddGallery}/>
            <Filter 
                category={selectedCategory}
                onCategory={handleCategoryChange}
            />
            <ul className='Galleries'>
                <Gallery
                    key={gallery.id}
                    gallery={gallery}
                    onUpdateGallery={handleUpdateGallery}
                    onDeleteGallery={handleDeleteGallery}                
                />
            </ul>
        </div>        
    )
}

export default GalleriesList;