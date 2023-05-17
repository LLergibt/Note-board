import React, {useState, useEffect, useContext} from 'react';
import 'css/itemNote.css'
import NoteItem from 'components/noteItem'
import {RefreshContext} from 'components/layout'
import axios from 'axios'

const NoteItems = () => {
  const [notes, setNotes] = useState()
  const reloadDataAfterPostReq = useContext(RefreshContext)
  useEffect(() => {
    axios.get('/notes/?board=1').then((response) => {setNotes(response.data)})

  }, [reloadDataAfterPostReq])
  return (
    <>
    {notes && notes?.map((note) => 
      <NoteItem key={note.id} note={note}/>)}
    </>
    
  )
}
export default NoteItems
