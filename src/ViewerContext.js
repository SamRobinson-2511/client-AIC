import React, { useState } from "react"

const ViewerContext = React.createContext();

function ViewerProvider({ children }) {
    const [viewer, setViewer] = useState(null);
    return (
        <ViewerContext.Provider value={{ viewer, setViewer }}>
          {children}
        </ViewerContext.Provider>
      );
    }

export { ViewerContext, ViewerProvider };