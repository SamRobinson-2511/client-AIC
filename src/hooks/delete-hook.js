// import { useState } from 'react';

// const useDelete = (initialItems) => {
//   const [items, setItems] = useState(initialItems);

//   const deleteItem = (itemId) => {
//     setItems(items.filter((item) => item.id !== itemId));
//   };
//   return { items, deleteItem };
// };

// export default useDelete;


import { useState, useEffect } from "react";

function useDelete(url) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (isDeleting) {
      fetch(url, { method: "DELETE" })
        .then((res) => {
          if (res.ok) {
            setResponse(res);
          } else {
            throw new Error(`HTTP error: ${res.status}`);
          }
        })
        .catch((err) => setError(err))
        .finally(() => setIsDeleting(false));
    }
  }, [isDeleting, url]);

  function deleteResource() {
    setIsDeleting(true);
  }

  return { isDeleting, error, response, deleteResource };
}


export default useDelete