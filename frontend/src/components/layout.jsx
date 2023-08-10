import {Outlet} from 'react-router-dom';
import Header from 'components/layout/header'
import React, { useState } from 'react'
import Note from 'components/popup/note'
import {usePopup} from 'hooks/usePopup'
import {useNote} from 'contexts/NoteProvider'

export const RefreshContext = createContext()
const Layout = () => {
  const [hidden, setHidden] = useState(false);
  const {note, onCreateNote} = useNote()

  const [reloadDataAfterPostReq, set] = useState(false)
  const onReload = () => set(!reloadDataAfterPostReq)


  const {isPopup, showPopup, hidePopup} = usePopup(onCreateNote)

  const onClick = (e) => {
    e.preventDefault()
    setHidden((prev) => {
      return !prev
    })
  }
  return (
    <>
    <RefreshContext.Provider value={reloadDataAfterPostReq, onReload}>
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
        {isPopup && note && <Note onClickOutside={() => hidePopup()}/>}
        <Outlet/>
    </div>
    </div>


    </div>
    </RefreshContext.Provider>
    </>
  )
}
export default Layout
