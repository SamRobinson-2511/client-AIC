import {useState} from 'react'
import useDelete from '../hooks/delete-hook'


function DeleteButton({url}){
    const [showConfirmation, setShowConfirmation] = useState(false)
    const {isDeleting, error, response, deleteResource} = useDelete(url)

    function handleClick(){
        setShowConfirmation(true)
    }
    function handleConfirm(){
        deleteResource()
    }

    if (error) {
        return <div>Error: {error.message}</div>;
      }
    
      if (response) {
        return <div>Resource deleted!</div>;
      }
    
      if (showConfirmation) {
        return (
          <div>
            Are you sure?
            <button onClick={handleConfirm} disabled={isDeleting}>
              {isDeleting ? "Deleting..." : "Yes"}
            </button>
            <button onClick={() => setShowConfirmation(false)}>No</button>
          </div>
        );
      }
    
      return <button onClick={handleClick}>Delete resource</button>;
    }


export default DeleteButton