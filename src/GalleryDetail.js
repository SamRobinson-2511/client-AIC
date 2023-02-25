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
        .then(res => res.json())
        .then(console.log)
    }, [])



    function handleDelete(){
        //DELETE to `/galleries/${params.id}`

    }
    return(
        <h1>hello</h1>
    )



}

export default GalleryDetail;