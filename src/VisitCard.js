// import {useContext, useState} from 'react'
// import ViewerContext from './ViewerContext'

function VisitCard({comment, date, postReq, handleAdd}){
    // const {viewer, setViewer} = useContext(ViewerContext)

    


    return(
        <div className="visit-card">
            <p>{date}</p>
            <p>{comment}</p>
        </div>
    )
}

export default VisitCard;