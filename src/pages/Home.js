
import useFetch from '../hooks/fetch-hook'
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";
import { ViewerContext } from '../context/ViewerContext';
import {useState, useContext} from 'react'
import {useHistory, Link} from 'react-router-dom'


function Home(){
    const {viewer, setViewer} = useContext(ViewerContext)
    const [editAccount, setEditAccount] = useState(false)
    const history = useHistory()
    const [errors, setErrors] = useState([])
    // const {data, error, isLoaded} = useFetch(`/viewers/${viewer.id}`)
    // if (error !== null) {return <div>Error: {error.message}</div>}
    // if (!isLoaded) {return <div> <h1>Loading...</h1></div>}

    const handleEditAccount = () => {
        setEditAccount((editAccount) => !editAccount)
    }
    
    function deleteAccount(){
        setErrors([])
        fetch(`/viewers/${viewer.id}/delete`, {
            method: 'DELETE'
        })
        .then(r=>{
            if(r.ok){
                setViewer(null)
                history.push(`/signup`)
            } else {
                r.json().then(errors => setErrors(errors.error))
            }
        })

    function handleLogout(){
        fetch(`/logout`, {
            method: 'DELETE'
        })
        .then(r=>{
            if(r.ok){
                setViewer(null)
                history.push(`/`)
            }
        })   
    }
    return(
        <div className='home'>
            <h1> Now Museu Me</h1>
            <p>Welcome. ${viewer.firstName}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
    }
}

export default Home;