import React, {useState, useEffect} from 'react';
import './itemNote.css'
import NoteItem from './noteItem'
import axios from 'axios'

const NoteItems = () => {
  const [notes, setNotes] = useState()
  useEffect(() => {
    axios.get('/notes/?board=1').then((response) => {setNotes(response.data)})
  }, [])
  return (
    <>
    {notes && notes?.map((note) => 
      <NoteItem key={note.title} note={note}/>)}
    </>
    
  )
}
export default NoteItems
