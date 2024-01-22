import React from 'react';
import axios from 'axios';
import { UserContextProvider } from './userContext';
import Routes from './routes';
function App() {
axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true;
axios.defaults.secure = false;

  return (
    <>
   <UserContextProvider>
   <Routes/>
   </UserContextProvider>
    </>
  )
}

export default App
