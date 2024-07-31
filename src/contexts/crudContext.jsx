import { createContext } from "react";

export const CrudContext = createContext();

export const CrudContextProvider = ({ children }) => {
    
    const handle = (e, vector) => {
        e.preventDefault();
        console.log(vector);
    }

    return (
        <CrudContext.Provider value={{handle}}>
            {children}
        </CrudContext.Provider>
    )
}