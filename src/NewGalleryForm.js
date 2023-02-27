import { useState } from 'react'

function NewGalleryForm({onAddGallery}){
    const [formData, setFormData] = useState({
        title: "", 
        description: "",
    })
    

    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.title]: event.target.value,
        });
      }

      function handleSubmit(event) {
        event.preventDefault();
    
        const newGallery = {
          ...formData
        };
    
        fetch("/galleries", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newToy),
        })
          .then((r) => r.json())
          .then((newGallery) => {
            setFormData({
              name: "",
              description: "",
            });
            onAddGallery(newGallery);
          });
      }

      return (
        <div className="gallery">
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
              className="input-text"
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