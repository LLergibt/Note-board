import React, {useState, useEffect, useContext} from 'react';
import NoteItem from 'components/noteItem'
import {RefreshContext} from 'components/layout'
import axios from 'axios'

const NoteItems = () => {
  const [notes, setNotes] = useState()
  const [properties, setProperties] = useState()
  const reloadDataAfterPostReq = useContext(RefreshContext)
  useEffect(() => {
    if (!notes) {
    axios.get('/notes/?board=1').then(response => setNotes(response.data))
    axios.get('/notes/properties/?board_id=1').then(response => setProperties(response.data))
    }

  }, [reloadDataAfterPostReq])
  return (
    <>
    {notes && notes.map((note) => 
      <NoteItem key={note.id} note={note} properties={properties}/>)}
    </>
    
  )
}
export default NoteItems
