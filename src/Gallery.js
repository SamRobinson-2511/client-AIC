import {useOutletContext,useParams } from 'react-router-dom'

function Gallery(){
    const {id} = useParams()
    const obj = useOutletContext()
    return(
        <h1> Gallery {id} {obj.hello}</h1>
    )
}

export default Gallery;