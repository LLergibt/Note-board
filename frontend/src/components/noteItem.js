import React, {useState} from 'react';
import 'css/itemNote.css'
import Note from 'components/popup/note'
import PropertyItem from './propertyItem'
import {useHandleNote} from 'hooks/useHandleNote'

const NoteItem = ({note}) => {
  //const [showPopup, setShowPopup] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const {addNoteInContext} = useHandleNote()
  const onClick = (e) => {
    e.preventDefault()
    addNoteInContext(note)
    setShowPopup((prev) => {
      return !prev
    })
  }
  return (
    <>
    <div className="noteItem" onClick={onClick}>
      <p className="title">
      {note.title}
      </p>

    </div>
    {showPopup && <Note onClickOutside={() => {setShowPopup(false)}}/>}
    </>
    
  )
}
export default NoteItem
