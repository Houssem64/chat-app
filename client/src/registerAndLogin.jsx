import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "./UserContext"

export default function RegisterAndLogin() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const { setId, setUsername: setLoggedInUsername } = useContext(UserContext);
 const [isLoggedInOrRegister, setIsLoggedInOrRegister] = useState('register')
 async function handleSubmit(event) {
    event.preventDefault();
    const url = isLoggedInOrRegister === 'register' ? 'register' : 'login'
    const { data } = await axios.post(url, { username, password });
    setLoggedInUsername(username);
    setId(data.id);
    
 }

 return (
    <>
      <div className="flex items-center justify-center h-screen bg-black font-courier">
        <form className="border-2 border-solid border-green-500 rounded-lg bg-black shadow-md px-96 py-16" onSubmit={handleSubmit}>
          <h1 className="text-green-500 text-center text-2xl py-6 font-black">NightOwl Chat </h1>
          <input
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
            type="text"
            placeholder="Username"
            className="block w-full p-2 mb-2 placeholder-gray-500 text-green-500 placeholder-opacity-50 bg-black border-2 border-gray-500 rounded-md focus:placeholder-opacity-0 focus:caret-green-500 focus:border-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 hover:caret-green-500 hover:border-2 hover:border-green-500 hover:outline-none hover:ring-2 hover:ring-green-500"
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            className="block w-full p-2 mb-2 placeholder-gray-500 text-green-500 placeholder-opacity-50 bg-black border-2 border-gray-500 rounded-md focus:placeholder-opacity-0 focus:caret-green-500 focus:border-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 hover:caret-green-500 hover:border-2 hover:border-green-500 hover:outline-none hover:ring-2 hover:ring-green-500"
          />
          <button type="submit" className="w-full h-10 mb-2 text-lg font-bold text-green-500 border-2 border-solid border-green-500 rounded-md bg-black shadow-md hover:outline-none hover:ring-2 hover:ring-green-500">
            {isLoggedInOrRegister === 'register' ? 'Register' : 'Login'}
          </button>
          <div className="text-green-500 text-center mt-4"> 
          {isLoggedInOrRegister === 'register' && ( <div className="text-green-500 text-center mt-4" >Already Have An Account? <button className="text-green-300" onClick={()=> setIsLoggedInOrRegister('login')}>Login</button> </div> )}
          { isLoggedInOrRegister === 'login' && ( <div className="text-green-500 text-center mt-4">Don't Have An Account <button className="text-green-300" onClick={()=> setIsLoggedInOrRegister('register')}>Register</button> </div>) }
          
          </div>
        </form>
      </div>
    </>
 );
}
