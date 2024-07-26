
import React, { createContext, useState } from "react"


export const MyContext = createContext()

export const MyProvider = ({ children }) => {
    
    // ^^ database creation :

    const [test, setTest] = useState("database1 text")
    const [test2 , setTest2] = useState(["database array"])
    

    return (
        <>

            <MyContext.Provider value={ [test, setTest , test2 , setTest2] } >
                {children}
            </MyContext.Provider>

        </>
    )

}
