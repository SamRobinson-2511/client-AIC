import { useState, useContext } from 'react'
import {ViewerContext} from './context/ViewerContext.js'
import VisitCard from './VisitCard'
import VisitDetails from './pages/VisitDetails'
import NewVisitForm from './NewVisitForm'
import useFetch from './hooks/fetch-hook'
import useCount from './hooks/count-hook'
// import usePost from './hooks/post-hook'
import Input from './components/Input'


function VisitsList(){
    const [visits, setVisits] = useState([])
    const [formData, setFormData] = useState({})
    const {data, isLoaded, error} = useFetch(`visits`)
    const {add, count} = useCount(0)
    const {viewer, setViewer} = useContext(ViewerContext)
    
    // const {response, error, isLoading, postData} = usePost(`/visits/new`, formData)


    if (error !== null) {return <div>Error: {error.message}</div>}
    if (!isLoaded) {return <div>Loading...</div>}
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/visits`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
              if(res.ok){
                  res.json().then(visits => {
                    setVisits(visits)
                  })
              } else {
                //   res.json().then(json => setErrors(json.errors))
              }
          })
        }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value })
    }

    // if (isLoading) {return <div>Loading...</div>}

    // if (error) {return <div>An error occurred: {error.message}</div>}

    // if (response){return <div>Response received: {JSON.stringify(response)}</div>}


    const visitCards = data.map(visit => {
        return <VisitCard
            key={visit.id}
            id={visit.id}
            comment={visit.comment}
            date={visit.date}
            count={count}
        />
    })

   

    const handleDetails = (e) => {
        console.log(e)
    }


    return(
        <>

        <div className='create-visit-form'>
            <br/>
            <div> 
            <form onSubmit={handleSubmit}>
                <input type='text' name='viewer_id' placeholder="viewer-id" onChange={handleChange}/>
                <input type='text' name='date' placeholder='date' onChange={handleChange}/>
                <input type='text' name='comment' placeholder='comment' onChange={handleChange}/>
                {/* <Input type='text' name='name' onInput={handleInput}/> */}
                {/* <Input type='text' name='name' onInput={handleInput}/> */}
                <button type='submit' onClick={handleSubmit}>Add Visit </button> 
            </form>
            
            
            
            
            <div className="visit-card-container" 
                onMouseEnter={handleDetails}
            >
            <h1> Your VISITS  </h1>
                {visitCards}
                </div>
            </div>
        </div>
        {/* <VisitDetails visitCards={visitCards}/> */}
        </>
    )
}


export default VisitsList;

{/* <div className="gallery-card" onClick={handleDetails}>
                <div className="gallery-title"></div> */}