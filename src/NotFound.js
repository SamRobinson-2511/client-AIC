import { Link } from 'react-router-dom'


function NotFound(){
    return(
        <>
            <h1>404:Not Found</h1>
            <button as={Link} to='/'>Back home</button>
        </>
        
    )
}

export default NotFound;