import { useEffect, useState } from 'react'


function VisitsList({visitsUrl}){
    const [visits, setVisits] = useState([])

    useEffect(()=>{
        fetch(visitsUrl)
        .then(r=>r.json())
        .then(visits => setVisits(visits))
    },[])
    console.log(visits)


    return(
        <h1> visits list </h1>
    )
}


export default VisitsList;