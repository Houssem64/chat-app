import React, { useState } from "react";
import axios from "axios";
export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
async function register(event) {
  event.preventDefault();
  await axios.post('/register', { username, password });

}
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-black	font-courier	">
        
        <form action="POST" className="border-2 border-solid border-green-500 rounded-lg bg-black shadow-md  px-96 py-16" onSubmit={register}>
          
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
            className="block w-full p-2 mb-2 placeholder-gray-500 text-green-500  placeholder-opacity-50 bg-black border-2 border-gray-500 rounded-md focus:placeholder-opacity-0 focus:caret-green-500 focus:border-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 hover:caret-green-500 hover:border-2 hover:border-green-500 hover:outline-none hover:ring-2 hover:ring-green-500"
          />
          <button className="w-full h-10 mb-2 text-lg font-bold text-green-500 border-2 border-solid border-green-500 rounded-md bg-black shadow-md hover:outline-none hover:ring-2 hover:ring-green-500">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
