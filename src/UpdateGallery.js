
import {useEffect, useState, useContext} from 'react'

function UpdateGallery({id}){
    const [galleries, setGalleries] = useState([])
    


    // useEffect(()=> {
    //     fetch("/galleries")
    //     .then(r=>r.json())
    //     .then(galleries => console.log(galleries))
    // }, [])


    useEffect(() => fetchGalleries(), [])

    function fetchGalleries () {
        fetch("/galleries")
        .then(r => r.json())
        .then(setGalleries)
    }

    const [formData, setFormdata] = useState({
        title: "",
        description: ""
    })

    const {title, description} = formData

    function editGallery() {
        const editedGally = {
            title,
            description
        }
        
        fetch(`/galleries/${id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(editedGally)
        })

        .then(res => {
            if (res.ok){
                res.json().then(gallyData =>{
                    //calback (not sure)
                    //history.push('/the-reacter-router-route)
                })
            }
        })
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormdata({...formData, [name]: value})
    }


    function handleUpdate(e){
        e.preventDefault()

    }
    
    return(
    <div>
        <form className='update-gallery-form' onSubmit={editGallery}>
        <h3> Update Gallery </h3>
        <input 
              type="text" 
              className="form-control" 
              id="gallery-title" 
              name="title"
              placeholder='title'
              value={title} 
              onChange={handleChange}     
        />

        <input 
              type="text" 
              className="form-control" 
              id="gallery-title" 
              name="description"
              placeholder='description'
              value={description} 
              onChange={handleChange}     
        />
        
        <button type='submit'>Edit</button>




        </form>
    </div>
    )
}


export default UpdateGallery;