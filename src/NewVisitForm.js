import {useState, useContext} from 'react'
import {ViewerContext} from './context/ViewerContext'
import Input from './components/Input'
import {useHistory} from 'react-router-dom'
import usePost from './hooks/post-hook'

function NewVisitForm({addVisit, newVisitsUrl, postReq}){
    const {viewer, setViewer} = useContext(ViewerContext)
    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState([])
    const {postData} = usePost({})
    
    const handleChange = (e) => {
      const {name, value} = e.target
      setFormData({...formData, [name]:value})
    }

      function handleSubmit(e) {
        e.preventDefault(e);
        
      }
      
      return (
        <div className="visit-form">
          <form onSubmit={handleSubmit} className="add-visit-form">
            <h3>New Visit Form</h3>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              value={formData.date}
              placeholder="Visit Date"
              className="input-text"
            />
            <br />
            <input 
              type="text"
              name="comment"
              onChange={handleChange}
              value={formData.comment}
              placeholder="Describe the visit"
              className="comment-input"
            />

            <br />
            <input
              type="submit"
              name="submit"
              value="Create New Visit"
              className="submit"
            />
          </form>
        </div>
      );
    }

export default NewVisitForm;