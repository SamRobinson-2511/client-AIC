import { useEffect, useState } from 'react'
import VisitCard from './VisitCard'
import NewVisitForm from './NewVisitForm'
import SearchBar from './SearchBar'


function VisitsList({visitsUrl}){
    const [visits, setVisits] = useState([])

    useEffect(()=>{
        fetch(visitsUrl)
        .then(r=>r.json())
        .then(visits => setVisits(visits))
    }, [])
    
    const visitCards = visits.map(visit => {
        return <VisitCard
            key={visit.id}
            id={visit.id}
            comment={visit.comment}
            date={visit.date}
        />
    })

    return(
        <div className="visit-div">
            <SearchBar/>
            <h1> Visits List  </h1>
                <ul className="visit-cards">{visitCards}</ul>
        </div>
    )
}


export default VisitsList;