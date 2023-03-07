import React, { useState, useEffect } from "react"

const ViewerContext = React.createContext();

function ViewerProvider({ children }) {
  useEffect(() => {
    fetch(`/viewer`)
    .then((r) => {
      if(r.ok) {
        r.json().then((viewerInfo) => {
          setViewer(viewerInfo)})
        }
      })
    }, [])
    const [viewer, setViewer] = useState(null)
    return <ViewerContext.Provider value={{viewer, setViewer}}>{children}</ViewerContext.Provider>
  }

  export {ViewerContext, ViewerProvider}




// import React from "react";
// import { useState, useEffect } from "react";

// const UserContext = React.createContext();

// // create a provider component
// function UserProvider({ children }) {

//     useEffect(() => {
//         fetch("/me").then((r) => {
//           if (r.ok) {
//             r.json().then((userInfo) => {
//               setUser(userInfo)});
//           }
//         });
//       }, [])

//     const [user, setUser] = useState(null);

//     // the value prop of the provider will be our context data
//     // this value will be available to child components of this provider
//     return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>;
//   }
  
//   export { UserContext, UserProvider };