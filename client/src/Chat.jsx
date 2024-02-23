import { useEffect,useState } from "react";

export default function chat() {
    const [ws,setWs] = useState(null) ; 
    useEffect(()=>{ 
        const ws = new WebSocket('ws://localhost:4000')
        setWs(ws);
        ws.addEventListener('message', handleMessage )
    }, [])  
    function  showOnlineUser(onlineUser) { 
console.log(onlineUser)
    }
    function handleMessage(ev) { 
      const messageData = JSON.parse(ev.data)
   if ('online' in messageData) { 
    showOnlineUser(messageData.online)
   }
    }
  return (
    <>
      <div className="flex h-screen bg-black">
        <div className=" bg-black my-2 mx-1 w-2/6 border-2 border-solid border-green-500 rounded-lg shadow-md">
          <h1 className="text-green-500  text-2xl py-6 font-black">Contacts</h1>
        </div>

        <div className="flex flex-col bg-black my-2 w-4/6 border-2  border-solid border-green-500 rounded-lg shadow-md">
          <div className="text-green-500 flex-grow">
            {" "}
            messages with select people{" "}
          </div>
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Type Your Message"
              className="flex-grow p-2 ml-2 mt-2 placeholder-gray-500 text-green-500 placeholder-opacity-50 bg-black border-2 border-gray-800 rounded-md focus:placeholder-opacity-0 focus:caret-green-500 focus:border-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 hover:caret-green-500 hover:border-2 hover:border-green-500 hover:outline-none hover:ring-2 hover:ring-green-500"
            />
            <button className="text-green-500 rounded-sm border-green-500 solid border-2 p-1 mr-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className=" w-8 h-8 "
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
