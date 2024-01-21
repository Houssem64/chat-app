import { useContext } from "react";
import RegisterAndLogin from "./registerAndLogin";
import { UserContext } from "./userContext";

export default function Routes() { 
    const {username , id} = useContext(UserContext)

    if  (username) { 
        return "logged in" + username
    }
    return (
        <RegisterAndLogin/>
    )
}