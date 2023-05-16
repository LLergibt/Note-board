import React, {useState, useEffect, createContext} from 'react';
import 'css/itemNote.css'
import NoteItem from 'components/noteItem'
import axios from 'axios'

export const RefreshContext = createContext()
const NoteItems = () => {
  const [notes, setNotes] = useState()
  const [reloadDataAfterPostReq, set] = useState(false)
  const onReload = () => set(!reloadDataAfterPostReq)
  useEffect(() => {
    axios.get('/notes/?board=1').then((response) => {setNotes(response.data)})

  }, [reloadDataAfterPostReq])
  return (
    <>
    <RefreshContext.Provider value={onReload}>
    {notes && notes?.map((note) => 
      <NoteItem key={note.id} note={note}/>)}
    </RefreshContext.Provider>
    </>
    
  )
}
export default NoteItems
