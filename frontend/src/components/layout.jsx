import React, {useContext, createContext} from 'react'
import {Outlet} from 'react-router-dom';
import 'css/layout.css'
import { useState, useEffect } from 'react'
import {PopupCreateNote} from 'components/popup/createNote'
import axios from 'axios'

const Layout = () => {
  const [hidden, setHidden] = useState(false);
  const [createNotePopup, setCreateNotePopup] = useState(false);
  useEffect(() => {
    if (createNotePopup) {
      axios.post('notes/', {
        board_id: 1
      }).then(console.log('succeed'))
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
    <i className="gg-menu"></i>
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
      {createNotePopup && <PopupCreateNote createNotePopup={createNotePopup} onClickOutside={() => {setCreateNotePopup(false)}}/>}
      <Outlet/>
    </div>


    </div>
    </>
  )
}
export default Layout
