import { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "axios";
export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [username , setUsername] = useState(null);
    const [id , setId] = useState(null);
    useEffect(()=> { 
        axios.get('/profile',{withCredentials:true} ).then(response=> { 
        console.log(response.data)    
        })
    })
    return (
        <UserContext.Provider value={{username, setUsername , id , setId}}>
            {children}
        </UserContext.Provider>
    )
}