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
    <div className='grid grid-cols-8'>
      <div className={hidden? "invisible": "col-span-1 top-0 left-0 inset-y-0 h-screen bg-violet-500 mr-0"}>
        <div className={hidden ? "visible": ""}>
        <button  className="" onClick={onClick}>
          gg
        </button>
        </div>
       some sidebar
      </div>

    <div className = {hidden? "col-span-8" : "col-span-7"}>
    <Header onClickNoteButton={() => {showPopup()}}/>


    <div className="">
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


    </div>
    </>
  )
}
export default Layout
