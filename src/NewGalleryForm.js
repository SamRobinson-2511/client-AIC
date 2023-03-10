
import { useState, useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { ViewerContext } from './context/ViewerContext'
import useFetch from './hooks/fetch-hook'


function NewGalleryForm(){
    const { viewer, setViewer} = useContext(ViewerContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [arts, setArts] = useState({})
    const [gallery, setGallery] = useState([])
    const [errors, setErrors] = useState([])

    const history = useHistory()

    

    
    // const handleChange = (e) => {
    //   const {name, value} = e.target.value
    //   setFormData({...formData, [name]:value})
    // }


    function handleSubmit(e) {
      e.preventDefault(e);
      const newGallery = {
        viewer_id: viewer.id,
        title: title,
        description: description
      }
      setErrors(null)

      
      fetch("/galleries", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newGallery)
        })
        .then(r => {
          if(r.ok){
            r.json().then(gallery => {
              setGallery(gallery)
              history.push(`/galleries`)
            })
          } else {
            r.json().then(errorInfo => setErrors((errorInfo.errors)))
          }
        })
      }

  



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