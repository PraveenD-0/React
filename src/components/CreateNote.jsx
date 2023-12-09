import React from 'react';

function CreateNote({newNoteContent, newNoteContentRef,newNoteImportant,addNote, setNewNoteContent, setNewNoteImportant}) {
  return (
    <div>
      <h2>Add a New Note</h2>
      <form onSubmit={addNote}>
        <label>
          Content: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input 
            type='text'
            ref={newNoteContentRef}
            value={newNoteContent}
            onChange={e => setNewNoteContent(e.target.value)}
          />
        </label>
        <br /><br />
        <label>
          Is important: &nbsp;&nbsp;
          <select
            onChange={e => setNewNoteImportant(e.target.value)}
            value={newNoteImportant}
          >
            <option disabled>--select--</option>
            <option>true</option>
            <option>false</option>
          </select>
        </label>
        <br /><br />
        <button type='submit'>Add New Note</button>
      </form>
    </div>
  )
}

export default CreateNote;
