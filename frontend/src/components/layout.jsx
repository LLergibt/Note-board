import React, {useContext, createContext} from 'react'
import {Outlet} from 'react-router-dom';
import Header from 'components/layout/header'
import { useState, useEffect } from 'react'
import Note from 'components/popup/note'
import axios from 'axios'
import {usePopup} from 'hooks/usePopup'

export const NoteContext = createContext()
export const PropertyContext = createContext()
export const RefreshContext = createContext()
const Layout = () => {
  const [hidden, setHidden] = useState(false);
  const [note, setNote] = useState({title: null})
  const [properties, setProperties] = useState([])

  const [reloadDataAfterPostReq, set] = useState(false)
  const onReload = () => set(!reloadDataAfterPostReq)

  const onCreateNote = async() => {
      const noteQuery = await axios.post('notes/', {
        board_id: 1
      })
      const note = noteQuery.data
      const propertiesQuery = await axios.get(`notes/properties_of_note/?note_id=${note.id}`)
      const properties = propertiesQuery.data

      setNote(note)
      setProperties(properties)

  }

  const {isPopup, showPopup, hidePopup} = usePopup(onCreateNote)

  const onClick = (e) => {
    e.preventDefault()
    console.log('gg')
    setHidden((prev) => {
      return !prev
    })
  }
  return (
    <>
    <button  className={'gg'} onClick={onClick}>
      gg
    </button>
    <div className>
      <div className="sidebar">
       some sidebar
      </div>

    <Header onClickNoteButton={() => {showPopup()}}/>

    <div className="content">
      <RefreshContext.Provider value={reloadDataAfterPostReq, onReload}>
      <PropertyContext.Provider value={{properties, setProperties}}>
      <NoteContext.Provider value={{note, setNote}}>
        {isPopup && note.title !== null && <Note onClickOutside={() => hidePopup()}/>}
        <Outlet/>
      </NoteContext.Provider>
      </PropertyContext.Provider>
      </RefreshContext.Provider>
    </div>


    </div>
    </>
  )
}
export default Layout
