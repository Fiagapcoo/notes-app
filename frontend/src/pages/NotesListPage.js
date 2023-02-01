import React, { useState, useEffect } from 'react';
import ListItem from '../components/ListItem';
import AddButton  from '../components/AddButton';


const NotesListPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    try {
      const response = await fetch('/api/notes/');
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title'>&#9782; Notas</h2>
        <p className='notes-count'>Existem {notes.length} notas</p>

      </div>
      <div className="notes-list">
        {notes.map((note, index) => (
            <ListItem key={index} note={note} />
        ))}
      </div>
      <AddButton />
    </div>
  );
};

export default NotesListPage;