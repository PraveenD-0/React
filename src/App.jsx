 import React, { useState } from 'react'
//  read the notes list and render it here

 function App(props) {
  const[notes,setNotes] = useState(props.notes);
   return (
     <div>
       <h1>Notes</h1>
       <ul>
        {
          notes.map(note =>
          <li key={note.di}>{note.content}</li>
          )
        }
       </ul>
     </div>
   )
 }
 
 export default App;
 