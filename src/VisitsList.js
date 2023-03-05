import { useEffect, useState, useRef } from 'react'
import VisitCard from './VisitCard'
import NewVisitForm from './NewVisitForm'
import SearchBar from './components/SearchBar'
import useFetch from './hooks/fetch-hook'


function VisitsList({visitsUrl}){
    const [visits, setVisits] = useState([])
const {data, error, isLoaded} = useFetch(`visits`)
    const counter = useRef()

    if (error !== null) {return <div>Error: {error.message}</div>}
    if (!isLoaded) {return <div>Loading...</div>}


    const visitCards = data.map(data => {
        return <VisitCard
            key={data.id}
            id={data.id}
            comment={data.comment}
            date={data.date}
        />
    })

    return(
        <div id="visit-list-div">
        <div className='visit-card'>
            <h1> Visits List  </h1>
                <ul>{visitCards}</ul>
            </div>
        </div>
    )
}


export default VisitsList;