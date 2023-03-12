import React, {useState, useEffect} from 'react';
import 'css/itemNote.css'
import NoteItem from 'components/noteItem'
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
