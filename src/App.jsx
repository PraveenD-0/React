 import React, { createContext, useState } from 'react'
 import ChildComponent from './components/ChildComponent';
 import GrandChildComponent from './components/GrandChildComponent';
  

 const MessageContext =createContext();
 function App() {
   
  const [message, setMessage] =  useState('Hello, Grand Child!');
  const [coins, setCoins] = useState([1,2,3,4,5,6])
   return (
     <div>
       <h1>Parent Component</h1>
       <hr></hr>
       <MessageContext.Provider   value={{message,coins}}>
        <ChildComponent />
       </MessageContext.Provider>
       
     </div>
   )
 }
 
 export { App as default, MessageContext};
 