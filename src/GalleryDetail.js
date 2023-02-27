import {Link, useParams, useNavigate } from 'react-router-dom'
import {useEffect, useState} from 'react'


function GalleryDetail({deleteGallery}){
    const [gallery, setGallery] = useState({title: "", viewer_id: "", description: "", art_id:""})
    const [errors, setErrors] = useState(false)

    const params = useParams()
    console.log(params)
    const navigate = useNavigate()

    //fetch one gallery 
    useEffect(()=>{
        fetch(`/galleries/${params.id}`)
        .then(res => {
            if(res.ok){
                res.json().then(setGallery)
            } else {
                res.json().then(setErrors)
            }
        })
    }, [])



    function handleDelete(){
        //DELETE to `/galleries/${params.id}`
    }
    const {viewer_id, art_id, title, description} = gallery

    return(

        <h1> render gallery details here </h1>
        
            
    )



}

export default GalleryDetail;