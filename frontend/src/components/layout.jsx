import React, {useContext, createContext} from 'react'
import {Outlet} from 'react-router-dom';
import 'css/layout.css'
import { useState, useEffect } from 'react'
import Note from 'components/popup/note'
import axios from 'axios'

export const NoteContext = createContext()
export const RefreshContext = createContext()
const Layout = () => {
  const [hidden, setHidden] = useState(false);
  const [createNotePopup, setCreateNotePopup] = useState(false);
  const [note, setNote] = useState({title: null})

  const [reloadDataAfterPostReq, set] = useState(false)
  const onReload = () => set(!reloadDataAfterPostReq)

  const onCreateNote = async() => {
      const noteQuery = await axios.post('notes/', {
        board_id: 1
      })
      const propertiesQuery = await axios.get('board/properties/?board_id=1')
      const note = noteQuery.data
      const properties = propertiesQuery.data
      setNote({...note, properties: properties})

  }
  useEffect(() => {
    if (createNotePopup) {
      onCreateNote()
    }

  }, [createNotePopup])
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
    <div className={hidden? "container hidden-sidebar": "container show-sidebar"}>
      <div className="sidebar">sidebar

      </div>
      <div className="header">
        <h1>
          Askarate.moscow
        </h1>

        <button className="share">
          Поделиться
        </button>
        <div className="filters">
          <button className="share" onClick={() => {setCreateNotePopup(true)}}>
          Создать
        </button>
        </div>

    </div>
    <div className="content">
      <RefreshContext.Provider value={reloadDataAfterPostReq, onReload}>
      <NoteContext.Provider value={{note, setNote}}>
      {createNotePopup && note.title !== null && <Note onClickOutside={() => {setCreateNotePopup(false)}}/>}
      <Outlet/>
      </NoteContext.Provider>
      </RefreshContext.Provider>
    </div>


    </div>
    </>
  )
}
export default Layout
