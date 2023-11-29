
 import React, { useEffect, useRef } from 'react';
 
 function App() {
  
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
    }, []);
  
   return (
     <div>
       <input
       type='text'
       placeholder='type a note...'
       ref={inputRef}
      />
     </div>
   )
 }
 
 export default App;
 