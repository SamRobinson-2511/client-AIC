import React, { useState, createContext } from "react"

const ViewerContext = createContext();

function ViewerProvider({ children }) {
    const [viewer, setViewer] = useState(null);
    return (
        <ViewerContext.Provider value={{ viewer, setViewer }}>
          {children}
        </ViewerContext.Provider>
      );
    }

export { ViewerContext, ViewerProvider };