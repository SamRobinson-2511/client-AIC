import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useCount from './hooks/count-hook'
import useFetch from './hooks/fetch-hook'



function VisitCard({id, comment, date}) {
    const [details, setDetails] = useState([])
    const {data, error, isLoaded} = useFetch(`/visits/`)
    const {add, subtract, count} = useCount(0)
    const history = useHistory()

    const handleDetails = (e) =>  {
        history.push(`/visits/${id}`)   
    }

    const handleNewVisit = () => {
        add()
        history.push(`/visits/new`)
    }
    const handleDeleteVisit = () => {
        subtract()
    }

    //post req to 
    const addVisit = (e) => {
        

    }    
    return(
        <>
        <div className="card">
            <div className="visit-title">
                <p>{comment}</p>
                <p>{date}</p>
                <p>{id}</p>
                <p>Visits: {count}</p>
                <button 
                    type='button'
                    onClick={handleNewVisit} >Add Visit
                </button>
                <button 
                    type='button'
                    onClick={handleDeleteVisit} >Delete Visit
                </button>
                <button onClick={handleDetails}>Details</button>
            </div>
        </div>
        </>
    )
}


export default VisitCard;