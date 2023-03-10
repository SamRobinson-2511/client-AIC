import { useEffect, useState } from 'react'

function Exhibitions(){
    const [exhibitions, setExhibitions] = useState([])
    const [errors, setErrors] = useState(false)

    useEffect(()=>{
        fetch(`/arts/exhibitions`)
        .then(r=>r.json())
        .then(exhibitions => console.log(exhibitions))
    },[])


    return(
        <>
            <h1>Exhibitions</h1>
        </>
    )
}

export default Exhibitions;