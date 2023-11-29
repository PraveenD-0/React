 import React, { useState } from 'react'
 import ChildComponent from './components/ChildComponent';
 import GrandChildComponent from './components/GrandChildComponent';
 function App() {
   
  const [message, setMessage] =  useState('Hello, Grand Child!');
  const [coins, setCoins] = useState([1,2,3,4,5,6])
   return (
     <div>
       <h1>Parent Component</h1>
       <ChildComponent message ={ message } coins={coins}/>
       
     </div>
   )
 }
 
 export default App;
 