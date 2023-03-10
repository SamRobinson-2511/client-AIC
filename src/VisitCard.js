import { useState, useContext } from 'react'
import {ViewerContext} from './context/ViewerContext'
import { useHistory } from 'react-router-dom'
import DeleteButton from './components/DeleteButton'
import useCount from './hooks/count-hook'
import useFetch from './hooks/fetch-hook'







function VisitCard({id, comment, date, arts,}) {
    const {viewer, setViewer} = useContext(ViewerContext)
    const [details, setDetails] = useState([])
    const {data, error, isLoaded} = useFetch(`/visits`)
    
    
    
    
    const history = useHistory()

    const handleDetails = (e) =>  {
        history.push(`/visits/${id}`)   
    }

    return(
        <>
        <div className="visit-card">
            <div className="visit-card-comment"><p>{comment}</p>
                <div className="visit-date-div"><p>{date}</p>
                    <div className='visit-button-div'>
                        <div className="delete-button"><DeleteButton url={`/visits/${id}`}/>
                        <div>
                            <button onClick={handleDetails}>Details</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default VisitCard;