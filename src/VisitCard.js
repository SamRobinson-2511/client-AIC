import { useState, useContext } from 'react'
import {ViewerContext} from './context/ViewerContext'
import { useHistory } from 'react-router-dom'
import DeleteButton from './components/DeleteButton'
import useCount from './hooks/count-hook'
import useFetch from './hooks/fetch-hook'






function VisitCard({id, comment, date, arts,}) {
    const [details, setDetails] = useState([])
    const {data, error, isLoaded} = useFetch(`/visits/`)
    
    
    
    const history = useHistory()

    const handleDetails = (e) =>  {
        history.push(`/visits/${id}`)   
    }

    return(
        <>
        <div className="visit-card">
                <p>{comment}</p>
                <p>{date}</p>
                <p>{id}</p>
                <DeleteButton url={`/visits/${id}`}/>
                <button onClick={handleDetails}>Details</button>
            </div>
        </>
    )
}


export default VisitCard;