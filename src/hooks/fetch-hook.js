
import {useEffect, useState, } from 'react'


const useFetch = (url) => {
    
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    

    useEffect(()=>{
        
        const fetchData = () => {
            
            fetch(url)
            .then(response => response.json())
            .then(data=> {
                setIsLoaded(true)
                setData(data)
            })
            .catch(error => {
                setError(error)
            })
        }
        fetchData()
    }, [url])
    return {data, isLoaded, error}
}

export default useFetch