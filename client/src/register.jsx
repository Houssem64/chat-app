import React, { useState } from "react";
import logo from "./assets/logo.png";
export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-black">
        <form action="POST" className="w-64 mx-auto" onSubmit={register}>
          <img src={logo} alt="logo" className="block w-auto h-auto p-2 mb-2" />
          <input
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
            type="text"
            placeholder="Username"
            className="block w-full p-2 mb-2 placeholder-gray-500 placeholder-opacity-50 bg-black border-2 border-gray-500 rounded-md focus:placeholder-opacity-0 focus:caret-green-500 focus:border-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 hover:caret-green-500 hover:border-2 hover:border-green-500 hover:outline-none hover:ring-2 hover:ring-green-500"
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="text"
            placeholder="Password"
            className="block w-full p-2 mb-2 placeholder-gray-500 placeholder-opacity-50 bg-black border-2 border-gray-500 rounded-md focus:placeholder-opacity-0 focus:caret-green-500 focus:border-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 hover:caret-green-500 hover:border-2 hover:border-green-500 hover:outline-none hover:ring-2 hover:ring-green-500"
          />
          <button className="w-full h-10 mb-2 text-white rounded-md bg-zinc-700">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
