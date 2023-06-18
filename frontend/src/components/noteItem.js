import React, {useState} from 'react';
import 'css/itemNote.css'
import Note from 'components/popup/note'
import PropertyItem from './propertyItem'
import {useHandleNote} from 'hooks/useHandleNote'

const NoteItem = ({note, properties}) => {
  //const [showPopup, setShowPopup] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const {addNoteInContext, addPropertiesInContext} = useHandleNote()
  const noteProperties = properties? properties.filter(property => property.note_id === note.id): []
  console.log(noteProperties)
  const onClick = (e) => {
    e.preventDefault()
    addNoteInContext(note)
    addPropertiesInContext(noteProperties)
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
      {noteProperties.map((property) => <PropertyItem key={property.id} property={property}/>
)}

    </div>
    {showPopup && <Note onClickOutside={() => {setShowPopup(false)}}/>}
    </>
    
  )
}
export default NoteItem
