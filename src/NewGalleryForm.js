
import { useState, useContext, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import { ViewerContext } from './context/ViewerContext'



function NewGalleryForm(){
    // const { viewer, setViewer} = useContext(ViewerContext)

    const [galleries, setGalleries] = useState([])

    // const [title, setTitle] = useState('')
    // const [description, setDescription] = useState('')



    // const [arts, setArts] = useState({})
    const [gallery, setGallery] = useState([])
    
    const [errors, setErrors] = useState([])
   

    const history = useHistory()

    // useEffect(()=>{
    //   fetch(`/galleries`)
    //   .then(r=>r.json())
    //   .then(galleries => setGalleries(galleries))
    // }, [])

    
    useEffect(() => fetchGalleries(), [])
    
    function fetchGalleries() {
      fetch("/galleries")
      .then(r => r.json())
      .then(setGalleries)
    }
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    function handleSubmit(e) {
      e.preventDefault()

      let newGally = {
        title: title,
        description: description
      }

      setTitle("")
      setDescription("")

      let gallyPost = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newGally)
      }

      fetch("/galleries", gallyPost)
      .then(r => r.json())
      .then(newGally => setGalleries([...galleries, newGally]))

    }




    // const handleChange = (e) => {
    //   const {name, value} = e.target.value
    //   setFormData({...formData, [name]:value})
    // }


    // function handleSubmit(e) {
    //   e.preventDefault(e);
    //   const newGallery = {
    //     title: title,
    //     description: description
    //   }
    //   setTitle(" ")
    //   setDescription(" ")
    //   fetch("/galleries", {
    //     method: "POST",
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(newGallery)
    //     })
    //     .then(r => {
    //       if(r.ok){
    //         r.json().then(newGallery => {
    //           setGalleries([...galleries, newGallery])
    //           // history.push(`/galleries`)
    //         })
    //       } else {
    //         r.json().then(errorInfo => setErrors((errorInfo.errors)))
    //       }
    //     })
    //   }

      return (
        <div className="gallery-form">
          <form onSubmit={handleSubmit} className="add-gallery-form">
            <h3>New Gallery</h3>
            <input 
              type="text" 
              className="form-control" 
              id="gallery-title" 
              value={title} 
              onChange={e => setTitle(e.target.value)} />

              <br/>

           
            <br />
            <input 
              type="text" 
              className="form-control" 
              id="gallery-desc" 
              value={description} 
              onChange={e => setDescription(e.target.value)} />
            <br />

            <button
              type="submit"
              name="submit"
              value="Create New Gallery"
              className="submit"
            > Add New Gallery </button>
          </form>
        </div>
      );
    }

export default NewGalleryForm;