import {useState} from 'react'

const usePost = (url, formData) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    const postData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        const json = await res.json();
        console.log(json)
        // setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
  
    return { response, error, isLoading, postData };
  };
  
  export default usePost