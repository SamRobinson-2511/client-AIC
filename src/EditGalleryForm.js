import {useState} from 'react'

function EditGalleryForm({viewer, handleUpdateGalery}){
    const [formData, setFormData] = useState({
        title:'', 
        description:''
    })

    console.log(viewer)

    fetch(`/gallery${viewer.id}/edit`)


    
    
    return(
        <>
            <h1>Edit Gallery Form</h1>
        </>
    )
}



export default EditGalleryForm;