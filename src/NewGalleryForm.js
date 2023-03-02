import { useState } from 'react'

function NewGalleryForm({addGallery}){
    const [formData, setFormData] = useState({title: "", description: ""})
    const [errors, setErrors] = useState([])
    
    const handleChange = (e) => {
      const {name, value} = e.target
      setFormData({...formData, [name]:value})
    }

      function handleSubmit(e) {
        e.preventDefault(e);
    
        fetch("/galleries/new", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({...formData}),
        })
        .then(r => {
          if(r.ok){
            r.json().then(data => {
              addGallery(data)
            })
          } else {
            r.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          }
        })
      }
      return (
        <div className="gallery-form">
          <form onSubmit={handleSubmit} className="add-gallery-form">
            <h3>New Gallery</h3>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={formData.title}
              placeholder="New Gallery Title"
              className="input-text"
            />
            <br />
            <input 
              type="text"
              name="description"
              onChange={handleChange}
              value={formData.description}
              placeholder="Describe the new gallery"
              className="description-input"
            />

            <br />
            <input
              type="submit"
              name="submit"
              value="Create New Gallery"
              className="submit"
            />
          </form>
        </div>
      );
    }

export default NewGalleryForm;