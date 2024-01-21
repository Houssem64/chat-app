import { useContext } from "react";
import Register from "./register";
import { UserContext } from "./userContext";

export default function Routes() { 
    const {username , id} = useContext(UserContext)

    if  (username) { 
        return "logged in"
    }
    return (
        <Register/>
    )
}