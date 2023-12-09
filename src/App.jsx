import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import ReadNotes from './components/ReadNotes';
import CreateNote from './components/CreateNote';

 
function App() {

  const [showStatus, setShowStatus] = useState('all');
  const [notes, setNotes] = useState([]);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('true');
  const newNoteContentRef = useRef(null);
  
  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/notes');
      setNotes(response.data);
    } catch (error) {
      console.log('Failed to fetch notes:', error);
    }
  } 
  useEffect(() => {
    newNoteContentRef.current.focus();
  }, []);

  useEffect(() => {
    fetchNotes();
  }, []); 
  const addNote = (event) => {
    event.preventDefault();
    
    let noteObject = {
      id: notes.length + 1,
      content: newNoteContent,
      important: newNoteImportant === 'true',
    }

    // setNotes(notes.concat(noteObject));

    console.log('adding a new note...');
    axios.post('http://localhost:3000/notes',
     noteObject)
     .then(response => {
      console.log('note added successfully...')
     })
  
    setNewNoteContent('');
    setNewNoteImportant('');

    newNoteContentRef.current.focus();
    fetchNotes();
  }
  const handleStatusChange = (event) => {
    setShowStatus(event.target.value);
  }

  return (
    <div>
      <ReadNotes showStatus={ showStatus } 
        handleStatusChange={ handleStatusChange }
        notes={ notes }
      />
      <hr></hr>
      <CreateNote addNote={addNote} 
        newNoteContent={newNoteContent}
        newNoteImportant={newNoteImportant}
        newNoteContentRef= {newNoteContentRef}
        setNewNoteContent={setNewNoteContent}
        setNewNoteImportant={setNewNoteImportant}
      />
    </div>
  )
}

export default App;